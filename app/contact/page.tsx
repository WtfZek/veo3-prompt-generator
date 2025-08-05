"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Clock, MessageSquare, Users, Headphones } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useLocale } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

export default function ContactPage() {
  const currentLocale = useLocale()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: getTranslation(currentLocale, 'messageSentSuccess'),
        description: getTranslation(currentLocale, 'responseTime'),
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "",
      })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <main>
      <section className="py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {getTranslation(currentLocale, 'getInTouch')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {getTranslation(currentLocale, 'contactPageSubtitle')}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      {getTranslation(currentLocale, 'sendUsAMessage')}
                    </CardTitle>
                    <CardDescription>
                      {getTranslation(currentLocale, 'contactFormDescription')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">{getTranslation(currentLocale, 'fullName')}</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            placeholder={getTranslation(currentLocale, 'fullNamePlaceholder')}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">{getTranslation(currentLocale, 'emailAddress')}</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder={getTranslation(currentLocale, 'emailPlaceholder')}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="category">{getTranslation(currentLocale, 'category')}</Label>
                        <Select value={formData.category} onValueChange={(value) => handleChange("category", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={getTranslation(currentLocale, 'selectCategory')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">{getTranslation(currentLocale, 'generalInquiry')}</SelectItem>
                            <SelectItem value="support">{getTranslation(currentLocale, 'technicalSupport')}</SelectItem>
                            <SelectItem value="feature">{getTranslation(currentLocale, 'featureRequest')}</SelectItem>
                            <SelectItem value="bug">{getTranslation(currentLocale, 'bugReport')}</SelectItem>
                            <SelectItem value="business">{getTranslation(currentLocale, 'businessInquiry')}</SelectItem>
                            <SelectItem value="partnership">{getTranslation(currentLocale, 'partnership')}</SelectItem>
                            <SelectItem value="media">{getTranslation(currentLocale, 'mediaPress')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">{getTranslation(currentLocale, 'subject')}</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleChange("subject", e.target.value)}
                          placeholder={getTranslation(currentLocale, 'subjectPlaceholder')}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">{getTranslation(currentLocale, 'message')}</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          placeholder={getTranslation(currentLocale, 'messagePlaceholder')}
                          className="min-h-[120px]"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? getTranslation(currentLocale, 'sending') : getTranslation(currentLocale, 'sendMessage')}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      {getTranslation(currentLocale, 'emailSupport')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">{getTranslation(currentLocale, 'emailSupportDesc')}</p>
                    <p className="font-medium">support@veo3promgenerator.com</p>
                    <p className="text-sm text-muted-foreground mt-2">{getTranslation(currentLocale, 'emailResponseTime')}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Headphones className="h-5 w-5" />
                      {getTranslation(currentLocale, 'liveChatSupport')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">{getTranslation(currentLocale, 'liveChatDesc')}</p>
                    <Button className="w-full bg-transparent" variant="outline">
                      {getTranslation(currentLocale, 'startLiveChat')}
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">{getTranslation(currentLocale, 'liveChatHours')}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      {getTranslation(currentLocale, 'communityForum')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">{getTranslation(currentLocale, 'communityForumDesc')}</p>
                    <Button className="w-full bg-transparent" variant="outline">
                      {getTranslation(currentLocale, 'visitForum')}
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">{getTranslation(currentLocale, 'communitySupport')}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      {getTranslation(currentLocale, 'businessHours')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>{getTranslation(currentLocale, 'mondayFriday')}</span>
                        <span>9:00 AM - 6:00 PM PST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{getTranslation(currentLocale, 'saturday')}</span>
                        <span>10:00 AM - 4:00 PM PST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{getTranslation(currentLocale, 'sunday')}</span>
                        <span>{getTranslation(currentLocale, 'closed')}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      {getTranslation(currentLocale, 'officeLocation')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">{getTranslation(currentLocale, 'visitOffice')}</p>
                    <address className="text-sm not-italic">
                      123 Innovation Drive
                      <br />
                      San Francisco, CA 94105
                      <br />
                      United States
                    </address>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">{getTranslation(currentLocale, 'faqSectionTitle')}</h2>
              <p className="text-muted-foreground mb-8">
                {getTranslation(currentLocale, 'faqSectionDesc')}
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" asChild>
                  <a href="/faq">{getTranslation(currentLocale, 'viewFAQ')}</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/help">{getTranslation(currentLocale, 'helpCenter')}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
