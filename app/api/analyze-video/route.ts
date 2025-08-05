import { type NextRequest, NextResponse } from "next/server"
import { aiService } from "@/lib/ai-service"
import { validateToken } from "@/lib/auth"

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

    const { videoData } = await request.json()

    if (!videoData) {
      return NextResponse.json({ error: "Missing video data" }, { status: 400 })
    }

    // Remove data URL prefix if present
    const base64Data = videoData.replace(/^data:video\/[a-z0-9]+;base64,/, "")

    const result = await aiService.analyzeVideo(base64Data)

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      jsonOutput: result.data.jsonOutput,
      paragraphOutput: result.data.paragraphOutput,
      fallbackUsed: result.fallbackUsed,
    })
  } catch (error) {
    console.error("Video analysis error:", error)
    return NextResponse.json(
      {
        error: "Failed to analyze video",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
