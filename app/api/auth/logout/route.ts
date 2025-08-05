import { NextRequest, NextResponse } from 'next/server'
import { clearToken } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value
    
    if (token) {
      clearToken(token)
    }
    
    const response = NextResponse.json({
      success: true,
      message: '登出成功'
    })
    
    // 清除cookie
    response.cookies.delete('auth-token')
    
    return response
    
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { error: '服务器错误' },
      { status: 500 }
    )
  }
}