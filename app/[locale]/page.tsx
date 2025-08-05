import { MainHero } from "@/components/main-hero"
import { HomeSections } from "@/components/home-sections"
import { type Locale, locales } from "@/lib/i18n"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface LocalePageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = params.locale as Locale

  if (locale === "fr") {
    return {
      title: "Générateur de Prompts Veo3 Gratuit en Ligne",
      description:
        "Transformez vos images et vidéos en prompts IA puissants avec notre technologie Gemini 2.5 Pro avancée.",
      alternates: {
        canonical: "/fr",
        languages: {
          en: "/",
          fr: "/fr",
          zh: "/zh",
        },
      },
      openGraph: {
        title: "Générateur de Prompts Veo3 Gratuit en Ligne",
        description:
          "Transformez vos images et vidéos en prompts IA puissants avec notre technologie Gemini 2.5 Pro avancée.",
        locale: "fr_FR",
      },
    }
  }

  if (locale === "zh") {
    return {
      title: "Veo3提示词生成器免费在线版",
      description:
        "使用尖端AI技术将您的想法转化为强大的视频提示词。我们的平台结合了先进的提示词工程和直观的设计。",
      alternates: {
        canonical: "/zh",
        languages: {
          en: "/",
          fr: "/fr",
          zh: "/zh",
        },
      },
      openGraph: {
        title: "Veo3提示词生成器免费在线版",
        description:
          "使用尖端AI技术将您的想法转化为强大的视频提示词。我们的平台结合了先进的提示词工程和直观的设计。",
        locale: "zh_CN",
      },
    }
  }

  return {}
}

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "en")
    .map((locale) => ({
      locale: locale,
    }))
}

export default function LocalePage({ params }: LocalePageProps) {
  const locale = params.locale as Locale

  if (!locales.includes(locale)) {
    notFound()
  }

  return (
    <main>
      <MainHero />
      <HomeSections />
    </main>
  )
}
