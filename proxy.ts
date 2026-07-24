import { NextRequest, NextResponse } from "next/server";

const publicPages = ["/login", "/register"];

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Allow public pages
  if (publicPages.includes(pathname)) {
    return NextResponse.next();
  }

  // Check for session token
  const token = request.cookies.get("better-auth.session_token")?.value;

  // If no token on protected page → redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
