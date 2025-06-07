import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full h-[60px] bg-[rgba(250,250,252,0.8)] backdrop-blur-[8px] border-b border-[rgba(0,0,0,0.1)] z-10">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 lg:px-20">
          <Link to="/" className="flex items-center gap-2 text-[#3E3E7B] text-xl lg:text-2xl font-bold">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-grape-600 to-[#ED8EE9] rounded-full flex items-center justify-center text-white text-sm lg:text-lg font-bold">
              A7
            </div>
            <span className="font-['Inter']">Apply7</span>
          </Link>

          <div className="flex items-center gap-6 lg:gap-[50px]">
            <Link
              to="/student"
              className="flex items-center gap-1 text-black text-sm font-semibold cursor-pointer hover:text-grape-600 transition-colors">
              学生/家长
            </Link>
            <div className="flex items-center gap-1 text-black text-sm font-semibold cursor-pointer hover:text-grape-600 transition-colors">
              学校/机构
            </div>
            <div className="flex items-center gap-1 text-black text-sm font-semibold cursor-pointer hover:text-grape-600 transition-colors">
              关于我们
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M9.9987 12.4997L5.83203 8.33301H14.1654L9.9987 12.4997Z" fill="black" />
              </svg>
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
        </div>
      </nav>

      {/* Main Content */}
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[600px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1440&h=600&fit=crop&crop=top"
              alt="Mountain climbers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-20 pt-[120px] lg:pt-[160px]">
            <div className="max-w-[700px]">
              <p className="text-[#747CFF] font-['Inter'] text-lg lg:text-xl font-bold mb-4">ABOUT US</p>
              <h1 className="text-[#212529] text-3xl lg:text-5xl font-semibold mb-6 lg:mb-8">关于我们</h1>
              <p className="text-[#212529] text-lg lg:text-xl leading-relaxed">
                我们致力于提供 AI 驱动、博士品控的全球升学 VIP 服务，
                <br />
                让每一次申请，都直指成功。
              </p>
            </div>
          </div>
        </div>

        {/* Company Overview Section */}
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[170px] py-16 lg:py-20">
          <h2 className="text-center text-3xl lg:text-4xl font-semibold text-black mb-12 lg:mb-16">公司概况</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Company Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=579&h=361&fit=crop"
                alt="Company founders"
                className="w-full h-[250px] lg:h-[361px] object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[34px] bg-gradient-to-r from-[#3244B5] to-[rgba(203,210,255,0.65)] rounded-b-xl flex items-center px-4">
                <p className="text-white text-sm font-semibold">
                  三位创始人：潘旦丹女士（Cornell），潘鹏凯博士（MIT），尼葛洛庞帝教授（MIT）
                </p>
              </div>
            </div>

            {/* Company Description */}
            <div className="space-y-6">
              <p className="text-black text-lg lg:text-xl leading-[150%]">
                2024年3月，潘鹏凯博士（MIT）和潘旦丹女士（康奈尔大学）在硅谷创立AiApply,
                致力于研发基于人工智能的选校和规划项目。创立之初，该项目获得"数字化大师"尼葛洛庞帝教授核心技术指导和资金支持。
              </p>
              <p className="text-black text-lg lg:text-xl leading-[150%]">
                2024年4月，上海趣申请科技有限公���（Apply7）成立，上海研发中心正式启动。6月，Apply7获得微软全球加速器的支持与孵化。同年9月Apply7管理经营团队成立，成员来自微软、支付宝字节、拼多多、钉钉等知名互联网企业，行业首创的AI升学规划报告产品问世，受到北上广第一梯队国际学校家长广泛好评。2025年5月，与50多学校建立AI教育转型战略合作伙伴。
              </p>
            </div>
          </div>
        </div>

        {/* Co-founders Section */}
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[170px] py-8 lg:py-12">
          <h2 className="text-center text-3xl lg:text-4xl font-semibold text-black mb-12 lg:mb-16">联合创始人</h2>

          <div className="space-y-8 lg:space-y-12">
            {/* 潘鹏凯博士 */}
            <div className="bg-[#F7F8FF] rounded-3xl p-6 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=242&fit=crop&crop=face"
                  alt="潘鹏凯博士"
                  className="w-full lg:w-[200px] h-[200px] lg:h-[242px] object-cover rounded-xl"
                />
                <div className="flex-1 space-y-5">
                  <h3 className="text-2xl lg:text-[32px] font-semibold text-black leading-[150%]">潘鹏凯博士</h3>
                  <p className="text-black text-lg lg:text-xl leading-[150%]">
                    本科毕业于浙江大学计算机系，师从中国工程院院士潘云鹤。后被麻省理工学院录取，成为麻省理工学院媒体实验室第一位大陆籍人工智能博士，早年首创"协同过滤"，奠定短视频推荐算法。学成回国后，始终致力于用人工智能技术改善世界，先后创立了7家公司Apply7（AI时代的新型留学工具）
                    、爱乐奇（数字教育内容独角兽）、智灵龙（AI 家庭诊断设备）等。此外，他还担任过之江实验室
                    AI生命科学研究中心主任。
                  </p>
                </div>
              </div>
            </div>

            {/* 潘旦丹女士 */}
            <div className="bg-[#F7F8FF] rounded-3xl p-6 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616c3a1f401?w=200&h=240&fit=crop&crop=face"
                  alt="潘旦丹女士"
                  className="w-full lg:w-[200px] h-[200px] lg:h-[240px] object-cover rounded-xl"
                />
                <div className="flex-1 space-y-5">
                  <h3 className="text-2xl lg:text-[32px] font-semibold text-black leading-[150%]">潘旦丹女士</h3>
                  <p className="text-black text-lg lg:text-xl leading-[150%]">
                    本科毕业于浙江大学英文系，研究生毕业于康奈尔大学经济学系。曾在高通担任多年高管，后创立大学申请服务公司，帮助数百名多名学子成功爬藤，工作之余，潘旦丹还热衷开展教育公益活动。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values Section */}
        <div className="w-full bg-[#F5F5F5] py-16 lg:py-20">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-[170px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Images */}
              <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=350&h=210&fit=crop"
                    alt="使命"
                    className="w-full h-[210px] object-cover rounded-t-lg"
                  />
                  <div className="h-[120px] bg-[#6C5EEC] rounded-b-lg flex items-center justify-center">
                    <div className="text-center text-white px-6">
                      <h3 className="text-xl lg:text-2xl font-semibold mb-2">使命</h3>
                      <p className="text-sm lg:text-base">让全球年轻人有更美好的未来</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=350&h=210&fit=crop"
                    alt="愿景"
                    className="w-full h-[210px] object-cover rounded-t-lg"
                  />
                  <div className="h-[120px] bg-grape-600 rounded-b-lg flex items-center justify-center">
                    <div className="text-center text-white px-6">
                      <h3 className="text-xl lg:text-2xl font-semibold mb-2">愿景</h3>
                      <p className="text-sm lg:text-base">专注创新，打造AI驱动的全球升学平台</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=350&h=210&fit=crop"
                    alt="价值观"
                    className="w-full h-[210px] object-cover rounded-t-lg"
                  />
                  <div className="h-[120px] bg-[#23169B] rounded-b-lg flex items-center justify-center">
                    <div className="text-center text-white px-6">
                      <h3 className="text-xl lg:text-2xl font-semibold mb-2">价值观</h3>
                      <p className="text-sm lg:text-base">聚焦"共同卓越"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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

export default AboutPage;
