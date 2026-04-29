// UploadThing route disabled pending API key setup
export async function POST(request) {
  return Response.json({ error: "UploadThing not yet configured" }, { status: 503 });
}
