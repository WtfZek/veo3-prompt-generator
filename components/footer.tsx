"use client"

import Link from "next/link"
import Image from "next/image"
import { useLocale } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

export function Footer() {
  const currentLocale = useLocale()
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-12">
        {/* Logo and Name */}
        <div className="mb-4 xs:mb-6 sm:mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 xs:gap-3">
            <Image 
              src="/images/veo3-logo-new.png" 
              alt="veo3promptgenerator.online" 
              width={40} 
              height={40} 
              className="h-5 w-auto xs:h-6 sm:h-8"
            />
            <span className="text-base xs:text-lg sm:text-xl font-bold text-primary">veo3promptgenerator.online</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
          <div className="space-y-2 xs:space-y-3 sm:space-y-4">
            <h3 className="font-semibold mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base">{getTranslation(currentLocale,"coreTools")}</h3>
            <ul className="space-y-1 xs:space-y-2 sm:space-y-3 text-xs xs:text-sm">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("video-script-generator")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-muted-foreground hover:text-primary cursor-pointer text-left w-full py-1"
                >
                  {getTranslation(currentLocale,"videoScriptGeneratorFooter")}
                </button>
              </li>
              <li>
                <Link href="/veo3-prompt-generator" className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"veo3PromptGeneratorFooter")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base">{getTranslation(currentLocale,"tools")}</h3>
            <ul className="space-y-1 xs:space-y-2 sm:space-y-3 text-xs xs:text-sm">
              <li>
                <Link href="/video-to-prompt" className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"videoToPromptFooter")}
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground/50 cursor-not-allowed block py-1">
                  {getTranslation(currentLocale,"videoTranscriptionFooter")}
                </span>
              </li>
              <li>
                <Link href="/prompt-guide" className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"promptGuideFooter")}
                </Link>
              </li>
              <li>
                <Link href="/prompt-library" className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"promptLibraryFooter")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base">{getTranslation(currentLocale,"company")}</h3>
            <ul className="space-y-1 xs:space-y-2 sm:space-y-3 text-xs xs:text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"aboutFooter")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"contactFooter")}
                </Link>
              </li>
              {/* <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"blogFooter")}
                </Link>
              </li> */}
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"communityFooter")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base">{getTranslation(currentLocale,"legal")}</h3>
            <ul className="space-y-1 xs:space-y-2 sm:space-y-3 text-xs xs:text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"privacyPolicyFooter")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary block py-1">
                  {getTranslation(currentLocale,"termsOfServiceFooter")}
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-muted-foreground hover:text-primary block py-1">
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
          <p>&copy; {new Date().getFullYear()} VeO3 Prompt Generator. {getTranslation(currentLocale,"allRightsReserved")}.</p>
        </div>
      </div>
    </footer>
  )
}
