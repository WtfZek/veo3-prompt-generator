import { NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['zh', 'en']
const defaultLocale = 'zh'

function getLocale(request: NextRequest): string {
  const acceptedLanguage = request.headers.get('accept-language') ?? undefined
  const headers = { 'accept-language': acceptedLanguage }
  const languages = new Negotiator({ headers }).languages()
  return match(languages, locales, defaultLocale)
}

// 轻量级token存在性检查
function hasValidToken(request: NextRequest): boolean {
  const token = request.cookies.get('auth-token')?.value
  return !!token && token.length > 0
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // 跳过API路由和静态资源
  if (pathname.startsWith('/api') || pathname.startsWith('/_next') || pathname.includes('.')) {
    return NextResponse.next()
  }
  
  // 处理英文路径重写
  if (pathname.startsWith('/en/')) {
    const actualPath = pathname.replace('/en', '') || '/'
    
    // 需要认证的页面路径
    const protectedPaths = [
      '/veo3-prompt-generator',
      '/video-script-generator', 
      '/video-to-prompt',
      '/transcription'
    ]
    
    // 检查是否是需要认证的页面
    const isProtectedPath = protectedPaths.some(path => 
      actualPath === path || actualPath.startsWith(`${path}/`)
    )
    
    // 对需要认证的页面进行token检查
    if (isProtectedPath && !hasValidToken(request)) {
      return NextResponse.redirect(new URL('/en/login', request.url))
    }
    
    // 重写URL到实际路径
    return NextResponse.rewrite(new URL(actualPath, request.url))
  }
  
  // 处理中文路径
  const protectedPaths = [
    '/veo3-prompt-generator',
    '/video-script-generator', 
    '/video-to-prompt',
    '/transcription'
  ]
  
  // 登录页面不需要认证
  if (pathname === '/login' || pathname.startsWith('/login/')) {
    return NextResponse.next()
  }
  
  // 检查是否是需要认证的页面
  const isProtectedPath = protectedPaths.some(path => 
    pathname === path || pathname.startsWith(`${path}/`)
  )
  
  // 对需要认证的页面进行token检查
  if (isProtectedPath && !hasValidToken(request)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|.*\\.).*)',
  ],
}
