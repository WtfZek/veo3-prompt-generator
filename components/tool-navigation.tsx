"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLocale } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

interface ToolNavigationProps {
  activeTool: "veo3-prompt-generator" | "video-script-generator" | "video-to-prompt" | "transcription"
}

export function ToolNavigation({ activeTool }: ToolNavigationProps) {
  const currentLocale = useLocale()
  
  const tools = [
    {
      id: "veo3-prompt-generator",
      name: getTranslation(currentLocale, 'veo3PromptGeneratorTab'),
      href: "/veo3-prompt-generator",
      color: "purple"
    },
    {
      id: "video-script-generator", 
      name: getTranslation(currentLocale, 'videoScriptGeneratorTab'),
      href: "/video-script-generator",
      color: "blue"
    },
    {
      id: "video-to-prompt",
      name: getTranslation(currentLocale, 'videoToPromptGeneratorTab'), 
      href: "/video-to-prompt",
      color: "green"
    },
    {
      id: "transcription",
      name: getTranslation(currentLocale, 'videoTranscriptionTab'),
      href: "#", 
      color: "orange",
      disabled: true
    }
  ]

  return (
    <div className="mb-6 xs:mb-8 px-1">
      <div className="w-full max-w-md mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3">
          {tools.map((tool) => {
            const isActive = activeTool === tool.id
            const colorClasses = {
              purple: "bg-purple-600 text-white",
              blue: "bg-blue-600 text-white", 
              green: "bg-green-600 text-white",
              orange: "bg-orange-600 text-white"
            }
            
            const hoverClasses = {
              purple: "hover:bg-purple-600 hover:text-white hover:border-purple-600",
              blue: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
              green: "hover:bg-green-600 hover:text-white hover:border-green-600", 
              orange: "hover:bg-orange-600 hover:text-white hover:border-orange-600"
            }

            if (isActive) {
              return (
                <Button 
                  key={tool.id}
                  className={`w-full h-10 xs:h-12 text-sm xs:text-base font-medium ${colorClasses[tool.color as keyof typeof colorClasses]} break-words !opacity-100`}
                  disabled
                >
                  {tool.name}
                </Button>
              )
            }

            if (tool.disabled) {
              return (
                <Button 
                  key={tool.id}
                  variant="outline" 
                  className="w-full h-10 xs:h-12 text-sm xs:text-base font-medium break-words opacity-50 cursor-not-allowed"
                  disabled
                  onClick={(e) => e.preventDefault()}
                >
                  {tool.name}
                </Button>
              )
            }

            return (
              <Link key={tool.id} href={tool.href} className="w-full">
                <Button 
                  variant="outline" 
                  className={`w-full h-10 xs:h-12 text-sm xs:text-base font-medium transition-all duration-200 break-words ${hoverClasses[tool.color as keyof typeof hoverClasses]}`}
                >
                  {tool.name}
                </Button>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}