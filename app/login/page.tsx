"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Lock, User, Eye, EyeOff } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/contexts/auth-context"
import { useLocale } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

export default function LoginPage() {
  const currentLocale = useLocale()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const { toast } = useToast()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const success = await login(username, password)
      
      if (success) {
        toast({
          title: getTranslation(currentLocale, 'loginSuccess'),
          description: `${getTranslation(currentLocale, 'loginSuccessMessage')}，${username}！`,
        })
        router.push("/")
      } else {
        setError(getTranslation(currentLocale, 'loginError'))
      }
    } catch (error) {
      setError(getTranslation(currentLocale, 'networkError'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-3.5rem)] xs:min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {getTranslation(currentLocale, 'loginPageTitle')}
          </h1>
          <p className="text-muted-foreground mt-2">
            {getTranslation(currentLocale, 'loginPageSubtitle')}
          </p>
        </div>

        {/* Login Card */}
        <Card className="card-red-shadow border-red-medium/20">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl text-center">{getTranslation(currentLocale, 'loginAccountTitle')}</CardTitle>
            <CardDescription className="text-center">
              {getTranslation(currentLocale, 'loginAccountDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertDescription className="text-red-800">
                    {error}
                  </AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="username">{getTranslation(currentLocale, 'username')}</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="username"
                    type="text"
                    placeholder={getTranslation(currentLocale, 'usernamePlaceholder')}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 border-red-medium/20 focus:border-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">{getTranslation(currentLocale, 'password')}</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={getTranslation(currentLocale, 'passwordPlaceholder')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 border-red-medium/20 focus:border-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-primary !mt-6 hover:bg-primary/90 text-white"

                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {getTranslation(currentLocale, 'loggingIn')}
                  </>
                ) : (
                  getTranslation(currentLocale, 'login')
                )}
              </Button>
            </form>
            
          </CardContent>
        </Card>
        
        {/* Footer */}
        {/* <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>© 2024 VeO3 Prompt Generator. All rights reserved.</p>
        </div> */}
      </div>
    </div>
  )
}