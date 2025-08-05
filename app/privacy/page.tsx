"use client"

import { getTranslation } from "@/lib/i18n"
import { useLocale } from "@/hooks/use-locale"

export default function PrivacyPage() {
  const locale = useLocale()

  return (
    <main>
      <section className="py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {getTranslation(locale, "privacyPolicyTitle")}
          </h1>
          <p className="text-lg text-muted-foreground">{getTranslation(locale, "privacyPolicyLastUpdated")}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(locale, "privacyIntroductionTitle")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {getTranslation(locale, "privacyIntroductionDesc")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(locale, "privacyInfoCollectionTitle")}</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{getTranslation(locale, "privacyPersonalInfoTitle")}</h3>
                    <p className="text-muted-foreground mb-2">
                      {getTranslation(locale, "privacyPersonalInfoDesc")}
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>{getTranslation(locale, "privacyPersonalInfoItem1")}</li>
                      <li>{getTranslation(locale, "privacyPersonalInfoItem2")}</li>
                      <li>{getTranslation(locale, "privacyPersonalInfoItem3")}</li>
                      <li>{getTranslation(locale, "privacyPersonalInfoItem4")}</li>
                      <li>{getTranslation(locale, "privacyPersonalInfoItem5")}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">{getTranslation(locale, "privacyUsageInfoTitle")}</h3>
                    <p className="text-muted-foreground mb-2">
                      {getTranslation(locale, "privacyUsageInfoDesc")}
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>{getTranslation(locale, "privacyUsageInfoItem1")}</li>
                      <li>{getTranslation(locale, "privacyUsageInfoItem2")}</li>
                      <li>{getTranslation(locale, "privacyUsageInfoItem3")}</li>
                      <li>{getTranslation(locale, "privacyUsageInfoItem4")}</li>
                      <li>{getTranslation(locale, "privacyUsageInfoItem5")}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">{getTranslation(locale, "privacyContentMediaTitle")}</h3>
                    <p className="text-muted-foreground">
                      {getTranslation(locale, "privacyContentMediaDesc")}
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(locale, "privacyInfoUseTitle")}</h2>
                <p className="text-muted-foreground mb-4">
                  {getTranslation(locale, "privacyInfoUseDesc")}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>{getTranslation(locale, "privacyInfoUseItem1")}</li>
                  <li>{getTranslation(locale, "privacyInfoUseItem2")}</li>
                  <li>{getTranslation(locale, "privacyInfoUseItem3")}</li>
                  <li>{getTranslation(locale, "privacyInfoUseItem4")}</li>
                  <li>{getTranslation(locale, "privacyInfoUseItem5")}</li>
                  <li>{getTranslation(locale, "privacyInfoUseItem6")}</li>
                  <li>{getTranslation(locale, "privacyInfoUseItem7")}</li>
                  <li>{getTranslation(locale, "privacyInfoUseItem8")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(locale, "privacyDataSecurityTitle")}</h2>
                <p className="text-muted-foreground">
                  {getTranslation(locale, "privacyDataSecurityDesc")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(locale, "privacyDataRetentionTitle")}</h2>
                <p className="text-muted-foreground">
                  {getTranslation(locale, "privacyDataRetentionDesc")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(locale, "privacyThirdPartyTitle")}</h2>
                <p className="text-muted-foreground">
                  {getTranslation(locale, "privacyThirdPartyDesc")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(locale, "privacyUserRightsTitle")}</h2>
                <p className="text-muted-foreground mb-4">
                  {getTranslation(locale, "privacyUserRightsDesc")}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>{getTranslation(locale, "privacyUserRightsItem1")}</li>
                  <li>{getTranslation(locale, "privacyUserRightsItem2")}</li>
                  <li>{getTranslation(locale, "privacyUserRightsItem3")}</li>
                  <li>{getTranslation(locale, "privacyUserRightsItem4")}</li>
                  <li>{getTranslation(locale, "privacyUserRightsItem5")}</li>
                  <li>{getTranslation(locale, "privacyUserRightsItem6")}</li>
                  <li>{getTranslation(locale, "privacyUserRightsItem7")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(locale, "privacyInternationalTransferTitle")}</h2>
                <p className="text-muted-foreground">
                  {getTranslation(locale, "privacyInternationalTransferDesc")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(locale, "privacyPolicyChangesTitle")}</h2>
                <p className="text-muted-foreground">
                  {getTranslation(locale, "privacyPolicyChangesDesc")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{getTranslation(locale, "privacyContactTitle")}</h2>
                <p className="text-muted-foreground mb-4">
                  {getTranslation(locale, "privacyContactDesc")}
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <p className="font-medium">{getTranslation(locale, "privacyContactEmail")}</p>
                  <p className="font-medium">{getTranslation(locale, "privacyContactAddress")}</p>
                  <p className="font-medium">{getTranslation(locale, "privacyContactPhone")}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
