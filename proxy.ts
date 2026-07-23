import { NextRequest, NextResponse } from "next/server";

const publicPages = ["/login", "/register"];

export function proxy(request: NextRequest) {
  const token = request.cookies.get("better-auth.session_token")?.value;
  const pathname = request.nextUrl.pathname;

  // If no token and not on public page → redirect to login
  if (!token && !publicPages.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If has token and on login/register → redirect to dashboard
  if (token && publicPages.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
