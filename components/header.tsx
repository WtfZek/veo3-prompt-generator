"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Globe, Sparkles, FileText, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { locales, type Locale, getTranslation } from "@/lib/i18n"
import { useRouter, usePathname } from "next/navigation"
import { useLocale } from "@/hooks/use-locale"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState(false)
  const toolsMenuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  const currentLocale = useLocale()
  
  // 生成带语言前缀的链接
  const getLocalizedPath = (path: string) => {
    if (currentLocale === 'en') {
      return path
    }
    return `/${currentLocale}${path}`
  }

  // 智能链接生成：为不支持多语言的页面添加语言偏好参数
  const getSmartLink = (path: string) => {
    // 首页使用完整的多语言路径
    if (path === '/') {
      return getLocalizedPath(path)
    }
    
    // 其他页面：如果用户当前在非英语环境，添加语言偏好参数
    if (currentLocale !== 'en') {
      return `${path}?lang=${currentLocale}`
    }
    
    return path
  }

  const switchLanguage = (locale: Locale) => {
    setIsLanguageMenuOpen(false)
    let newPath = pathname
    
    // 移除现有的语言前缀
    if (pathname.startsWith('/fr')) {
      newPath = pathname.replace(/^\/fr/, '') || '/'
    } else if (pathname.startsWith('/zh')) {
      newPath = pathname.replace(/^\/zh/, '') || '/'
    }
    
    // 检查是否是首页，如果是首页则可以切换到对应语言
    if (newPath === '/') {
      if (locale !== 'en') {
        newPath = `/${locale}/`
      }
      router.push(newPath)
    } else {
      // 对于其他页面，采用更智能的策略
      if (locale === 'en') {
        // 切换到英语：保持在当前页面
        router.push(newPath)
      } else {
        // 切换到非英语：在当前页面添加语言偏好参数
        // 这样用户可以看到页面内容，同时记住语言偏好
        const hasQuery = newPath.includes('?')
        const separator = hasQuery ? '&' : '?'
        router.push(`${newPath}${separator}lang=${locale}`)
      }
    }
  }

  const languageNames = {
    en: 'English',
    fr: 'Français',
    zh: '简体中文'
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
              href={getLocalizedPath('/')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              {getTranslation(currentLocale, 'home')}
            </Link>
            {/* <Link
              href={getSmartLink("/blog")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              {getTranslation(currentLocale, 'blog')}
            </Link> */}
            <Link
              href={getSmartLink("/prompt-guide")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              {getTranslation(currentLocale, 'promptGuide')}
            </Link>
            <Link
              href={getSmartLink("/about")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              {getTranslation(currentLocale, 'about')}
            </Link>
            <Link
              href={getSmartLink("/contact")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              {getTranslation(currentLocale, 'contact')}
            </Link>
            <Link
              href={getSmartLink("/disclaimer")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              {getTranslation(currentLocale, 'disclaimer')}
            </Link>
            {/* <Link
              href={getSmartLink("/sitemap")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            >
              {getTranslation(currentLocale, 'sitemap')}
            </Link> */}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
            {/* Tools Dropdown - Hidden on Mobile */}
            <div className="relative hidden lg:block" ref={toolsMenuRef}>
              <button
                onClick={() => setIsToolsMenuOpen(!isToolsMenuOpen)}
                onMouseEnter={() => setIsToolsMenuOpen(true)}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted/50"
              >
                {getTranslation(currentLocale, 'tools')}
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isToolsMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isToolsMenuOpen && (
                <div className="absolute right-0 top-full mt-1 w-56 bg-background border rounded-lg shadow-xl py-2 backdrop-blur-sm">
                  <Link
                    href="/"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted/50 transition-colors"
                    onClick={() => setIsToolsMenuOpen(false)}
                  >
                    <Sparkles className="h-4 w-4 text-purple-600" />
                    {getTranslation(currentLocale, 'veo3PromptGenerator')}
                  </Link>
                  <Link
                    href="/video-script-generator"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted/50 transition-colors"
                    onClick={() => setIsToolsMenuOpen(false)}
                  >
                    <FileText className="h-4 w-4 text-blue-600" />
                    {getTranslation(currentLocale, 'videoScriptGenerator')}
                  </Link>
                  <Link
                    href="/video-to-prompt"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted/50 transition-colors"
                    onClick={() => setIsToolsMenuOpen(false)}
                  >
                    <FileText className="h-4 w-4 text-green-600" />
                    {getTranslation(currentLocale, 'videoToPrompt')}
                  </Link>
                  <div
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground/50 cursor-not-allowed opacity-50"
                    onClick={(e) => e.preventDefault()}
                  >
                    <FileText className="h-4 w-4 text-orange-600/50" />
                    {getTranslation(currentLocale, 'transcription')}
                  </div>
                </div>
              )}
            </div>

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
                  href={getLocalizedPath('/')}
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {getTranslation(currentLocale, 'home')}
                </Link>
                {/* <Link
                  href={getSmartLink("/blog")}
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {getTranslation(currentLocale, 'blog')}
                </Link> */}
                <Link
                  href={getSmartLink("/prompt-guide")}
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {getTranslation(currentLocale, 'promptGuide')}
                </Link>
                <Link
                  href={getSmartLink("/about")}
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {getTranslation(currentLocale, 'about')}
                </Link>
                <Link
                  href={getSmartLink("/contact")}
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {getTranslation(currentLocale, 'contact')}
                </Link>
                <Link
                  href={getSmartLink("/disclaimer")}
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Disclaimer
                </Link>
                {/* <Link
                  href={getSmartLink("/sitemap")}
                  className="block text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sitemap
                </Link> */}
              </div>

              {/* Tools Section */}
              <div className="pt-4 xs:pt-6 border-t">
                <h3 className="text-sm xs:text-base font-semibold text-foreground mb-3 xs:mb-4 px-3 xs:px-4">{getTranslation(currentLocale, 'tools')}</h3>
                <div className="space-y-3 xs:space-y-4">
                  <Link
                    href="/"
                    className="flex items-center gap-2 xs:gap-3 text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Sparkles className="h-4 w-4 xs:h-5 xs:w-5 text-purple-600" />
                    {getTranslation(currentLocale, 'veo3PromptGenerator')}
                  </Link>
                  <Link
                    href="/video-script-generator"
                    className="flex items-center gap-2 xs:gap-3 text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FileText className="h-4 w-4 xs:h-5 xs:w-5 text-blue-600" />
                    {getTranslation(currentLocale, 'videoScriptGenerator')}
                  </Link>
                  <Link
                    href="/video-to-prompt"
                    className="flex items-center gap-2 xs:gap-3 text-sm xs:text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 xs:px-4 rounded-md hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FileText className="h-4 w-4 xs:h-5 xs:w-5 text-green-600" />
                    {getTranslation(currentLocale, 'videoToPrompt')}
                  </Link>
                  <div
                    className="flex items-center gap-2 xs:gap-3 text-sm xs:text-base font-medium text-muted-foreground/50 cursor-not-allowed opacity-50 py-2 px-3 xs:px-4 rounded-md"
                    onClick={(e) => e.preventDefault()}
                  >
                    <FileText className="h-4 w-4 xs:h-5 xs:w-5 text-orange-600/50" />
                    {getTranslation(currentLocale, 'transcription')}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
