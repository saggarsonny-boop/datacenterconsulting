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
      insert into document_uploads (
        clerk_user_id,
        category,
        reference,
        file_name,
        external_url,
        source
      ) values (
        ${userId},
        ${body.category || "other"},
        ${body.reference || ""},
        ${body.fileName || "linked-document"},
        ${body.externalUrl || ""},
        'link'
      )
    `;

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
