import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";

export async function POST(request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const sql = getSql();

    await sql`
      insert into intake_submissions (
        clerk_user_id,
        contact_name,
        company_name,
        email,
        property_location,
        parcel_size,
        utility_node,
        document_summary,
        owner_use_concepts,
        notes
      ) values (
        ${userId},
        ${body.contactName || ""},
        ${body.companyName || ""},
        ${body.email || ""},
        ${body.propertyLocation || ""},
        ${body.parcelSize || null},
        ${body.utilityNode || ""},
        ${body.documentSummary || ""},
        ${body.ownerUseConcepts || ""},
        ${body.notes || ""}
      )
    `;

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
