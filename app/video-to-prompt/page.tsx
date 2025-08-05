"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState, useCallback } from "react"
import { Loader2, Upload, X, Brain, Video } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { ToolNavigation } from "@/components/tool-navigation"
import { useDropzone } from "react-dropzone"
import { useLocale } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

export default function VideoToPromptPage() {
  const currentLocale = useLocale()
  const [activeTab, setActiveTab] = useState("video-to-prompt")
  const [isProcessing, setIsProcessing] = useState(false)
  const [generatedPrompt, setGeneratedPrompt] = useState("")
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null)
  const { toast } = useToast()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      if (file.type.startsWith('video/')) {
        setUploadedVideo(file)
        toast({
          title: getTranslation(currentLocale, 'videoUploadedSuccessfully'),
          description: `${file.name} ${getTranslation(currentLocale, 'videoUploadedDesc')}`,
        })
      } else {
        toast({
          title: getTranslation(currentLocale, 'invalidFileType'),
          description: getTranslation(currentLocale, 'invalidFileTypeDesc'),
          variant: "destructive",
        })
      }
    }
  }, [toast])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm']
    },
    maxFiles: 1,
    maxSize: 100 * 1024 * 1024 // 100MB
  })

  const removeVideo = () => {
    setUploadedVideo(null)
    setGeneratedPrompt("")
  }

  const generatePrompt = async () => {
    if (!uploadedVideo) {
      toast({
        title: getTranslation(currentLocale, 'noVideoUploaded'),
        description: getTranslation(currentLocale, 'noVideoUploadedDesc'),
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)
    setGeneratedPrompt("")

    try {
      const formData = new FormData()
      formData.append('video', uploadedVideo)

      const response = await fetch("/api/analyze-video", {
        method: "POST",
        credentials: 'include',
        body: formData,
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "Failed to analyze video")

      setGeneratedPrompt(data.prompt)
      toast({
        title: getTranslation(currentLocale, 'promptGeneratedSuccessfully'),
        description: getTranslation(currentLocale, 'promptGeneratedDesc'),
      })
    } catch (error) {
      console.error("Error generating prompt:", error)
      toast({
        title: getTranslation(currentLocale, 'generationFailed'),
        description: error instanceof Error ? error.message : getTranslation(currentLocale, 'generationFailedDesc'),
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  const clearAll = () => {
    setUploadedVideo(null)
    setGeneratedPrompt("")
  }

  const faqs = [
    {
      question: getTranslation(currentLocale, 'faqVideoFormatsQuestionVeo3'),
      answer: getTranslation(currentLocale, 'faqVideoFormatsAnswerVeo3')
    },
    {
      question: getTranslation(currentLocale, 'faqPromptAccuracyQuestionVeo3'),
      answer: getTranslation(currentLocale, 'faqPromptAccuracyAnswerVeo3')
    },
    {
      question: getTranslation(currentLocale, 'faqAIPlatformCompatibilityQuestion'),
      answer: getTranslation(currentLocale, 'faqAIPlatformCompatibilityAnswer')
    },
    {
      question: getTranslation(currentLocale, 'faqVideoSecurityQuestion'),
      answer: getTranslation(currentLocale, 'faqVideoSecurityAnswer')
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-black dark:from-black dark:from-black">
      <div className="max-w-[720px] mx-auto px-2 xs:px-3 sm:px-4 pt-6 xs:pt-8 sm:pt-10 pb-8">
        {/* Headline with Accent Color */}
        <h1 className="text-center text-3xl xs:text-4xl sm:text-5xl lg:text-5xl font-bold mb-2 xs:mb-3 px-1">
          {getTranslation(currentLocale, 'videoToPromptGeneratorTitle')} <span className="text-green-600">{getTranslation(currentLocale, 'videoToPromptFreeOnline')}</span>
        </h1>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-center mb-4 xs:mb-6 max-w-2xl mx-auto text-sm xs:text-base px-2">
          {getTranslation(currentLocale, 'videoToPromptGeneratorSubtitle')}
        </p>

        {/* Navigation Tabs */}
        <ToolNavigation activeTool="video-to-prompt" />

        {/* Main Form Card */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardContent className="p-4 xs:p-5 sm:p-6">
            {/* Video Upload Section */}
            <div className="mb-4 xs:mb-6">
              <label className="text-sm xs:text-base font-bold mb-2 block">{getTranslation(currentLocale, 'uploadVideo')}</label>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${isDragActive
                  ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                  : "border-gray-300 dark:border-gray-600 hover:border-green-500 dark:hover:border-green-500"
                  }`}
              >
                <input {...getInputProps()} />
                <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                <p className="text-sm xs:text-base text-gray-600 dark:text-gray-400">
                  {isDragActive ? getTranslation(currentLocale, 'dropVideoHere') : getTranslation(currentLocale, 'dragDropVideo')}
                </p>
                <p className="text-xs text-gray-500 mt-1">{getTranslation(currentLocale, 'supportedFormats')}</p>
              </div>
            </div>

            {/* Uploaded Video Display */}
            {uploadedVideo && (
              <div className="mb-4 xs:mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Video className="h-4 w-4 text-green-600" />
                    <span className="text-sm xs:text-base font-medium">{uploadedVideo.name}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setUploadedVideo(null)}
                    className="text-red-600 hover:text-red-700 h-8 px-2"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 xs:gap-4">
              <Button
                onClick={generatePrompt}
                disabled={isProcessing || !uploadedVideo}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white h-10 xs:h-12 text-sm xs:text-base font-medium rounded-lg"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {getTranslation(currentLocale, 'analyzingVideo')}
                  </>
                ) : (
                  <>
                    <Brain className="mr-2 h-4 w-4" />
                    {getTranslation(currentLocale, 'generatePrompt')}
                  </>
                )}
              </Button>
              <Button
                onClick={clearAll}
                variant="outline"
                className="h-10 xs:h-12 px-4 xs:px-6 text-sm xs:text-base rounded-lg"
                disabled={isProcessing || (!uploadedVideo && !generatedPrompt)}
              >
                {getTranslation(currentLocale, 'clearAll')}
              </Button>
            </div>

            {/* Result Container */}
            {generatedPrompt && (
              <div className="mt-4 xs:mt-6 p-4 xs:p-5 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-bold mb-2 text-sm xs:text-base">{getTranslation(currentLocale, 'generatedPromptTitle')}</h4>
                <pre className="whitespace-pre-wrap text-sm xs:text-base overflow-x-auto">{generatedPrompt}</pre>
              </div>
            )}
          </CardContent>
        </Card>

        {/* How Video to Prompt Generator Works */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg xs:text-xl sm:text-2xl font-bold text-green-600 flex items-center gap-2">
              <Brain className="h-5 w-5" />
              {getTranslation(currentLocale, 'howVideoToPromptWorks')}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 xs:p-5">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">{getTranslation(currentLocale, 'videoPromptStep1Title')}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(currentLocale, 'videoPromptStep1Desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">{getTranslation(currentLocale, 'videoPromptStep2Title')}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(currentLocale, 'videoPromptStep2Desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm xs:text-base mb-1">{getTranslation(currentLocale, 'videoPromptStep3Title')}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(currentLocale, 'videoPromptStep3Desc')}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Simple Paragraph About the Tool */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mb-6 xs:mb-8 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardContent className="p-4 xs:p-5">
            <h3 className="text-lg xs:text-xl font-bold mb-3 xs:mb-4 text-green-600">{getTranslation(currentLocale, 'aboutVideoToPromptGenerator')}</h3>
            <p className="text-sm xs:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {getTranslation(currentLocale, 'aboutVideoToPromptGeneratorDesc')}
            </p>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 mx-1 xs:mx-2 sm:mx-0 rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg xs:text-xl sm:text-2xl font-bold text-green-600">{getTranslation(currentLocale, 'videoToPromptFaqTitle')}</CardTitle>
          </CardHeader>
          <CardContent className="p-4 xs:p-5">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-sm xs:text-base">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}