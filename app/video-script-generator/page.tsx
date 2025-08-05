"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"
import { Loader2, FileText, Brain } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { ToolNavigation } from "@/components/tool-navigation"
import { useLocale } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

export default function VideoScriptGeneratorPage() {
  const currentLocale = useLocale()
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedScript, setGeneratedScript] = useState("")
  const { toast } = useToast()

  // Form state
  const [formData, setFormData] = useState({
    videoTopic: "",
    audience: "",
    scriptLength: "",
    scriptStyle: "",
    language: "chinese",
  })

  const generateScript = async () => {
    if (!formData.videoTopic.trim()) {
      toast({
        title: getTranslation(currentLocale, 'missingInformation'),
        description: getTranslation(currentLocale, 'missingInformationDesc'),
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    setGeneratedScript("")

    try {
      const response = await fetch("/api/generate-video-script", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "Failed to generate script")

      setGeneratedScript(data.script)
      toast({
        title: getTranslation(currentLocale, 'scriptGeneratedSuccessfully'),
        description: getTranslation(currentLocale, 'scriptGeneratedDesc'),
      })
    } catch (error) {
      console.error("Error generating script:", error)
      toast({
        title: getTranslation(currentLocale, 'generationFailed'),
        description: error instanceof Error ? error.message : getTranslation(currentLocale, 'generationFailedDesc'),
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const clearForm = () => {
    setFormData({
      videoTopic: "",
      audience: "",
      scriptLength: "",
      scriptStyle: "",
      language: "chinese",
    })
    setGeneratedScript("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-black dark:from-black dark:from-black">
      <div className="max-w-[720px] mx-auto px-2 xs:px-3 sm:px-4 pt-6 xs:pt-8 sm:pt-10 pb-8">
        {/* Headline with Accent Color */}
        <h1 className="text-center text-3xl xs:text-4xl sm:text-5xl lg:text-5xl font-bold mb-2 xs:mb-3 px-1">
          {getTranslation(currentLocale, 'videoScriptGeneratorTitle')} <span className="text-blue-600">{getTranslation(currentLocale, 'videoScriptGeneratorFreeOnline')}</span>
        </h1>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-center mb-4 xs:mb-6 max-w-2xl mx-auto text-sm xs:text-base px-2">
          {getTranslation(currentLocale, 'videoScriptGeneratorSubtitle')}
        </p>

        {/* Navigation Tabs */}
        <ToolNavigation activeTool="video-script-generator" />

        {/* Main Form Card - COMES FIRST */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardContent className="p-4 xs:p-5 sm:p-6">
            {/* Video Topic & Main Characters */}
            <div className="mb-4 xs:mb-6">
              <label className="text-sm xs:text-base font-bold mb-2 block">{getTranslation(currentLocale, 'videoTopicAndCharacters')}</label>
              <Textarea
                value={formData.videoTopic}
                onChange={(e) => setFormData({ ...formData, videoTopic: e.target.value })}
                placeholder={getTranslation(currentLocale, 'videoTopicExample')}
                className="min-h-[60px] xs:min-h-[80px] resize-none text-sm xs:text-base rounded-lg"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 xs:gap-4">
              <Button
                onClick={generateScript}
                disabled={isGenerating}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-10 xs:h-12 text-sm xs:text-base font-medium rounded-lg"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {getTranslation(currentLocale, 'generatingScript')}
                  </>
                ) : (
                  <>
                    <FileText className="mr-2 h-4 w-4" />
                    {getTranslation(currentLocale, 'generateScript')}
                  </>
                )}
              </Button>
              <Button
                onClick={clearForm}
                variant="outline"
                className="h-10 xs:h-12 px-4 xs:px-6 text-sm xs:text-base rounded-lg"
                disabled={isGenerating || !formData.videoTopic.trim()}
              >
                {getTranslation(currentLocale, 'clearForm')}
              </Button>
            </div>

            {/* Result Container */}
            {generatedScript && (
              <div className="mt-4 xs:mt-6 p-4 xs:p-5 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-bold mb-2 text-sm xs:text-base">{getTranslation(currentLocale, 'generatedScriptTitle')}</h4>
                <pre className="whitespace-pre-wrap text-sm xs:text-base overflow-x-auto">{generatedScript}</pre>
              </div>
            )}
          </CardContent>
        </Card>

        {/* How Video Script Generator Works */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg xs:text-xl sm:text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Brain className="h-5 w-5" />
              {getTranslation(currentLocale, 'howVideoScriptGeneratorWorks')}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 xs:p-5">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">{getTranslation(currentLocale, 'scriptStep1Title')}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(currentLocale, 'scriptStep1Desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">{getTranslation(currentLocale, 'scriptStep2Title')}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(currentLocale, 'scriptStep2Desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">{getTranslation(currentLocale, 'scriptStep3Title')}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(currentLocale, 'scriptStep3Desc')}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Simple Paragraph About the Tool */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardContent className="p-4 xs:p-5">
            <h3 className="text-lg xs:text-xl font-bold mb-3 xs:mb-4 text-blue-600">{getTranslation(currentLocale, 'aboutVideoScriptGenerator')}</h3>
            <p className="text-sm xs:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {getTranslation(currentLocale, 'aboutVideoScriptGeneratorDesc')}
            </p>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg xs:text-xl sm:text-2xl font-bold text-blue-600">{getTranslation(currentLocale, 'videoScriptFaqTitle')}</CardTitle>
          </CardHeader>
          <CardContent className="p-4 xs:p-5">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm xs:text-base">{getTranslation(currentLocale, 'faqVideoTypesQuestion')}</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 dark:text-gray-400">
                  {getTranslation(currentLocale, 'faqVideoTypesAnswer')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sm xs:text-base">{getTranslation(currentLocale, 'faqScriptLengthQuestion')}</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 dark:text-gray-400">
                  {getTranslation(currentLocale, 'faqScriptLengthAnswer')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-sm xs:text-base">{getTranslation(currentLocale, 'faqEditScriptQuestion')}</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 dark:text-gray-400">
                  {getTranslation(currentLocale, 'faqEditScriptAnswer')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-sm xs:text-base">{getTranslation(currentLocale, 'faqCommercialUseQuestion')}</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 dark:text-gray-400">
                  {getTranslation(currentLocale, 'faqCommercialUseAnswer')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
