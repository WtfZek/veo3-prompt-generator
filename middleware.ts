import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { locales, defaultLocale } from "./lib/i18n"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]

  // 如果路径以语言前缀开头，重写到实际路径
  if (locales.includes(firstSegment as any) && firstSegment !== defaultLocale) {
    const actualPath = '/' + segments.slice(1).join('/')
    const url = request.nextUrl.clone()
    url.pathname = actualPath || '/'
    return NextResponse.rewrite(url)
  }

  // 对于默认语言路径，直接通过
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|api|favicon.ico|images).*)",
  ],
}
