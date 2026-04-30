import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";

async function ensureStakeholderRequestsTable(sql) {
  await sql`
    create table if not exists stakeholder_requests (
      id bigserial primary key,
      stakeholder_type text not null,
      full_name text not null,
      organization text not null,
      email text not null,
      location text,
      primary_goal text not null,
      timeline text,
      materials_summary text,
      material_categories text,
      document_link text,
      requested_output text,
      notes text,
      created_at timestamptz not null default now()
    )
  `;

  await sql`
    create index if not exists idx_stakeholder_requests_created
    on stakeholder_requests(created_at desc)
  `;
}

export async function POST(request) {
  try {
    const sql = getSql();
    await ensureStakeholderRequestsTable(sql);

    const body = await request.json();
    if (!body.fullName || !body.organization || !body.email || !body.primaryGoal || !body.stakeholderType) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    await sql`
      insert into stakeholder_requests (
        stakeholder_type,
        full_name,
        organization,
        email,
        location,
        primary_goal,
        timeline,
        materials_summary,
        material_categories,
        document_link,
        requested_output,
        notes
      ) values (
        ${body.stakeholderType},
        ${body.fullName},
        ${body.organization},
        ${body.email},
        ${body.location || ""},
        ${body.primaryGoal},
        ${body.timeline || ""},
        ${body.materialsSummary || ""},
        ${Array.isArray(body.materialCategories) ? body.materialCategories.join(", ") : ""},
        ${body.documentLink || ""},
        ${body.requestedOutput || ""},
        ${body.notes || ""}
      )
    `;

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

function isAdminAuthorized(request) {
  const adminKey = process.env.ADMIN_REVIEW_KEY;
  if (!adminKey) {
    return false;
  }

  const { searchParams } = new URL(request.url);
  const bearerToken = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") || "";
  const provided = searchParams.get("key") || request.headers.get("x-admin-key") || bearerToken;
  return provided === adminKey;
}

function toCsv(rows) {
  const columns = [
    "id",
    "created_at",
    "stakeholder_type",
    "full_name",
    "organization",
    "email",
    "location",
    "primary_goal",
    "timeline",
    "materials_summary",
    "material_categories",
    "document_link",
    "requested_output",
    "notes"
  ];

  const escape = (value) => {
    const text = String(value ?? "");
    return `"${text.replaceAll("\"", "\"\"")}"`;
  };

  const head = columns.join(",");
  const body = rows.map((row) => columns.map((column) => escape(row[column])).join(",")).join("\n");
  return `${head}\n${body}`;
}

export async function GET(request) {
  try {
    if (!isAdminAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const sql = getSql();
    await ensureStakeholderRequestsTable(sql);
    const rows = await sql`
      select
        id,
        created_at,
        stakeholder_type,
        full_name,
        organization,
        email,
        location,
        primary_goal,
        timeline,
        materials_summary,
        material_categories,
        document_link,
        requested_output,
        notes
      from stakeholder_requests
      order by created_at desc
      limit 2000
    `;

    const { searchParams } = new URL(request.url);
    if (searchParams.get("format") === "csv") {
      return new Response(toCsv(rows), {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": "attachment; filename=stakeholder-intakes.csv"
        }
      });
    }

    return NextResponse.json({ items: rows, count: rows.length });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
