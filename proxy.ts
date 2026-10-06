import { NextResponse, type NextRequest } from "next/server";
import { negotiate, routeCode } from "./src/i18n/Language.gen";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") return NextResponse.next();
  const language = negotiate(request.headers.get("accept-language") ?? undefined);
  const destination = request.nextUrl.clone();
  destination.pathname = `/${routeCode(language)}`;
  const response = NextResponse.redirect(destination, 307);
  response.headers.set("Cache-Control", "no-store");
  response.headers.set("Vary", "Accept-Language");
  return response;
}

export const config = { matcher: "/" };
