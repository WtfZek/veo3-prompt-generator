"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { locales, type Locale, getTranslation, defaultLocale } from "@/lib/i18n"

// 解析路径，提取语言和实际路径
export function parseI18nPath(pathname: string): { locale: Locale; actualPath: string } {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0] as Locale
  
  if (locales.includes(firstSegment)) {
    return {
      locale: firstSegment,
      actualPath: '/' + segments.slice(1).join('/')
    }
  }
  
  return {
    locale: defaultLocale,
    actualPath: pathname
  }
}

// 生成国际化路径
export function generateI18nPath(path: string, locale: Locale = defaultLocale): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return locale === defaultLocale ? normalizedPath : `/${locale}${normalizedPath}`
}

// 切换语言
export function switchI18nLanguage(currentPathname: string, targetLocale: Locale): string {
  const { actualPath } = parseI18nPath(currentPathname)
  return generateI18nPath(actualPath, targetLocale)
}

export function useLocale(): Locale {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  // 优先从路径前缀获取语言
  const { locale } = parseI18nPath(pathname)
  if (locale !== defaultLocale) {
    return locale
  }
  
  // 其次从URL参数获取
  const langParam = searchParams.get('lang') as Locale
  if (langParam && locales.includes(langParam)) {
    return langParam
  }
  
  return defaultLocale
}

export function useTranslations() {
  const locale = useLocale()
  
  return {
    locale,
    t: (key: keyof typeof import("@/lib/i18n").translations.en) => getTranslation(locale, key)
  }
}