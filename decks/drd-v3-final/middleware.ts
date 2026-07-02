import { NextRequest, NextResponse } from "next/server";

const COOKIE = "drd_auth";
const TOKEN = "harrislab-ok";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/login") || pathname.startsWith("/api/login")) {
    return NextResponse.next();
  }
  const cookie = req.cookies.get(COOKIE)?.value;
  if (cookie === TOKEN) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.searchParams.set("from", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon|images|audio).*)"],
};
