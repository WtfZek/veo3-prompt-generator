"use client"

import Link from "next/link"
import Image from "next/image"
import { useLocale, generateI18nPath } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

export function Footer() {
  const currentLocale = useLocale()
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-12">
        {/* Logo and Name */}
        <div className="mb-4 xs:mb-6 sm:mb-8 text-center">
          <Link href={generateI18nPath("/", currentLocale)} className="inline-flex items-center gap-2 xs:gap-3">
            <Image 
              src="/images/veo3-logo-new.png" 
              alt="feishu-veo3-prompt.cn" 
              width={40} 
              height={40} 
              className="h-5 w-auto xs:h-6 sm:h-8"
            />
            <span className="text-base xs:text-lg sm:text-xl font-bold text-primary">飞鼠 Veo3 提示词</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
          <div className="space-y-2 xs:space-y-3 sm:space-y-4">
            <h3 className="font-semibold mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base">{getTranslation(currentLocale,"coreTools")}</h3>
            <ul className="space-y-1 xs:space-y-2 sm:space-y-3 text-xs xs:text-sm">
              <li>
                <Link href={generateI18nPath("/video-script-generator", currentLocale)} className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"videoScriptGeneratorFooter")}
                </Link>
              </li>
              <li>
                <Link href={generateI18nPath("/veo3-prompt-generator", currentLocale)} className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"veo3PromptGeneratorFooter")}
                </Link>
              </li>
              <li>
                <Link href={generateI18nPath("/prompt-library", currentLocale)} className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"promptLibraryFooter")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base">{getTranslation(currentLocale,"tools")}</h3>
            <ul className="space-y-1 xs:space-y-2 sm:space-y-3 text-xs xs:text-sm">
              <li>
                <Link href={generateI18nPath("/video-to-prompt", currentLocale)} className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"videoToPromptFooter")}
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground/50 cursor-not-allowed block py-1">
                  {getTranslation(currentLocale,"videoTranscriptionFooter")}
                </span>
              </li>
              <li>
                <Link href={generateI18nPath("/prompt-guide", currentLocale)} className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"promptGuideFooter")}
                </Link>
              </li>
              {/* <li>
                <Link href={generateI18nPath("/prompt-library", currentLocale)} className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"promptLibraryFooter")}
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base">{getTranslation(currentLocale,"company")}</h3>
            <ul className="space-y-1 xs:space-y-2 sm:space-y-3 text-xs xs:text-sm">
              <li>
                <Link href={generateI18nPath("/about", currentLocale)} className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"aboutFooter")}
                </Link>
              </li>
              <li>
                <Link href={generateI18nPath("/contact", currentLocale)} className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"contactFooter")}
                </Link>
              </li>
              {/* <li>
                <Link href={generateI18nPath("/blog", currentLocale)} className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"blogFooter")}
                </Link>
              </li> */}
              {/* <li>
                <Link href={generateI18nPath("/community", currentLocale)} className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"communityFooter")}
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base">{getTranslation(currentLocale,"legal")}</h3>
            <ul className="space-y-1 xs:space-y-2 sm:space-y-3 text-xs xs:text-sm">
              {/* <li>
                <Link href={generateI18nPath("/privacy", currentLocale)} className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"privacyPolicyFooter")}
                </Link>
              </li>
              <li>
                <Link href={generateI18nPath("/terms", currentLocale)} className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"termsOfServiceFooter")}
                </Link>
              </li> */}
              <li>
                <Link href={generateI18nPath("/disclaimer", currentLocale)} className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"disclaimerFooter")}
                </Link>
              </li>
              {/* <li>
                <Link href="/sitemap" className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"sitemapFooter")}
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t mt-6 xs:mt-8 sm:mt-12 pt-4 xs:pt-6 sm:pt-8 text-center text-xs xs:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 飞鼠科技有限公司. {getTranslation(currentLocale,"allRightsReserved")}.</p>
        </div>
      </div>
    </footer>
  )
}
