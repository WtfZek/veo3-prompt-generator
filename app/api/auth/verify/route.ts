import { NextRequest, NextResponse } from 'next/server'
import { validateToken } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value
    
    if (!token) {
      return NextResponse.json(
        { valid: false, error: '未找到认证token' },
        { status: 401 }
      )
    }
    
    const result = validateToken(token)
    
    if (!result.valid) {
      return NextResponse.json(
        { valid: false, error: 'token无效' },
        { status: 401 }
      )
    }
    
    return NextResponse.json({
      valid: true,
      user: result.user
    })
    
  } catch (error) {
    console.error('Token verification error:', error)
    return NextResponse.json(
      { valid: false, error: '服务器错误' },
      { status: 500 }
    )
  }
}