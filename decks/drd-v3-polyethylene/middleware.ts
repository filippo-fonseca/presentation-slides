import { NextRequest, NextResponse } from "next/server";

const USER = "hol";
const PASS = "harrislab";

export function middleware(req: NextRequest) {
  const header = req.headers.get("authorization");
  if (header) {
    const [scheme, encoded] = header.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = Buffer.from(encoded, "base64").toString();
      const sep = decoded.indexOf(":");
      const user = decoded.slice(0, sep);
      const pass = decoded.slice(sep + 1);
      if ((user === USER || user === "") && pass === PASS) {
        return NextResponse.next();
      }
    }
  }
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="DRD-3 deck"' },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon|images|audio).*)"],
};
