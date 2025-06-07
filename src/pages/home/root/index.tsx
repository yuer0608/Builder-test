import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HomeRoot() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section - 背景撑满全屏 */}
      <div className="w-full h-[800px] relative bg-gradient-to-r from-white to-[#F6F6FF]">
        {/* Navigation Bar - 撑满全屏，内容居中 */}
        <nav className="absolute top-0 left-0 w-full h-[60px] bg-[rgba(250,250,252,0.8)] backdrop-blur-[8px] border-b border-[rgba(0,0,0,0.1)] z-10">
          <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 lg:px-20">
            {/* Logo */}
            <div className="flex items-center gap-2 text-[#3E3E7B] text-xl lg:text-2xl font-bold">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-grape-600 to-[#ED8EE9] rounded-full flex items-center justify-center text-white text-sm lg:text-lg font-bold">
                A7
              </div>
              <span className="font-['Inter']">Apply7</span>
            </div>

            {/* Navigation Menu - 确保在大部分屏幕上都能显示 */}
            <div className="flex items-center gap-6 lg:gap-[50px]">
              <Link
                to="/student"
                className="flex items-center gap-1 text-black text-sm font-semibold cursor-pointer hover:text-grape-600 transition-colors">
                学生/家长
              </Link>
              <div className="flex items-center gap-1 text-black text-sm font-semibold cursor-pointer hover:text-grape-600 transition-colors">
                学校/机构
              </div>
              <div
                className="relative flex items-center gap-1 text-black text-sm font-semibold cursor-pointer hover:text-grape-600 transition-colors"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}>
                关于我们
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="none">
                  <path d="M9.9987 12.4997L5.83203 8.33301H14.1654L9.9987 12.4997Z" fill="black" />
                </svg>
                {/* Dropdown Menu */}
                {isAboutDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                    <Link
                      to="/contact"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-grape-600 transition-colors">
                      联系我们
                    </Link>
                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-grape-600 transition-colors cursor-pointer">
                      公司介绍
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-0.5 text-black text-sm font-semibold cursor-pointer hover:text-grape-600 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M9.99935 18.3346C8.86046 18.3346 7.78407 18.1159 6.77018 17.6784C5.75629 17.2409 4.87088 16.6437 4.11393 15.8867C3.35699 15.1298 2.75977 14.2444 2.32227 13.2305C1.88477 12.2166 1.66602 11.1402 1.66602 10.0013C1.66602 8.84852 1.88477 7.76866 2.32227 6.76172C2.75977 5.75477 3.35699 4.87283 4.11393 4.11589C4.87088 3.35894 5.75629 2.76172 6.77018 2.32422C7.78407 1.88672 8.86046 1.66797 9.99935 1.66797C11.1521 1.66797 12.232 1.88672 13.2389 2.32422C14.2459 2.76172 15.1278 3.35894 15.8848 4.11589C16.6417 4.87283 17.2389 5.75477 17.6764 6.76172C18.1139 7.76866 18.3327 8.84852 18.3327 10.0013C18.3327 11.1402 18.1139 12.2166 17.6764 13.2305C17.2389 14.2444 16.6417 15.1298 15.8848 15.8867C15.1278 16.6437 14.2459 17.2409 13.2389 17.6784C12.232 18.1159 11.1521 18.3346 9.99935 18.3346ZM9.99935 16.6263C10.3605 16.1263 10.673 15.6055 10.9368 15.0638C11.2007 14.5221 11.416 13.9457 11.5827 13.3346H8.41602C8.58268 13.9457 8.79796 14.5221 9.06185 15.0638C9.32574 15.6055 9.63824 16.1263 9.99935 16.6263ZM7.83268 16.293C7.58268 15.8346 7.36393 15.3589 7.17643 14.8659C6.98893 14.3728 6.83268 13.8624 6.70768 13.3346H4.24935C4.65213 14.0291 5.1556 14.6332 5.75977 15.1471C6.36393 15.661 7.0549 16.043 7.83268 16.293ZM12.166 16.293C12.9438 16.043 13.6348 15.661 14.2389 15.1471C14.8431 14.6332 15.3466 14.0291 15.7493 13.3346H13.291C13.166 13.8624 13.0098 14.3728 12.8223 14.8659C12.6348 15.3589 12.416 15.8346 12.166 16.293ZM3.54102 11.668H6.37435C6.33268 11.3902 6.30143 11.1159 6.2806 10.8451C6.25977 10.5742 6.24935 10.293 6.24935 10.0013C6.24935 9.70963 6.25977 9.42838 6.2806 9.15755C6.30143 8.88672 6.33268 8.61241 6.37435 8.33463H3.54102C3.47157 8.61241 3.41949 8.88672 3.38477 9.15755C3.35004 9.42838 3.33268 9.70963 3.33268 10.0013C3.33268 10.293 3.35004 10.5742 3.38477 10.8451C3.41949 11.1159 3.47157 11.3902 3.54102 11.668ZM8.04102 11.668H11.9577C11.9993 11.3902 12.0306 11.1159 12.0514 10.8451C12.0723 10.5742 12.0827 10.293 12.0827 10.0013C12.0827 9.70963 12.0723 9.42838 12.0514 9.15755C12.0306 8.88672 11.9993 8.61241 11.9577 8.33463H8.04102C7.99935 8.61241 7.9681 8.88672 7.94727 9.15755C7.92643 9.42838 7.91602 9.70963 7.91602 10.0013C7.91602 10.293 7.92643 10.5742 7.94727 10.8451C7.9681 11.1159 7.99935 11.3902 8.04102 11.668ZM13.6243 11.668H16.4577C16.5271 11.3902 16.5792 11.1159 16.6139 10.8451C16.6487 10.5742 16.666 10.293 16.666 10.0013C16.666 9.70963 16.6487 9.42838 16.6139 9.15755C16.5792 8.88672 16.5271 8.61241 16.4577 8.33463H13.6243C13.666 8.61241 13.6973 8.88672 13.7181 9.15755C13.7389 9.42838 13.7493 9.70963 13.7493 10.0013C13.7493 10.293 13.7389 10.5742 13.7181 10.8451C13.6973 11.1159 13.666 11.3902 13.6243 11.668ZM13.291 6.66797H15.7493C15.3466 5.97352 14.8431 5.36936 14.2389 4.85547C13.6348 4.34158 12.9438 3.95964 12.166 3.70964C12.416 4.16797 12.6348 4.64366 12.8223 5.13672C13.0098 5.62977 13.166 6.14019 13.291 6.66797ZM8.41602 6.66797H11.5827C11.416 6.05686 11.2007 5.48047 10.9368 4.9388C10.673 4.39714 10.3605 3.8763 9.99935 3.3763C9.63824 3.8763 9.32574 4.39714 9.06185 4.9388C8.79796 5.48047 8.58268 6.05686 8.41602 6.66797ZM4.24935 6.66797H6.70768C6.83268 6.14019 6.98893 5.62977 7.17643 5.13672C7.36393 4.64366 7.58268 4.16797 7.83268 3.70964C7.0549 3.95964 6.36393 4.34158 5.75977 4.85547C5.1556 5.36936 4.65213 5.97352 4.24935 6.66797Z"
                    fill="black"
                  />
                </svg>
                <span className="hidden lg:inline">简体中文</span>
                <span className="lg:hidden">中文</span>
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path d="M9.9987 12.4997L5.83203 8.33301H14.1654L9.9987 12.4997Z" fill="black" />
                </svg>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button className="w-8 h-8 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* 内容容器 - 居中，最大宽度1440px */}
        <div className="max-w-[1440px] mx-auto relative h-full">
          {/* Hero Content */}
          <div className="absolute left-4 lg:left-20 top-[200px] lg:top-[283px] w-[calc(100%-2rem)] lg:w-[556px] flex flex-col gap-4 lg:gap-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[150%] bg-gradient-to-r from-grape-600 to-[#ED8EE9] bg-clip-text text-transparent m-0">
              <span className="font-['Inter'] font-bold">MIT 潘博士</span>
              <br />
              <span className="font-['PingFang_SC'] font-semibold">用AI逆转留学信息差</span>
            </h1>
            <p className="text-black text-lg lg:text-xl font-normal m-0">让全世界年轻人都有更美好的未来！</p>

            {/* Button Group */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 mt-6 lg:mt-10">
              <Link
                to="/student"
                className="w-full sm:w-[180px] lg:w-[200px] h-12 lg:h-14 px-6 lg:px-9 py-3 lg:py-[15px] bg-grape-600 border border-[#23169B] rounded-xl text-white text-lg lg:text-xl font-medium leading-[155%] cursor-pointer hover:bg-grape-700 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center">
                学生/家长
              </Link>
              <button className="w-full sm:w-[180px] lg:w-[200px] h-12 lg:h-14 px-6 lg:px-9 py-3 lg:py-[15px] bg-white border border-gray-300 rounded-xl text-black text-lg lg:text-xl font-medium leading-[155%] cursor-pointer hover:bg-gray-50 hover:border-grape-600 transition-all duration-300">
                学校/机构
              </button>
            </div>
          </div>

          {/* Hero Image Section - 只在大屏幕显示 */}
          <div className="hidden lg:block absolute right-0 top-[60px] w-[648px] h-[740px]">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-[648px] h-[740px] bg-gradient-to-br from-[rgba(223,206,255,0.5)] via-[rgba(233,236,255,0.3)] to-transparent"></div>

            {/* Hero Image */}
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=431&h=656&fit=crop&crop=face"
              alt="MIT Dr. Pan - Apply7 Founder"
              className="absolute left-24 top-[84px] w-[431px] h-[656px] rounded-xl object-cover"
            />

            {/* Founder Label */}
            <div className="absolute right-[167px] bottom-[62px] text-white text-right">
              <div className="font-['Inter'] text-xl font-bold leading-[160%]">
                Apply7 <span className="font-['PingFang_SC'] font-normal">创始人</span>
                <br />
                MIT<span className="font-['PingFang_SC'] font-normal"> 潘博士</span>
              </div>
              <div className="font-['PingFang_SC'] text-sm font-normal leading-[160%] opacity-90 mt-2">
                Apply7 创始人
                <br />
                麻省理工学院 潘鹏凯博士
              </div>
            </div>
          </div>

          {/* Mobile Image Section - 小屏幕显示 */}
          <div className="lg:hidden absolute right-4 top-[400px] w-[calc(50%-1rem)] max-w-[300px]">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=400&fit=crop&crop=face"
              alt="MIT Dr. Pan - Apply7 Founder"
              className="w-full h-auto rounded-xl object-cover opacity-80"
            />
          </div>
        </div>
      </div>

      {/* Footer - 背景撑满全屏，内容居中 */}
      <footer className="w-full bg-[#F2F3F9] py-12 lg:py-0 lg:h-[298px]">
        <div className="max-w-[1440px] mx-auto h-full flex flex-col lg:flex-row items-center justify-between px-4 lg:px-[108px] gap-8 lg:gap-0">
          {/* Footer Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 lg:w-[60px] h-12 lg:h-[60px] bg-gradient-to-br from-grape-600 to-[#ED8EE9] rounded-full flex items-center justify-center text-white text-xl lg:text-2xl font-bold">
              A7
            </div>
            <div className="font-['Inter'] text-2xl lg:text-[32px] font-bold text-[#3E3E7B]">Apply7</div>
          </div>

          {/* Social Section */}
          <div className="flex flex-col items-center gap-6 lg:gap-8">
            <h3 className="text-[#3E3E7C] text-lg lg:text-xl font-semibold m-0">关注我们</h3>

            {/* Social Icons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              {/* 小红书 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-[100px] lg:w-[120px] h-[100px] lg:h-[120px] bg-white rounded-xl flex items-center justify-center shadow-md">
                  <div className="w-20 lg:w-24 h-20 lg:h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-xs text-center leading-tight">
                    小红书
                    <br />
                    二维码
                  </div>
                </div>
                <div className="text-[#3E3E7C] text-sm font-medium text-center">小红书</div>
              </div>

              {/* 微信公众号 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-[100px] lg:w-[120px] h-[100px] lg:h-[120px] bg-white rounded-xl flex items-center justify-center shadow-md">
                  <div className="w-20 lg:w-24 h-20 lg:h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-xs text-center leading-tight">
                    微信公众号
                    <br />
                    二维码
                  </div>
                </div>
                <div className="text-[#3E3E7C] text-sm font-medium text-center">微信公众号</div>
              </div>

              {/* MIT潘博士视频号 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-[100px] lg:w-[120px] h-[100px] lg:h-[120px] bg-white rounded-xl flex items-center justify-center p-2 lg:p-3 shadow-md">
                  <div className="w-20 lg:w-24 h-20 lg:h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-xs text-center leading-tight">
                    MIT潘博士
                    <br />
                    视频号
                  </div>
                </div>
                <div className="text-[#3E3E7C] text-sm font-medium text-center">MIT潘博士视频号</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomeRoot;
