"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Brain,
  Globe,
  Shield,
  Award,
  Video,
  FileText,
  Camera,
  Mic
} from "lucide-react"
import Link from "next/link"
import { useLocale } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

export function MainHero() {
  const currentLocale = useLocale()
  const features = [
    {
      icon: Zap,
      title: getTranslation(currentLocale, 'lightningFast'),
      description: getTranslation(currentLocale, 'lightningFastDesc')
    },
    {
      icon: Shield,
      title: getTranslation(currentLocale, 'securePrivate'),
      description: getTranslation(currentLocale, 'securePrivateDesc')
    },
    {
      icon: Brain,
      title: getTranslation(currentLocale, 'advancedAI'),
      description: getTranslation(currentLocale, 'advancedAIDesc')
    },
    {
      icon: Globe,
      title: getTranslation(currentLocale, 'multiFormat'),
      description: getTranslation(currentLocale, 'multiFormatDesc')
    }
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-black dark:from-black dark:from-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <div className="mb-8 sm:mb-12">
            <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm font-medium bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
              {getTranslation(currentLocale, 'aiPoweredBadge')}
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              {getTranslation(currentLocale, 'mainHeading')} <span className="text-purple-700 dark:text-purple-700">{getTranslation(currentLocale, 'accentWord')}</span> {getTranslation(currentLocale, 'heroFree')}
            </h1>

            <p className="text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {getTranslation(currentLocale, 'footerDescription')}
            </p>

            {/* Main Action Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg">
                <Link href="/veo3-prompt-generator">
                  <Video className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
                  {getTranslation(currentLocale, 'veo3PromptGenerator')}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg">
                <Link href="/video-script-generator">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
                  {getTranslation(currentLocale, 'videoScriptGenerator')}
                </Link>
              </Button>
            </div>

            {/* Secondary Tools - Mobile Optimized */}
            <div className="grid grid-cols-2 gap-2 mb-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
              <Button asChild variant="ghost" size="sm" className="text-xs sm:text-sm">
                <Link href="/video-to-prompt">
                  <Camera className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  {getTranslation(currentLocale, 'videoToPrompt')}
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-xs sm:text-sm">
                <Link href="/prompt-guide">
                  <Brain className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  {getTranslation(currentLocale, 'promptGuide')}
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-xs sm:text-sm">
                <Link href="/prompt-library">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  {getTranslation(currentLocale, 'promptLibrary')}
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs sm:text-sm opacity-50 cursor-not-allowed"
                disabled
                onClick={(e) => e.preventDefault()}
              >
                <Mic className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                {getTranslation(currentLocale, 'transcription')}
              </Button>
            </div>
          </div>

          {/* Features Grid - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <CardContent className="p-3 sm:p-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
