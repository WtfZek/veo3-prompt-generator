import { type NextRequest, NextResponse } from "next/server"
import { aiService } from "@/lib/ai-service"
import { validateToken } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    // 验证token
    const token = request.cookies.get('auth-token')?.value
    if (!token) {
      return NextResponse.json(
        { error: '未授权访问' },
        { status: 401 }
      )
    }
    
    const authResult = validateToken(token)
    if (!authResult.valid) {
      return NextResponse.json(
        { error: 'Token无效，请重新登录' },
        { status: 401 }
      )
    }

    const { message, attachedFiles, conversationHistory } = await request.json()

    if (!message && (!attachedFiles || attachedFiles.length === 0)) {
      return NextResponse.json({ error: "Message or files required" }, { status: 400 })
    }

    const result = await aiService.chatCompletion(message, attachedFiles, conversationHistory)

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      ...result.data,
      fallbackUsed: result.fallbackUsed,
    })
  } catch (error) {
    console.error("Chat completion error:", error)
    return NextResponse.json(
      {
        error: "Failed to process chat message",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
