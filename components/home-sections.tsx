"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Users, 
  Globe, 
  Award, 
  Target, 
  Lightbulb, 
  Shield, 
  Rocket,
  Upload,
  Brain,
  Download,
  Star,
  MessageSquare,
  Trophy,
  Heart,
  Share2,
  TrendingUp,
  ChevronDown,
  Sparkles,
  Camera,
  Mic,
  FileText,
  Video
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { useLocale, generateI18nPath } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

export function HomeSections() {
  const currentLocale = useLocale()
  
  const features = [
    {
      icon: Zap,
      title: getTranslation(currentLocale, 'lightningFastProcessing'),
      description: getTranslation(currentLocale, 'lightningFastProcessingDesc')
    },
    {
      icon: Shield,
      title: getTranslation(currentLocale, 'securePrivate'),
      description: getTranslation(currentLocale, 'securePrivateDesc2')
    },
    {
      icon: Brain,
      title: getTranslation(currentLocale, 'advancedAIModels'),
      description: getTranslation(currentLocale, 'advancedAIModelsDesc')
    },
    {
      icon: Globe,
      title: getTranslation(currentLocale, 'multipleFormats'),
      description: getTranslation(currentLocale, 'multipleFormatsDesc')
    },
    {
      icon: TrendingUp,
      title: getTranslation(currentLocale, 'realTimeProcessing'),
      description: getTranslation(currentLocale, 'realTimeProcessingDesc')
    },
    {
      icon: Award,
      title: getTranslation(currentLocale, 'premiumQuality'),
      description: getTranslation(currentLocale, 'premiumQualityDesc')
    }
  ]

  const steps = [
    {
      icon: Upload,
      title: getTranslation(currentLocale, 'uploadYourContent'),
      description: getTranslation(currentLocale, 'uploadYourContentDesc'),
      step: "01"
    },
    {
      icon: Brain,
      title: getTranslation(currentLocale, 'aiAnalysis'),
      description: getTranslation(currentLocale, 'aiAnalysisDesc'),
      step: "02"
    },
    {
      icon: Download,
      title: getTranslation(currentLocale, 'getYourResults'),
      description: getTranslation(currentLocale, 'getYourResultsDesc'),
      step: "03"
    }
  ]

  const tools = [
    {
      icon: Video,
      title: getTranslation(currentLocale, 'veo3PromptGenerator'),
      description: getTranslation(currentLocale, 'veo3PromptGeneratorDesc'),
      link: generateI18nPath("/veo3-prompt-generator", currentLocale)
    },
    {
      icon: FileText,
      title: getTranslation(currentLocale, 'videoScriptGenerator'),
      description: getTranslation(currentLocale, 'videoScriptGeneratorDesc'),
      link: generateI18nPath("/video-script-generator", currentLocale)
    },
    {
      icon: Camera,
      title: getTranslation(currentLocale, 'videoToPrompt'),
      description: getTranslation(currentLocale, 'videoToPromptDesc'),
      link: generateI18nPath("/video-to-prompt", currentLocale)
    },
    {
      icon: Mic,
      title: getTranslation(currentLocale, 'transcription'),
      description: getTranslation(currentLocale, 'transcriptionDesc'),
      link: generateI18nPath("/transcription", currentLocale)
    }
  ]

  const benefits = [
    {
      icon: Rocket,
      title: getTranslation(currentLocale, 'saveHoursOfWork'),
      description: getTranslation(currentLocale, 'saveHoursOfWorkDesc')
    },
    {
      icon: Users,
      title: getTranslation(currentLocale, 'professionalQuality'),
      description: getTranslation(currentLocale, 'professionalQualityDesc')
    },
    {
      icon: Heart,
      title: getTranslation(currentLocale, 'creativeFreedom'),
      description: getTranslation(currentLocale, 'creativeFreedomDesc')
    },
    {
      icon: TrendingUp,
      title: getTranslation(currentLocale, 'betterResults'),
      description: getTranslation(currentLocale, 'betterResultsDesc')
    }
  ]

  const whoCanBenefit = [
    {
      category: getTranslation(currentLocale, 'contentCreators'),
      description: getTranslation(currentLocale, 'contentCreatorsDesc'),
      icon: Video
    },
    {
      category: getTranslation(currentLocale, 'marketingTeams'),
      description: getTranslation(currentLocale, 'marketingTeamsDesc'),
      icon: Target
    },
    {
      category: getTranslation(currentLocale, 'educators'),
      description: getTranslation(currentLocale, 'educatorsDesc'),
      icon: Lightbulb
    },
    {
      category: getTranslation(currentLocale, 'businesses'),
      description: getTranslation(currentLocale, 'businessesDesc'),
      icon: Shield
    }
  ]

  const faqs = [
    {
      question: getTranslation(currentLocale, 'faqAccuracy'),
      answer: getTranslation(currentLocale, 'faqAccuracyAnswer')
    },
    {
      question: getTranslation(currentLocale, 'faqFormats'),
      answer: getTranslation(currentLocale, 'faqFormatsAnswer')
    },
    {
      question: getTranslation(currentLocale, 'faqSecurity'),
      answer: getTranslation(currentLocale, 'faqSecurityAnswer')
    },
    {
      question: getTranslation(currentLocale, 'faqCommercial'),
      answer: getTranslation(currentLocale, 'faqCommercialAnswer')
    },
    {
      question: getTranslation(currentLocale, 'faqProcessingTime'),
      answer: getTranslation(currentLocale, 'faqProcessingTimeAnswer')
    },
    {
      question: getTranslation(currentLocale, 'faqAPI'),
      answer: getTranslation(currentLocale, 'faqAPIAnswer')
    }
  ]

  return (
    <>
      {/* Tools Section */}
      <section className="py-8 xs:py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 xs:mb-8 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4">
              {getTranslation(currentLocale, 'ourAITools')}
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-3 xs:px-4">
              {getTranslation(currentLocale, 'ourAIToolsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-3 xs:pt-4 sm:pt-6 p-3 xs:p-4 sm:p-6">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2 xs:mb-3 sm:mb-4 group-hover:bg-purple-200 transition-colors">
                    <tool.icon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-purple-600" />
                  </div>
                  <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-2">{tool.title}</h3>
                  <p className="text-muted-foreground text-xs xs:text-sm sm:text-base mb-4">{tool.description}</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href={tool.link}>
                      {getTranslation(currentLocale, 'tryNow')}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-8 xs:py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 xs:mb-8 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4">
              {getTranslation(currentLocale, 'whyChoose')} <span className="text-purple-600">{getTranslation(currentLocale, 'ourPlatform')}</span>
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-3 xs:px-4">
              {getTranslation(currentLocale, 'whyChooseDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-3 xs:pt-4 sm:pt-6 p-3 xs:p-4 sm:p-6">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2 xs:mb-3 sm:mb-4 group-hover:bg-purple-200 transition-colors">
                    <feature.icon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-purple-600" />
                  </div>
                  <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs xs:text-sm sm:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-8 xs:py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 xs:mb-8 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4">
              {getTranslation(currentLocale, 'howItWorks')}
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-3 xs:px-4">
              {getTranslation(currentLocale, 'howItWorksDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-3 xs:pt-4 sm:pt-6 p-3 xs:p-4 sm:p-6">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4 text-white font-bold text-sm xs:text-lg sm:text-xl">
                    {step.step}
                  </div>
                  <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4">
                    <step.icon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-purple-600" />
                  </div>
                  <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-xs xs:text-sm sm:text-base">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 xs:py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 xs:mb-8 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4">
              {getTranslation(currentLocale, 'keyBenefits')}
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-3 xs:px-4">
              {getTranslation(currentLocale, 'keyBenefitsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-3 xs:pt-4 sm:pt-6 p-3 xs:p-4 sm:p-6">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4">
                    <benefit.icon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-xs xs:text-sm sm:text-base">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Platform Section - Minimal */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
              {/* Text Content - Right Side */}
              <div className="flex-1">
                <div className="mb-4">
                  <Button asChild variant="outline" className="px-3 py-1 text-sm font-medium border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20">
                    <Link href="https://trustpilot.com" target="_blank" rel="noopener noreferrer">
                      {getTranslation(currentLocale, 'reviewUsOnTrustpilot')}
                    </Link>
                  </Button>
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  {getTranslation(currentLocale, 'aboutVeo3PromptGenerator')}
                </h2>
                
                <div className="space-y-4">
                  <p className="text-[15px] sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {getTranslation(currentLocale, 'aboutDesc1')}
                  </p>
                  <p className="text-[15px] sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {getTranslation(currentLocale, 'aboutDesc2')}
                  </p>
                  <p className="text-[15px] sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {getTranslation(currentLocale, 'aboutDesc3')}
                  </p>
                </div>
                
                <div className="mt-6">
                  <Button asChild variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20">
                    <Link href="/about">
                      {getTranslation(currentLocale, 'readMoreAboutUs')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 xs:py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 xs:mb-8 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4">
              {getTranslation(currentLocale, 'frequentlyAskedQuestions')}
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-3 xs:px-4">
              {getTranslation(currentLocale, 'faqDesc')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto px-3 xs:px-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-xs xs:text-sm sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-xs xs:text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            {/* FAQ Schema Markup */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": faqs.map((faq) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer
                    }
                  }))
                })
              }}
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
              <section className="py-8 xs:py-12 sm:py-16 bg-gradient-to-br from-purple-600 to-purple-800 dark:from-black dark:from-black dark:from-black text-white">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4">
            {getTranslation(currentLocale, 'readyToTransform')}
          </h2>
          <p className="text-sm xs:text-lg sm:text-xl mb-4 xs:mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 px-3 xs:px-4">
            {getTranslation(currentLocale, 'readyToTransformDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 h-10 xs:h-12 sm:h-14 px-4 xs:px-6 sm:px-8 text-sm xs:text-base sm:text-lg">
              <Link href="/veo3-prompt-generator">{getTranslation(currentLocale, 'getStartedFree')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 h-10 xs:h-12 sm:h-14 px-4 xs:px-6 sm:px-8 text-sm xs:text-base sm:text-lg">
              <Link href="/tools">{getTranslation(currentLocale, 'exploreAllTools')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}