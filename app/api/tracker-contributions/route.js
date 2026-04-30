import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";

async function ensureTrackerContributionsTable(sql) {
  await sql`
    create table if not exists tracker_contributions (
      id bigserial primary key,
      contributor_name text not null,
      organization text,
      email text not null,
      geography text,
      stakeholder_type text,
      data_type text,
      summary text not null,
      source_link text,
      confidence_level text,
      permission_to_publish boolean not null default false,
      notes text,
      created_at timestamptz not null default now()
    )
  `;

  await sql`
    create index if not exists idx_tracker_contributions_created
    on tracker_contributions(created_at desc)
  `;
}

function isAdminAuthorized(request) {
  const adminKey = process.env.ADMIN_REVIEW_KEY;
  if (!adminKey) {
    return false;
  }

  const { searchParams } = new URL(request.url);
  const provided = searchParams.get("key") || request.headers.get("x-admin-key");
  return provided === adminKey;
}

function toCsv(rows) {
  const columns = [
    "id",
    "created_at",
    "contributor_name",
    "organization",
    "email",
    "geography",
    "stakeholder_type",
    "data_type",
    "summary",
    "source_link",
    "confidence_level",
    "permission_to_publish",
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

export async function POST(request) {
  try {
    const sql = getSql();
    await ensureTrackerContributionsTable(sql);

    const body = await request.json();
    if (!body.contributorName || !body.email || !body.summary) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    await sql`
      insert into tracker_contributions (
        contributor_name,
        organization,
        email,
        geography,
        stakeholder_type,
        data_type,
        summary,
        source_link,
        confidence_level,
        permission_to_publish,
        notes
      ) values (
        ${body.contributorName},
        ${body.organization || ""},
        ${body.email},
        ${body.geography || ""},
        ${body.stakeholderType || ""},
        ${body.dataType || ""},
        ${body.summary},
        ${body.sourceLink || ""},
        ${body.confidenceLevel || ""},
        ${Boolean(body.permissionToPublish)},
        ${body.notes || ""}
      )
    `;

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    if (!isAdminAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const sql = getSql();
    await ensureTrackerContributionsTable(sql);
    const rows = await sql`
      select
        id,
        created_at,
        contributor_name,
        organization,
        email,
        geography,
        stakeholder_type,
        data_type,
        summary,
        source_link,
        confidence_level,
        permission_to_publish,
        notes
      from tracker_contributions
      order by created_at desc
      limit 2000
    `;

    const { searchParams } = new URL(request.url);
    if (searchParams.get("format") === "csv") {
      return new Response(toCsv(rows), {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": "attachment; filename=tracker-contributions.csv"
        }
      });
    }

    return NextResponse.json({ items: rows, count: rows.length });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}