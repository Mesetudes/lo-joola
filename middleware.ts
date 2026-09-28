import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["ar", "fr", "en"];
const defaultLocale = "ar";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Ignorer les fichiers statiques et les assets Next.js
  if (
    pathname.startsWith("/_next") || 
    pathname.includes(".") || 
    pathname.startsWith("/api")
  ) {
    return;
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Rediriger vers la langue par défaut (ar)
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|images|favicon.ico).*)"],
};