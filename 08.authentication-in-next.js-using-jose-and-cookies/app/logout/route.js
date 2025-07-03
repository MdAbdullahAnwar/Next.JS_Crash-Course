import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.redirect(new URL("/login", process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"));
  res.cookies.set("token", "", { maxAge: 0 });
  return res;
}

