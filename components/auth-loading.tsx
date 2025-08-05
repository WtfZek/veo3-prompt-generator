"use client"

import { Loader2 } from "lucide-react"

export function AuthLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
          <Loader2 className="h-8 w-8 text-white animate-spin" />
        </div>
        <h2 className="text-xl font-semibold mb-2">正在验证身份...</h2>
        <p className="text-muted-foreground">请稍候</p>
      </div>
    </div>
  )
}