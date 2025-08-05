"use client"

import { useLocale } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

export default function PromptGuidePage() {
  const currentLocale = useLocale()
  const isChinese = currentLocale === 'zh'

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* 页面标题 - 中文优化 */}
        <h1 className={`text-4xl font-bold mb-8 ${isChinese ? 'text-center tracking-wider' : ''}`}>
          {getTranslation(currentLocale, 'promptGuideTitle')}
        </h1>
        
        <div className={`prose prose-lg max-w-none ${isChinese ? 'prose-zh' : ''}`}>
          {/* 副标题 - 中文优化 */}
          <p className={`text-xl text-muted-foreground mb-12 ${isChinese ? 'text-center leading-relaxed' : ''}`}>
            {getTranslation(currentLocale, 'promptGuideSubtitle')}
          </p>

          {/* 入门指南部分 - 中文特殊样式 */}
          <div className={`mb-12 ${isChinese ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl p-8' : ''}`}>
            <h2 className={`${isChinese ? 'text-2xl font-bold mb-6 text-blue-800 dark:text-blue-300 border-l-4 border-blue-500 pl-4' : ''}`}>
              {getTranslation(currentLocale, 'gettingStarted')}
            </h2>
            <p className={`${isChinese ? 'text-lg leading-loose text-gray-700 dark:text-gray-300' : ''}`}>
              {getTranslation(currentLocale, 'gettingStartedDesc')}
            </p>
          </div>

          {/* 基本提示词结构部分 - 中文优化 */}
          <div className={`mb-12 ${isChinese ? 'bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 rounded-xl p-8' : ''}`}>
            <h2 className={`${isChinese ? 'text-2xl font-bold mb-6 text-green-800 dark:text-green-300 border-l-4 border-green-500 pl-4' : ''}`}>
              {getTranslation(currentLocale, 'basicPromptStructure')}
            </h2>
            <p className={`${isChinese ? 'text-lg leading-loose text-gray-700 dark:text-gray-300 mb-6' : ''}`}>
              {getTranslation(currentLocale, 'basicPromptStructureDesc')}
            </p>
            
            {/* 列表项 - 中文特殊样式 */}
            <ul className={`${isChinese ? 'space-y-4' : ''}`}>
              <li className={`${isChinese ? 'flex items-start space-x-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg' : ''}`}>
                {isChinese && <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>}
                <span className={`${isChinese ? 'text-base leading-relaxed' : ''}`}>
                  {getTranslation(currentLocale, 'clearSubjectDescription')}
                </span>
              </li>
              <li className={`${isChinese ? 'flex items-start space-x-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg' : ''}`}>
                {isChinese && <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>}
                <span className={`${isChinese ? 'text-base leading-relaxed' : ''}`}>
                  {getTranslation(currentLocale, 'specificActions')}
                </span>
              </li>
              <li className={`${isChinese ? 'flex items-start space-x-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg' : ''}`}>
                {isChinese && <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>}
                <span className={`${isChinese ? 'text-base leading-relaxed' : ''}`}>
                  {getTranslation(currentLocale, 'settingEnvironment')}
                </span>
              </li>
              <li className={`${isChinese ? 'flex items-start space-x-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg' : ''}`}>
                {isChinese && <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>}
                <span className={`${isChinese ? 'text-base leading-relaxed' : ''}`}>
                  {getTranslation(currentLocale, 'visualStyleMood')}
                </span>
              </li>
              <li className={`${isChinese ? 'flex items-start space-x-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg' : ''}`}>
                {isChinese && <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>}
                <span className={`${isChinese ? 'text-base leading-relaxed' : ''}`}>
                  {getTranslation(currentLocale, 'technicalSpecifications')}
                </span>
              </li>
            </ul>
          </div>

          {/* 高级技巧部分 - 中文优化 */}
          <div className={`mb-12 ${isChinese ? 'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl p-8' : ''}`}>
            <h2 className={`${isChinese ? 'text-2xl font-bold mb-6 text-purple-800 dark:text-purple-300 border-l-4 border-purple-500 pl-4' : ''}`}>
              {getTranslation(currentLocale, 'advancedTechniques')}
            </h2>
            <p className={`${isChinese ? 'text-lg leading-loose text-gray-700 dark:text-gray-300' : ''}`}>
              {getTranslation(currentLocale, 'advancedTechniquesDesc')}
            </p>
          </div>

          {/* 需要帮助部分 - 中文优化 */}
          <div className={`${isChinese ? 'bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20' : 'bg-primary/10'} p-6 rounded-lg mt-8`}>
            <h3 className={`text-lg font-semibold mb-2 ${isChinese ? 'text-orange-800 dark:text-orange-300 text-xl' : ''}`}>
              {getTranslation(currentLocale, 'needHelp')}
            </h3>
            <p className={`mb-4 ${isChinese ? 'text-base leading-relaxed text-gray-700 dark:text-gray-300' : ''}`}>
              {getTranslation(currentLocale, 'needHelpDesc')}
            </p>
            <a 
              href="/#generator" 
              className={`text-primary hover:underline font-medium ${isChinese ? 'inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors no-underline hover:no-underline' : ''}`}
            >
              {getTranslation(currentLocale, 'generatePromptsNow')}
            </a>
          </div>
        </div>
      </div>
      
      {/* 中文专用样式 */}
      {isChinese && (
        <style jsx>{`
          .prose-zh h2 {
            font-family: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
          }
          .prose-zh p {
            font-family: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
          }
          .prose-zh li {
            font-family: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
          }
        `}</style>
      )}
    </div>
  )
}
