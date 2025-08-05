"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Users, Globe, Award, Target, Lightbulb, Shield, Rocket, Sparkles, FileText, Brain, Mic, Camera, Video } from "lucide-react"
import Link from "next/link"
import { useLocale } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

const getTools = (currentLocale: any) => [
  {
    icon: Sparkles,
    title: getTranslation(currentLocale, 'veo3PromptGenerator'),
    description: getTranslation(currentLocale, 'veo3PromptGeneratorToolDesc'),
    benefits: [
      getTranslation(currentLocale, 'veo3Benefits1'),
      getTranslation(currentLocale, 'veo3Benefits2'),
      getTranslation(currentLocale, 'veo3Benefits3'),
      getTranslation(currentLocale, 'veo3Benefits4')
    ],
    color: "text-purple-600"
  },
  {
    icon: FileText,
    title: getTranslation(currentLocale, 'videoScriptGenerator'),
    description: getTranslation(currentLocale, 'videoScriptGeneratorToolDesc'),
    benefits: [
      getTranslation(currentLocale, 'scriptBenefits1'),
      getTranslation(currentLocale, 'scriptBenefits2'),
      getTranslation(currentLocale, 'scriptBenefits3'),
      getTranslation(currentLocale, 'scriptBenefits4')
    ],
    color: "text-blue-600"
  },
  {
    icon: Brain,
    title: getTranslation(currentLocale, 'videoToPrompt'),
    description: getTranslation(currentLocale, 'videoToPromptGeneratorDesc'),
    benefits: [
      getTranslation(currentLocale, 'videoPromptBenefits1'),
      getTranslation(currentLocale, 'videoPromptBenefits2'),
      getTranslation(currentLocale, 'videoPromptBenefits3'),
      getTranslation(currentLocale, 'videoPromptBenefits4')
    ],
    color: "text-green-600"
  },
  {
    icon: Mic,
    title: getTranslation(currentLocale, 'transcription'),
    description: getTranslation(currentLocale, 'videoTranscriptionDesc'),
    benefits: [
      getTranslation(currentLocale, 'transcriptionBenefits1'),
      getTranslation(currentLocale, 'transcriptionBenefits2'),
      getTranslation(currentLocale, 'transcriptionBenefits3'),
      getTranslation(currentLocale, 'transcriptionBenefits4')
    ],
    color: "text-orange-600"
  }
]

const getValues = (currentLocale: any) => [
  {
    icon: Target,
    title: getTranslation(currentLocale, 'userCentricDesign'),
    description: getTranslation(currentLocale, 'userCentricDesignDesc'),
  },
  {
    icon: Lightbulb,
    title: getTranslation(currentLocale, 'innovationFirst'),
    description: getTranslation(currentLocale, 'innovationFirstDesc'),
  },
  {
    icon: Shield,
    title: getTranslation(currentLocale, 'privacySecurity'),
    description: getTranslation(currentLocale, 'privacySecurityDesc'),
  },
  {
    icon: Rocket,
    title: getTranslation(currentLocale, 'continuousImprovement'),
    description: getTranslation(currentLocale, 'continuousImprovementDesc'),
  },
]

const getImpactStories = (currentLocale: any) => [
  {
    category: getTranslation(currentLocale, 'contentCreators'),
    description: getTranslation(currentLocale, 'contentCreatorsImpact'),
    icon: Video
  },
  {
    category: getTranslation(currentLocale, 'marketers'),
    description: getTranslation(currentLocale, 'marketersImpact'),
    icon: Target
  },
  {
    category: getTranslation(currentLocale, 'educators'),
    description: getTranslation(currentLocale, 'educatorsImpact'),
    icon: Lightbulb
  },
  {
    category: getTranslation(currentLocale, 'developers'),
    description: getTranslation(currentLocale, 'developersImpact'),
    icon: Brain
  }
]

export default function AboutPage() {
  const currentLocale = useLocale()
  
  return (
    <main>
      <section className="py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {getTranslation(currentLocale, 'aboutPageTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {getTranslation(currentLocale, 'aboutPageSubtitle')}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Mission */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">{getTranslation(currentLocale, 'ourMission')}</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {getTranslation(currentLocale, 'ourMissionDesc1')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {getTranslation(currentLocale, 'ourMissionDesc2')}
                </p>
              </div>
            </div>

            {/* Our Tools */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">{getTranslation(currentLocale, 'ourComprehensiveToolSuite')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {getTools(currentLocale).map((tool, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <tool.icon className={`h-8 w-8 ${tool.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                        <p className="text-muted-foreground mb-4">{tool.description}</p>
                        <ul className="space-y-1">
                          {tool.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* How We Help People */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">{getTranslation(currentLocale, 'howOurToolsTransformLives')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {getImpactStories(currentLocale).map((story, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <story.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{story.category}</h3>
                        <p className="text-muted-foreground">{story.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">{getTranslation(currentLocale, 'ourValues')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {getValues(currentLocale).map((value, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* What Makes Us Different */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">{getTranslation(currentLocale, 'whatMakesUsDifferent')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>{getTranslation(currentLocale, 'comprehensiveAISuite')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {getTranslation(currentLocale, 'comprehensiveAISuiteDesc')}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>{getTranslation(currentLocale, 'professionalQualityTitle')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {getTranslation(currentLocale, 'professionalQualityAboutDesc')}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>{getTranslation(currentLocale, 'privacyFirstTitle')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {getTranslation(currentLocale, 'privacyFirstDesc')}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>{getTranslation(currentLocale, 'continuousInnovationTitle')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {getTranslation(currentLocale, 'continuousInnovationDesc')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Join Our Journey */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">{getTranslation(currentLocale, 'joinOurJourney')}</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {getTranslation(currentLocale, 'joinOurJourneyDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Badge variant="outline" className="text-sm px-4 py-2">
                  {getTranslation(currentLocale, 'launchingNewFeatures')}
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  {getTranslation(currentLocale, 'availableWorldwide')}
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  {getTranslation(currentLocale, 'communityDriven')}
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Badge className="text-sm px-6 py-3 bg-primary hover:bg-primary/90 cursor-pointer">
                    {getTranslation(currentLocale, 'tryVeo3PromptGenerator')}
                  </Badge>
                </Link>
                <Link href="/video-script-generator">
                  <Badge variant="outline" className="text-sm px-6 py-3 hover:bg-muted cursor-pointer">
                    {getTranslation(currentLocale, 'videoScriptGenerator')}
                  </Badge>
                </Link>
                <Link href="/video-to-prompt">
                  <Badge variant="outline" className="text-sm px-6 py-3 hover:bg-muted cursor-pointer">
                    {getTranslation(currentLocale, 'videoToPrompt')}
                  </Badge>
                </Link>
                <Badge variant="outline" className="text-sm px-6 py-3 opacity-50 cursor-not-allowed">
                  {getTranslation(currentLocale, 'transcription')}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
