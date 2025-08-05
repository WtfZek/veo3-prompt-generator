"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

const getPromptExamples = (locale: string) => [
  {
    titleKey: "cinematicPortrait",
    categoryKey: "portrait",
    prompt:
      "Close-up portrait of a person with dramatic lighting, shallow depth of field, cinematic color grading, professional photography style, 4K resolution",
    tagKeys: ["portrait", "cinematic", "professional"],
  },
  {
    titleKey: "natureLandscape",
    categoryKey: "nature",
    prompt:
      "Wide shot of a serene mountain landscape at golden hour, misty valleys, warm lighting, peaceful atmosphere, drone photography perspective",
    tagKeys: ["landscape", "nature", "goldenHour"],
  },
  {
    titleKey: "productShowcase",
    categoryKey: "commercial",
    prompt:
      "360-degree rotation of a modern smartphone on white background, studio lighting, clean minimalist style, highlighting premium materials and design",
    tagKeys: ["product", "commercial", "clean"],
  },
  {
    titleKey: "urbanStreetScene",
    categoryKey: "urban",
    prompt:
      "Busy city street during rush hour, people walking, cars passing, urban energy, street photography style, natural lighting, documentary feel",
    tagKeys: ["urban", "street", "documentary"],
  },
]

export default function PromptLibraryPage() {
  const locale = useLocale()
  const promptExamples = getPromptExamples(locale)

  const copyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt)
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{getTranslation(locale, "promptLibraryTitle")}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {getTranslation(locale, "promptLibrarySubtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promptExamples.map((example, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{getTranslation(locale, example.titleKey as any)}</CardTitle>
                <Badge variant="secondary">{getTranslation(locale, example.categoryKey as any)}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">{example.prompt}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {example.tagKeys.map((tagKey) => (
                    <Badge key={tagKey} variant="outline" className="text-xs">
                      {getTranslation(locale, tagKey as any)}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" onClick={() => copyPrompt(example.prompt)}>
                  <Copy className="h-4 w-4 mr-2" />
                  {getTranslation(locale, "copy")}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="bg-primary/10 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{getTranslation(locale, "createYourOwnPrompts")}</h2>
          <p className="text-muted-foreground mb-6">
            {getTranslation(locale, "createYourOwnPromptsDesc")}
          </p>
          <Button asChild size="lg">
            <a href="/#generator">{getTranslation(locale, "generateCustomPrompts")}</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
