"use client"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { switchI18nLanguage } from "@/hooks/use-locale"
import type { Locale } from "@/lib/i18n"

interface LanguageSelectorProps {
  currentLocale: Locale
}

export function LanguageSelector({ currentLocale }: LanguageSelectorProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (locale: Locale) => {
    const newPath = switchI18nLanguage(pathname, locale)
    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLanguage("zh")} className={currentLocale === "zh" ? "bg-accent" : ""}>
          🇨🇳 简体中文
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("en")} className={currentLocale === "en" ? "bg-accent" : ""}>
          🇺🇸 English
        </DropdownMenuItem>
        {/* <DropdownMenuItem onClick={() => switchLanguage("fr")} className={currentLocale === "fr" ? "bg-accent" : ""}>
          🇫🇷 Français
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
