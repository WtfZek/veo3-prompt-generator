import { NextRequest, NextResponse } from "next/server"
import { advancedAIService } from "@/lib/advanced-ai-service"
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

    const { formData, dialogueSetting = "no" } = await request.json()

    if (!formData || typeof formData !== "object") {
      return NextResponse.json(
        { error: "Form data is required and must be an object" },
        { status: 400 }
      )
    }

    // Validate required fields
    if (!formData.mainSubject || !formData.sceneAction) {
      return NextResponse.json(
        { error: "Main subject and scene action are required" },
        { status: 400 }
      )
    }

    const aiResponse = await advancedAIService.generateParagraphPrompt(formData, dialogueSetting)

    if (!aiResponse.success) {
      return NextResponse.json(
        { error: aiResponse.error },
        { status: 500 }
      )
    }

    return NextResponse.json({
      paragraphPrompt: aiResponse.data.paragraphPrompt,
      metadata: aiResponse.data.metadata
    })

  } catch (error) {
    console.error("Advanced Paragraph API Error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}