// app/api/download-vpat/route.js
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

const FILES = {
  "vpat-2-5-2025-08-15": {
    path: "/reports/appfolio-vpat-2.5.pdf",
    filename: "AppFolio_VPAT_2.5_2025-08-15.pdf",
    type: "application/pdf",
  },
};

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const entry = FILES[id];

  if (!entry) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const absPath = path.join(process.cwd(), "public", entry.path.replace(/^\//, ""));
  const data = await readFile(absPath);

  return new NextResponse(data, {
    headers: {
      "Content-Type": entry.type,
      "Content-Length": String(data.byteLength),
      "Content-Disposition": `attachment; filename="${entry.filename}"`,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
