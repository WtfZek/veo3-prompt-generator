"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { locales, type Locale, getTranslation } from "@/lib/i18n"

export function useLocale(): Locale {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  // 首先检查路径中的语言前缀（用于多语言页面如首页）
  const pathLocale = pathname.split('/')[1] as Locale
  if (locales.includes(pathLocale)) {
    return pathLocale
  }
  
  // 然后检查URL参数中的语言偏好（用于单语言页面）
  const langParam = searchParams.get('lang') as Locale
  if (langParam && locales.includes(langParam)) {
    return langParam
  }
  
  // 默认返回英语
  return 'en'
}

export function useTranslations() {
  const locale = useLocale()
  
  return {
    locale,
    t: (key: keyof typeof import("@/lib/i18n").translations.en) => getTranslation(locale, key)
  }
}