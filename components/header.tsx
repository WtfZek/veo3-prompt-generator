"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Globe, Sparkles, FileText, ChevronDown, Award, LogOut, User } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { locales, type Locale, getTranslation } from "@/lib/i18n"
import { useRouter, usePathname } from "next/navigation"
import { useLocale, generateI18nPath, switchI18nLanguage, useTranslations } from "@/hooks/use-locale"
import { useAuth } from "@/contexts/auth-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const toolsMenuRef = useRef<HTMLDivElement>(null)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()
  const { t } = useTranslations()
  const currentLocale = useLocale()
  const { user, logout, isAuthenticated } = useAuth()
  
  const switchLanguage = (locale: Locale) => {
    setIsLanguageMenuOpen(false)
    const newPath = switchI18nLanguage(pathname, locale)
    router.push(newPath)
  }

  const languageNames = {
    zh: '简体中文',
    en: 'English',
    fr: 'Français'
  }

  // Auto-close Tools dropdown when mouse leaves
  useEffect(() => {
    const handleMouseLeave = () => {
      setIsToolsMenuOpen(false)
    }

    const toolsMenu = toolsMenuRef.current
    if (toolsMenu) {
      toolsMenu.addEventListener('mouseleave', handleMouseLeave)
      return () => toolsMenu.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 xs:h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/veo3-logo-new.png"
              alt="VeO3"
              width={120}
              height={40}
              className="h-6 w-auto xs:h-8 sm:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xs:space-x-6">
            <Link
              href={generateI18nPath('/', currentLocale)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              {getTranslation(currentLocale, 'home')}
            </Link>
            {/* <Link
              href={generateI18nPath("/blog", currentLocale)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              {getTranslation(currentLocale, 'blog')}
            </Link> */}
            <Link
              href={generateI18nPath("/prompt-guide", currentLocale)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              {getTranslation(currentLocale, 'promptGuide')}
            </Link>
            
            {/* Tools Dropdown */}
            <div className="relative" ref={toolsMenuRef}>
              <button
                onClick={() => setIsToolsMenuOpen(!isToolsMenuOpen)}
                onMouseEnter={() => setIsToolsMenuOpen(true)}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
              >
                {getTranslation(currentLocale, 'tools')}
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isToolsMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isToolsMenuOpen && (
                <div className="absolute left-0 top-full mt-1 w-56 bg-background border rounded-lg shadow-xl py-2 backdrop-blur-sm">
                  <Link
                    href={generateI18nPath("/veo3-prompt-generator", currentLocale)} 
                    className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted/50 transition-colors"
                    onClick={() => setIsToolsMenuOpen(false)}
                  >
                    <Sparkles className="h-4 w-4 text-purple-600" />
                    {getTranslation(currentLocale, 'veo3PromptGenerator')}
                  </Link>
                  <Link
                    href={generateI18nPath("/video-script-generator", currentLocale)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted/50 transition-colors"
                    onClick={() => setIsToolsMenuOpen(false)}
                  >
                    <FileText className="h-4 w-4 text-blue-600" />
                    {getTranslation(currentLocale, 'videoScriptGenerator')}
                  </Link>
                  <Link
                    href={generateI18nPath("/video-to-prompt", currentLocale)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted/50 transition-colors"
                    onClick={() => setIsToolsMenuOpen(false)}
                  >
                    <FileText className="h-4 w-4 text-green-600" />
                    {getTranslation(currentLocale, 'videoToPrompt')}
                  </Link>
                  {/* <Link
                    href={generateI18nPath("/transcription", currentLocale)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted/50 transition-colors"
                    onClick={() => setIsToolsMenuOpen(false)}
                  >
                    <Award className="h-4 w-4 text-orange-600" />
                    {getTranslation(currentLocale, 'transcription')}
                  </Link> */}
                  <Link
                    href={generateI18nPath("/prompt-library", currentLocale)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted/50 transition-colors"
                    onClick={() => setIsToolsMenuOpen(false)}
                  >
                    <Award className="h-4 w-4 text-orange-600" />
                    {getTranslation(currentLocale, 'promptLibraryFooter')}
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              href={generateI18nPath("/about", currentLocale)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              {getTranslation(currentLocale, 'about')}
            </Link>
            <Link
              href={generateI18nPath("/disclaimer", currentLocale)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              {getTranslation(currentLocale, 'disclaimer')}
            </Link>
            {/* <Link
              href={generateI18nPath("/sitemap", currentLocale)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              {getTranslation(currentLocale, 'sitemap')}
            </Link> */}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
            {/* Contact Link - Hidden on Mobile */}
            <Link
              href={generateI18nPath("/contact", currentLocale)}
              className="hidden lg:block text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              {getTranslation(currentLocale, 'contact')}
            </Link>

            {/* Language Switcher - Hidden on Mobile */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{languageNames[currentLocale]}</span>
              </button>

              {isLanguageMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-background border rounded-md shadow-lg py-1">
                  {locales.map((locale) => (
                    <button
                      key={locale}
                      onClick={() => switchLanguage(locale)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-muted ${currentLocale === locale ? 'bg-muted font-medium' : ''
                        }`}
                    >
                      {languageNames[locale]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* User Menu - Only show when authenticated */}
            {isAuthenticated && user && (
              <div className="relative hidden sm:block" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
                >
                  <User className="h-4 w-4" />
                  <span className="hidden md:inline">{user.username}</span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-40 bg-background border rounded-md shadow-lg py-1">
                    <div className="px-4 py-2 text-sm text-muted-foreground border-b">
                      {user.role === 'admin' ? '管理员' : '用户'}
                    </div>
                    <button
                      onClick={() => {
                        setIsUserMenuOpen(false)
                        logout()
                      }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-muted flex items-center gap-2 text-red-600"
                    >
                      <LogOut className="h-4 w-4" />
                      登出
                    </button>
                  </div>
                )}
              </div>
            )}

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-muted/50"
            >
              {isMenuOpen ? <X className="h-5 w-5 xs:h-6 xs:w-6" /> : <Menu className="h-5 w-5 xs:h-6 xs:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4 xs:py-6">
            <nav className="space-y-4 xs:space-y-6">
              {/* Main Navigation Links */}
              <div className="space-y-3 xs:space-y-4">
                <Link
                  href={generateI18nPath('/', currentLocale)}
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {getTranslation(currentLocale, 'home')}
                </Link>
                <Link
                  href={generateI18nPath("/blog", currentLocale)}
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {getTranslation(currentLocale, 'blog')}
                </Link>
                <Link
                  href={generateI18nPath("/prompt-guide", currentLocale)}
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {getTranslation(currentLocale, 'promptGuide')}
                </Link>
                <Link
                  href={generateI18nPath("/about", currentLocale)}
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {getTranslation(currentLocale, 'about')}
                </Link>
                <Link
                  href={generateI18nPath("/disclaimer", currentLocale)}
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {getTranslation(currentLocale, 'disclaimer')}
                </Link>
                <Link
                  href={generateI18nPath("/contact", currentLocale)}
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {getTranslation(currentLocale, 'contact')}
                </Link>
                <Link
                  href={generateI18nPath("/sitemap", currentLocale)}
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {getTranslation(currentLocale, 'sitemap')}
                </Link>
              </div>

              {/* Tools Section */}
              <div className="pt-4 xs:pt-6 border-t">
                <h3 className="text-sm xs:text-base font-semibold text-foreground mb-3 xs:mb-4 px-3 xs:px-4">{getTranslation(currentLocale, 'tools')}</h3>
                <div className="space-y-3 xs:space-y-4">
                  <Link
                    href={generateI18nPath("/", currentLocale)}
                    className="flex items-center gap-2 xs:gap-3 text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Sparkles className="h-4 w-4 xs:h-5 xs:w-5 text-purple-600" />
                    {getTranslation(currentLocale, 'veo3PromptGenerator')}
                  </Link>
                  <Link
                    href={generateI18nPath("/video-script-generator", currentLocale)}
                    className="flex items-center gap-2 xs:gap-3 text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FileText className="h-4 w-4 xs:h-5 xs:w-5 text-blue-600" />
                    {getTranslation(currentLocale, 'videoScriptGenerator')}
                  </Link>
                  <Link
                    href={generateI18nPath("/video-to-prompt", currentLocale)}
                    className="flex items-center gap-2 xs:gap-3 text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FileText className="h-4 w-4 xs:h-5 xs:w-5 text-green-600" />
                    {getTranslation(currentLocale, 'videoToPrompt')}
                  </Link>
                  <Link
                    href={generateI18nPath("/transcription", currentLocale)}
                    className="flex items-center gap-2 xs:gap-3 text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Award className="h-4 w-4 xs:h-5 xs:w-5 text-orange-600" />
                    {getTranslation(currentLocale, 'transcription')}
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
