"use client"

import { useLocale } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

export default function DisclaimerPage() {
  const currentLocale = useLocale()
  
  return (
    <main>
      <section className="py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-primary">{getTranslation(currentLocale, 'disclaimerTitle')}</span>
          </h1>
          <p className="text-lg text-muted-foreground">{getTranslation(currentLocale, 'lastUpdated')}: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(currentLocale, 'generalInformation')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {getTranslation(currentLocale, 'generalInformationDesc')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(currentLocale, 'aiGeneratedContent')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {getTranslation(currentLocale, 'aiGeneratedContentDesc')}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>{getTranslation(currentLocale, 'aiContentItem1')}</li>
                  <li>{getTranslation(currentLocale, 'aiContentItem2')}</li>
                  <li>{getTranslation(currentLocale, 'aiContentItem3')}</li>
                  <li>{getTranslation(currentLocale, 'aiContentItem4')}</li>
                  <li>{getTranslation(currentLocale, 'aiContentItem5')}</li>
                  <li>{getTranslation(currentLocale, 'aiContentItem6')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(currentLocale, 'userResponsibility')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{getTranslation(currentLocale, 'userResponsibilityDesc')}</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>{getTranslation(currentLocale, 'userRespItem1')}</li>
                  <li>{getTranslation(currentLocale, 'userRespItem2')}</li>
                  <li>{getTranslation(currentLocale, 'userRespItem3')}</li>
                  <li>{getTranslation(currentLocale, 'userRespItem4')}</li>
                  <li>{getTranslation(currentLocale, 'userRespItem5')}</li>
                  <li>{getTranslation(currentLocale, 'userRespItem6')}</li>
                  <li>{getTranslation(currentLocale, 'userRespItem7')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(currentLocale, 'limitationOfLiability')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {getTranslation(currentLocale, 'limitationOfLiabilityDesc')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(currentLocale, 'serviceAvailability')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {getTranslation(currentLocale, 'serviceAvailabilityDesc')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(currentLocale, 'thirdPartyContent')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {getTranslation(currentLocale, 'thirdPartyContentDesc')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(currentLocale, 'professionalAdvice')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {getTranslation(currentLocale, 'professionalAdviceDesc')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(currentLocale, 'intellectualProperty')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {getTranslation(currentLocale, 'intellectualPropertyDesc')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(currentLocale, 'dataProcessing')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {getTranslation(currentLocale, 'dataProcessingDesc')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(currentLocale, 'changesToDisclaimer')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {getTranslation(currentLocale, 'changesToDisclaimerDesc')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(currentLocale, 'contactInformation')}</h2>
                <p className="text-muted-foreground mb-4">{getTranslation(currentLocale, 'contactInformationDesc')}</p>
                <div className="bg-muted rounded-lg p-4">
                  <p className="font-medium">{getTranslation(currentLocale, 'email')}: 804301756@qq.com</p>
                  <p className="font-medium">{getTranslation(currentLocale, 'address')}: 湖北省武汉市青山区招商时代总部 B 栋 - 2105</p>
                  <p className="font-medium">{getTranslation(currentLocale, 'phone')}: (+86)177-4053-4977</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
