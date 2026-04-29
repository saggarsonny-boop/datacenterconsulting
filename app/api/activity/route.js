import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";

export async function GET() {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ items: [] });
    }

    const sql = getSql();

    const intake = await sql`
      select
        id,
        created_at,
        'intake' as kind,
        company_name,
        property_location,
        null::text as file_name,
        null::text as link
      from intake_submissions
      where clerk_user_id = ${userId}
      order by created_at desc
      limit 12
    `;

    const uploads = await sql`
      select
        id,
        created_at,
        'upload' as kind,
        null::text as company_name,
        null::text as property_location,
        file_name,
        coalesce(uploadthing_url, external_url) as link
      from document_uploads
      where clerk_user_id = ${userId}
      order by created_at desc
      limit 12
    `;

    const items = [...intake, ...uploads]
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 16);

    return NextResponse.json({ items });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
