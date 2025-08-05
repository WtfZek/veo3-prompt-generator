import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

interface Account {
  id: string
  username: string
  password: string
  token: string | null
  role: string
}

interface AccountsData {
  accounts: Account[]
}

const ACCOUNTS_FILE = path.join(process.cwd(), 'data', 'accounts.json')

// 读取账号数据
export function getAccountsData(): AccountsData {
  try {
    const data = fs.readFileSync(ACCOUNTS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading accounts file:', error)
    return { accounts: [] }
  }
}

// 保存账号数据
export function saveAccountsData(data: AccountsData): void {
  try {
    fs.writeFileSync(ACCOUNTS_FILE, JSON.stringify(data, null, 2))
  } catch (error) {
    console.error('Error saving accounts file:', error)
  }
}

// 生成随机token
export function generateToken(): string {
  return crypto.randomBytes(32).toString('hex')
}

// 验证用户登录
export function validateLogin(username: string, password: string): { success: boolean; token?: string; user?: Account } {
  const data = getAccountsData()
  const user = data.accounts.find(acc => acc.username === username && acc.password === password)
  
  if (!user) {
    return { success: false }
  }
  
  // 生成新token并保存
  const token = generateToken()
  user.token = token
  saveAccountsData(data)
  
  return { 
    success: true, 
    token, 
    user: { ...user, password: '' } // 不返回密码
  }
}

// 验证token是否存在（轻量级验证）
export function tokenExists(token: string): boolean {
  if (!token) return false
  
  const data = getAccountsData()
  return data.accounts.some(acc => acc.token === token)
}

// 验证token是否匹配用户（完整验证）
export function validateToken(token: string): { valid: boolean; user?: Account } {
  if (!token) return { valid: false }
  
  const data = getAccountsData()
  const user = data.accounts.find(acc => acc.token === token)
  
  if (!user) {
    return { valid: false }
  }
  
  return { 
    valid: true, 
    user: { ...user, password: '' } // 不返回密码
  }
}

// 清除用户token（登出）
export function clearToken(token: string): boolean {
  const data = getAccountsData()
  const user = data.accounts.find(acc => acc.token === token)
  
  if (user) {
    user.token = null
    saveAccountsData(data)
    return true
  }
  
  return false
}