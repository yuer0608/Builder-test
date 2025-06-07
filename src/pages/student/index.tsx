import React from 'react';
import { Link } from 'react-router-dom';

function StudentPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* 简单的导航栏 */}
      <nav className="w-full h-[60px] bg-[rgba(250,250,252,0.8)] backdrop-blur-[8px] border-b border-[rgba(0,0,0,0.1)]">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 lg:px-20">
          <Link to="/" className="flex items-center gap-2 text-[#3E3E7B] text-xl lg:text-2xl font-bold">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-grape-600 to-[#ED8EE9] rounded-full flex items-center justify-center text-white text-sm lg:text-lg font-bold">
              A7
            </div>
            <span className="font-['Inter']">Apply7</span>
          </Link>

          <div className="flex items-center gap-6 lg:gap-[50px]">
            <Link
              to="/"
              className="flex items-center gap-1 text-black text-sm font-semibold cursor-pointer hover:text-grape-600 transition-colors">
              返回首页
            </Link>
          </div>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-grape-600 to-[#ED8EE9] bg-clip-text text-transparent mb-6">
            学生/家长专区
          </h1>
          <p className="text-xl text-gray-600 mb-8">为学生和家长提供专业的留学申请指导和AI智能服务</p>
        </div>

        {/* 服务卡片区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-grape-600 to-[#ED8EE9] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">AI选校指导</h3>
            <p className="text-gray-600 leading-relaxed">
              基于MIT潘博士的专业经验，AI智能分析你的背景，推荐最适合的学校和专业
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-grape-600 to-[#ED8EE9] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">文书优化</h3>
            <p className="text-gray-600 leading-relaxed">
              AI智能文书助手，帮助你撰写个人陈述、推荐信等申请材料，提高录取概率
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-grape-600 to-[#ED8EE9] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">实时咨询</h3>
            <p className="text-gray-600 leading-relaxed">
              24/7 AI智能客服，随时解答你的留学疑问，提供专业的申请建议和指导
            </p>
          </div>
        </div>

        {/* 行动呼吁区域 */}
        <div className="bg-gradient-to-r from-grape-600 to-[#ED8EE9] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">开始你的留学之旅</h2>
          <p className="text-xl mb-8 opacity-90">与MIT潘博士的AI助手一起，打破信息差，实现留学梦想</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-grape-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              免费咨询
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-grape-600 transition-colors duration-300">
              了解更多
            </button>
          </div>
        </div>

        {/* 联系方式 */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">联系我们</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>contact@apply7.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>400-123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPage;
