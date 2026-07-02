import { NextRequest, NextResponse } from "next/server";

const PASS = "harrislab";
const COOKIE = "drd_auth";
const TOKEN = "harrislab-ok";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const password = String(form.get("password") ?? "");
  const from = String(form.get("from") ?? "/");
  if (password !== PASS) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("from", from);
    url.searchParams.set("error", "1");
    return NextResponse.redirect(url, { status: 303 });
  }
  const dest = req.nextUrl.clone();
  dest.pathname = from.startsWith("/") ? from : "/";
  dest.search = "";
  const res = NextResponse.redirect(dest, { status: 303 });
  res.cookies.set(COOKIE, TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: true,
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
