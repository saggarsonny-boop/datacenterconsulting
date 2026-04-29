import { createUploadthing, createRouteHandler } from "uploadthing/next";
import { auth } from "@clerk/nextjs/server";
import { getSql } from "@/lib/db";

const f = createUploadthing();

const uploadRouter = {
  documents: f({
    blob: {
      maxFileSize: "32MB",
      maxFileCount: 6
    },
    pdf: {
      maxFileSize: "32MB",
      maxFileCount: 6
    }
  })
    .middleware(async () => {
      const { userId } = auth();
      if (!userId) {
        throw new Error("Unauthorized");
      }

      return { userId };
    })
    .onUploadComplete(async ({ file, metadata }) => {
      const sql = getSql();
      await sql`
        insert into document_uploads (
          clerk_user_id,
          category,
          reference,
          file_name,
          uploadthing_url,
          source
        ) values (
          ${metadata.userId},
          'other',
          '',
          ${file.name},
          ${file.url},
          'uploadthing'
        )
      `;

      return { uploadedBy: metadata.userId };
    })
};

export const { GET, POST } = createRouteHandler({
  router: uploadRouter
});
