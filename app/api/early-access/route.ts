import { NextResponse } from "next/server";
import { CTA_LINKS } from "@/lib/tracking";

export function GET() {
  return NextResponse.redirect(CTA_LINKS.earlyAccess, {
    status: 307,
  });
}
