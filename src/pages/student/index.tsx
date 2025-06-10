import React, { useState } from 'react';

function StudentPage() {
  const [activeTab, setActiveTab] = useState('ai-report');

  const stats = [
    { number: '95%+', description: '进入理想学校的机会，比直接申请提升200%+' },
    { number: '200+', description: '藤校及G5名校offer' },
    { number: '30+', description: '24年获得藤校及G5名校录取' },
    { number: '1,000+', description: '真实服务案例' },
    { number: '200+', description: '5.0满分好评' }
  ];

  const universities = [
    { name: '麻省理工学院', offers: 2, logo: '/images/mit-logo.png' },
    { name: '哈佛大学', offers: 3, logo: '/images/harvard-logo.png' },
    { name: '斯坦福大学', offers: 3, logo: '/images/stanford-logo.png' },
    { name: '耶鲁大学', offers: 2, logo: '/images/yale-logo.png' },
    { name: '加州理工学院', offers: 2, logo: '/images/caltech-logo.png' },
    { name: '牛津大学', offers: 1, logo: '/images/oxford-logo.png' },
    { name: '约翰霍普金斯大学', offers: 2, logo: '/images/jhu-logo.png' },
    { name: '康奈尔大学', offers: 1, logo: '/images/cornell-logo.png' },
    { name: '哥伦比亚大学', offers: 2, logo: '/images/columbia-logo.png' },
    { name: '达特茅斯学院', offers: 1, logo: '/images/dartmouth-logo.png' },
    { name: '加州大学伯克利分校', offers: 2, logo: '/images/berkeley-logo.png' },
    { name: '莱斯大学', offers: 1, logo: '/images/rice-logo.png' },
    { name: '卡内基梅隆', offers: 2, logo: '/images/cmu-logo.png' },
    { name: '密歇根大学', offers: 3, logo: '/images/umich-logo.png' },
    { name: '圣路易斯华盛顿大学', offers: 2, logo: '/images/wustl-logo.png' },
    { name: '北卡罗来纳大学', offers: 2, logo: '/images/unc-logo.png' },
    { name: '加州大学圣地亚哥分校', offers: 7, logo: '/images/ucsd-logo.png' },
    { name: '佐治亚理工学院', offers: 8, logo: '/images/gatech-logo.png' },
    { name: '波士顿大学', offers: 1, logo: '/images/bu-logo.png' },
    { name: '纽约大学', offers: 2, logo: '/images/nyu-logo.png' },
    { name: '克莱蒙特·麦肯纳学院', offers: 1, logo: '/images/cmc-logo.png' },
    { name: '华盛顿大学', offers: 1, logo: '/images/uw-logo.png' },
    { name: '史密斯学院', offers: 1, logo: '/images/smith-logo.png' }
  ];

  const deliverySteps = [
    { number: 1, title: '微信小店下单', icon: '🛒' },
    { number: 2, title: '填写信息', icon: '📄' },
    { number: 3, title: '专家沟通', icon: '🎓' },
    { number: 4, title: '制作报告', icon: '✏️' },
    { number: 5, title: '审核报告', icon: '🌐' },
    { number: 6, title: '报告生成', icon: '📋' },
    { number: 7, title: '交付解读', icon: '💕' }
  ];

  const advantages = [
    {
      icon: '💡',
      title: '强大的AI升学规划能力',
      description:
        '基于独家AI Agent与大数据算法，定制精准、个性化的升学规划报告，覆盖从高中选课到大学选校、专业定位的全路径规划，助力科学决策，避免盲目投入。'
    },
    {
      icon: '💎',
      title: '顶尖大师课程体系',
      description:
        '携手哈佛、MIT等全球顶级学府导师团队，提供STEM、商业、艺术、人文等领域的高品质学术课程与科研项目，提升学生的背景实力与学术竞争力。'
    },
    {
      icon: '👥',
      title: '量身定制的服务支持团队',
      description:
        '由常春藤前招生官、资深教育顾问和心理专家组成的教练式服务团队，不仅提供申请策略、文书指导与面试训练，更注重培养学生自主规划与长期成长能力。'
    },
    {
      icon: '🌟',
      title: '全球资源与真实成长',
      description:
        '对接全球教育与实践资源，构建从学习到实习再到申请的闭环成长系统。不仅是申请成功，更是未来发展的坚实基石。'
    }
  ];

  const courses = [
    {
      title: 'MIT 张曙光院士「AI 赋能生命科学」科研项目',
      instructor: 'MIT 张曙光院士',
      schedule: '春夏秋三季开课，每季 20 节课',
      description: '探索分子生物学与AI结合\n使用AlphaFold等工具实操科研\n设计新型功能蛋白质，拓展生物医材应用',
      image: '/images/course1.jpg'
    },
    {
      title: '加州大学伯克利 AI 基础夏令营',
      instructor: '教育专家 Mr. Mauro',
      schedule: '暑假 2 周时间，线下授课',
      description: '学习Python与数据分析\n掌握核心机器学习算法\n了解AI前沿动态，积累项目经验',
      image: '/images/course2.jpg'
    },
    {
      title: '2025《哈佛国际评论》竞赛写作大师课',
      instructor: 'Ms. Sarah',
      schedule: '春夏秋三季开课，每季 16 节课',
      description: '了解HIR竞赛写作标准\n训练写作能力，1对1实时反馈\n产出高质量参赛作品',
      image: '/images/course3.jpg'
    }
  ];

  const coachingServices = [
    {
      icon: '🎯',
      title: '规划期服务',
      description: '职业方向探索及梳理、选课指导及GPA管理、背景提升资源对接、考试规划和指导'
    },
    {
      icon: '📝',
      title: '申请季服务',
      description:
        '选校指导、申请策略制定、文书策略制定与写作、简历写作及优化、申请材料准备与指导、面试辅导、奖学金申请'
    },
    {
      icon: '🎓',
      title: '后申请季服务',
      description: 'Offer前资料指导、Offer选择、签证指导、行前准备'
    }
  ];

  return (
    <div className="w-[1440px] mx-auto bg-white">
      {/* Navigation */}
      <nav className="w-[1440px] h-[60px] bg-white/80 backdrop-blur-[8px] relative z-[100]">
        <div className="max-w-[1440px] h-full flex items-center justify-between px-[108px]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#4537C9] rounded-full flex items-center justify-center text-white text-sm font-bold font-inter">
              A7
            </div>
            <span className="font-inter text-xl font-bold text-[#3E3E7B]">Apply7</span>
          </div>

          {/* Menu */}
          <div className="flex items-center gap-[50px]">
            <div className="text-[#4537C9] font-pingfang text-sm font-semibold cursor-pointer">学生/家长</div>
            <div className="text-black font-pingfang text-sm font-semibold cursor-pointer">学校/机构</div>
            <div className="flex items-center gap-1 text-black font-pingfang text-sm font-semibold cursor-pointer">
              关于我们
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.9987 12.4997L5.83203 8.33301H14.1654L9.9987 12.4997Z" fill="black" />
              </svg>
            </div>
            <div className="flex items-center gap-0.5 text-black font-pingfang text-sm font-semibold cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M9.99935 18.3346C8.86046 18.3346 7.78407 18.1159 6.77018 17.6784C5.75629 17.2409 4.87088 16.6437 4.11393 15.8867C3.35699 15.1298 2.75977 14.2444 2.32227 13.2305C1.88477 12.2166 1.66602 11.1402 1.66602 10.0013C1.66602 8.84852 1.88477 7.76866 2.32227 6.76172C2.75977 5.75477 3.35699 4.87283 4.11393 4.11589C4.87088 3.35894 5.75629 2.76172 6.77018 2.32422C7.78407 1.88672 8.86046 1.66797 9.99935 1.66797C11.1521 1.66797 12.232 1.88672 13.2389 2.32422C14.2459 2.76172 15.1278 3.35894 15.8848 4.11589C16.6417 4.87283 17.2389 5.75477 17.6764 6.76172C18.1139 7.76866 18.3327 8.84852 18.3327 10.0013C18.3327 11.1402 18.1139 12.2166 17.6764 13.2305C17.2389 14.2444 16.6417 15.1298 15.8848 15.8867C15.1278 16.6437 14.2459 17.2409 13.2389 17.6784C12.232 18.1159 11.1521 18.3346 9.99935 18.3346ZM9.99935 16.6263C10.3605 16.1263 10.673 15.6055 10.9368 15.0638C11.2007 14.5221 11.416 13.9457 11.5827 13.3346H8.41602C8.58268 13.9457 8.79796 14.5221 9.06185 15.0638C9.32574 15.6055 9.63824 16.1263 9.99935 16.6263ZM7.83268 16.293C7.58268 15.8346 7.36393 15.3589 7.17643 14.8659C6.98893 14.3728 6.83268 13.8624 6.70768 13.3346H4.24935C4.65213 14.0291 5.1556 14.6332 5.75977 15.1471C6.36393 15.661 7.0549 16.043 7.83268 16.293ZM12.166 16.293C12.9438 16.043 13.6348 15.661 14.2389 15.1471C14.8431 14.6332 15.3466 14.0291 15.7493 13.3346H13.291C13.166 13.8624 13.0098 14.3728 12.8223 14.8659C12.6348 15.3589 12.416 15.8346 12.166 16.293ZM3.54102 11.668H6.37435C6.33268 11.3902 6.30143 11.1159 6.2806 10.8451C6.25977 10.5742 6.24935 10.293 6.24935 10.0013C6.24935 9.70963 6.25977 9.42838 6.2806 9.15755C6.30143 8.88672 6.33268 8.61241 6.37435 8.33463H3.54102C3.47157 8.61241 3.41949 8.88672 3.38477 9.15755C3.35004 9.42838 3.33268 9.70963 3.33268 10.0013C3.33268 10.293 3.35004 10.5742 3.38477 10.8451C3.41949 11.1159 3.47157 11.3902 3.54102 11.668ZM8.04102 11.668H11.9577C11.9993 11.3902 12.0306 11.1159 12.0514 10.8451C12.0723 10.5742 12.0827 10.293 12.0827 10.0013C12.0827 9.70963 12.0723 9.42838 12.0514 9.15755C12.0306 8.88672 11.9993 8.61241 11.9577 8.33463H8.04102C7.99935 8.61241 7.9681 8.88672 7.94727 9.15755C7.92643 9.42838 7.91602 9.70963 7.91602 10.0013C7.91602 10.293 7.92643 10.5742 7.94727 10.8451C7.9681 11.1159 7.99935 11.3902 8.04102 11.668ZM13.6243 11.668H16.4577C16.5271 11.3902 16.5792 11.1159 16.6139 10.8451C16.6487 10.5742 16.666 10.293 16.666 10.0013C16.666 9.70963 16.6487 9.42838 16.6139 9.15755C16.5792 8.88672 16.5271 8.61241 16.4577 8.33463H13.6243C13.666 8.61241 13.6973 8.88672 13.7181 9.15755C13.7389 9.42838 13.7493 9.70963 13.7493 10.0013C13.7493 10.293 13.7389 10.5742 13.7181 10.8451C13.6973 11.1159 13.666 11.3902 13.6243 11.668ZM13.291 6.66797H15.7493C15.3466 5.97352 14.8431 5.36936 14.2389 4.85547C13.6348 4.34158 12.9438 3.95964 12.166 3.70964C12.416 4.16797 12.6348 4.64366 12.8223 5.13672C13.0098 5.62977 13.166 6.14019 13.291 6.66797ZM8.41602 6.66797H11.5827C11.416 6.05686 11.2007 5.48047 10.9368 4.9388C10.673 4.39714 10.3605 3.8763 9.99935 3.3763C9.63824 3.8763 9.32574 4.39714 9.06185 4.9388C8.79796 5.48047 8.58268 6.05686 8.41602 6.66797ZM4.24935 6.66797H6.70768C6.83268 6.14019 6.98893 5.62977 7.17643 5.13672C7.36393 4.64366 7.58268 4.16797 7.83268 3.70964C7.0549 3.95964 6.36393 4.34158 5.75977 4.85547C5.1556 5.36936 4.65213 5.97352 4.24935 6.66797Z"
                  fill="black"
                />
              </svg>
              简体中文
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.9987 12.4997L5.83203 8.33301H14.1654L9.9987 12.4997Z" fill="black" />
              </svg>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="w-[1440px] h-[800px] bg-gradient-to-r from-white to-[#F6F6FF] relative flex items-center">
        {/* Background decorations */}
        <div className="absolute right-0 top-[60px] w-[846px] h-[740px] bg-gradient-to-br from-[#D5D8FF] to-[#FBFBFF]"></div>
        <div className="absolute right-0 top-[60px] w-[464px] h-[318px] bg-gradient-to-br from-[#DFCEFF] to-transparent"></div>

        <div className="px-20 z-[2]">
          {/* Main title */}
          <h1 className="text-5xl font-bold leading-[150%] bg-gradient-to-r from-[#4537C9] to-[#ED8EE9] bg-clip-text text-transparent font-inter mb-5 w-[397px]">
            <span className="font-inter">AI </span>
            <span className="font-pingfang">
              驱动、博士品控
              <br />
              全球升学
            </span>
            <span className="font-inter"> VIP </span>
            <span className="font-pingfang">服务</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-black font-pingfang mb-5 w-[277px]">独家 AI 系统 + 顶尖科研资源库</p>

          {/* User stats and rating */}
          <div className="flex items-center gap-5 mb-7">
            <div className="flex items-center gap-0.5">
              {/* User avatars */}
              <div className="w-7 h-7 rounded-full bg-[#B190B6] border border-white -ml-1"></div>
              <div className="w-7 h-7 rounded-full bg-[#B190B6] border border-white -ml-1"></div>
              <div className="w-7 h-7 rounded-full bg-[#B190B6] border border-white -ml-1"></div>
              <span className="text-xs text-[#868E96] font-pingfang ml-2">1,000+ Users</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="20" height="20" viewBox="0 0 20 21" fill="none">
                    <path
                      d="M6.66667 5.93099L10 2.59766L13.3333 6.34766L17.5 8.01432L15 12.181V16.7643L10 15.5143L5 16.7643V12.181L2.5 8.01432L6.66667 5.93099Z"
                      fill="#FFE663"
                    />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-black font-pingfang">5.0</span>
            </div>
          </div>

          {/* Contact button */}
          <button className="flex w-[200px] h-14 px-9 py-[15px] justify-center items-center rounded-[64px] border border-[#23169B] bg-[#4537C9] text-white text-xl font-pingfang cursor-pointer mb-5">
            联系我们
          </button>

          {/* Founder message link */}
          <div className="flex items-center gap-0.5 cursor-pointer">
            <div className="w-7 h-7 bg-[#ED3A79] rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M7 0.960938C3.38945 0.960938 0.460938 3.88945 0.460938 7.5C0.460938 11.1105 3.38945 14.0391 7 14.0391C10.6105 14.0391 13.5391 11.1105 13.5391 7.5C13.5391 3.88945 10.6105 0.960938 7 0.960938Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="text-xl text-black font-pingfang">创始人致用户的一封信 ›</span>
          </div>
        </div>

        {/* Hero image */}
        <div
          className="absolute right-20 top-36 w-[431px] h-[656px] bg-gray-100 rounded-[20px] bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/hero-founder.jpg")' }}></div>

        {/* Founder caption */}
        <div className="absolute right-20 bottom-20 text-white text-sm font-pingfang">
          Apply7 创始人
          <br />
          麻省理工学院 潘鹏凯博士
        </div>
      </div>

      {/* Stats section */}
      <div className="w-[1440px] h-[200px] bg-[#4537C9] flex items-center justify-center">
        <div className="flex items-center gap-[100px] w-[1249px]">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-1 min-w-[170px]">
              <div className="text-white text-center font-inter text-5xl font-bold leading-[150%]">{stat.number}</div>
              <div className="text-white text-center font-pingfang text-lg leading-[150%]">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Company introduction section */}
      <div className="w-[1440px] py-20 px-[165px] bg-white">
        <div className="flex gap-15 items-center">
          <div className="flex-1">
            <h2 className="text-black font-inter text-4xl font-semibold mb-7">
              <span className="font-inter">Apply7：</span>
              <span className="font-pingfang">名校直通车</span>
            </h2>
            <p className="text-[#3A4157] font-pingfang text-base leading-[150%] mb-10">
              Apply7 由权威教育专家与 MIT 团队联合打造，依托智能系统，助力学生斩获全球顶尖名校录取。Apply7
              全球升学平台覆盖美、英、欧洲、加、澳、港、新等全球6000+
              顶级院校，无论你向往何方，我们都能为你提供精准、专业的升学指导和资源对接，助你稳步踏入理想的顶尖学府。
            </p>
            <div className="flex items-center gap-[22px]">
              {/* Partner logos */}
              <div className="w-[115px] h-8 bg-gray-100"></div>
              <div className="w-[97px] h-[26px] bg-gray-100"></div>
              <div className="w-[88px] h-[50px] bg-gray-100"></div>
              <div className="w-8 h-[33px] bg-gray-100"></div>
              <div className="w-[33px] h-[33px] bg-gray-100"></div>
            </div>
          </div>
          <div className="w-[578px] h-[334px] relative">
            <div className="w-[578px] h-[334px] bg-gray-100 rounded-xl"></div>
            <div className="absolute bottom-0 left-0 w-[578px] h-[34px] bg-gradient-to-r from-[#3244B5] to-[rgba(203,210,255,0.65)] rounded-b-lg flex items-center pl-7">
              <span className="text-white font-pingfang text-sm">
                三位创始人：潘旦丹女士（Cornell），潘鹏凯博士（MIT），尼葛洛庞帝教授（MIT）
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Products and Services Section */}
      <div className="w-[1440px] py-20 bg-white">
        <h2 className="text-black text-center font-pingfang text-4xl font-semibold mb-15">产品和服务</h2>

        {/* Service tabs */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex h-15 py-2.5 px-5 items-center gap-8 rounded-[45px] bg-white shadow-[0px_5px_27px_0px_rgba(0,0,0,0.10)]">
            <button
              onClick={() => setActiveTab('ai-report')}
              className={`flex w-40 h-10 px-6 py-2 justify-center items-center rounded-[20px] border-none cursor-pointer ${
                activeTab === 'ai-report' ? 'bg-[#EDF0FE]' : 'bg-transparent'
              }`}>
              <span
                className={`font-inter text-base ${
                  activeTab === 'ai-report' ? 'text-[#4537C9] font-semibold' : 'text-black font-normal'
                }`}>
                <span className="font-inter">AI</span>
                <span className="font-pingfang"> 规划报告</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('background')}
              className={`flex w-40 h-10 px-6 py-2 justify-center items-center rounded-[20px] border-none cursor-pointer ${
                activeTab === 'background' ? 'bg-[#EDF0FE]' : 'bg-transparent'
              }`}>
              <span
                className={`font-pingfang text-base ${
                  activeTab === 'background' ? 'text-[#4537C9] font-semibold' : 'text-black font-normal'
                }`}>
                背景提升服务
              </span>
            </button>
            <button
              onClick={() => setActiveTab('coaching')}
              className={`flex w-40 h-10 px-6 py-2 justify-center items-center rounded-[20px] border-none cursor-pointer ${
                activeTab === 'coaching' ? 'bg-[#EDF0FE]' : 'bg-transparent'
              }`}>
              <span
                className={`font-pingfang text-base ${
                  activeTab === 'coaching' ? 'text-[#4537C9] font-semibold' : 'text-black font-normal'
                }`}>
                教练式升学服务
              </span>
            </button>
          </div>
        </div>

        {/* Tab content - AI Planning Report */}
        {activeTab === 'ai-report' && (
          <div className="px-[170px]">
            <div className="inline-flex py-1 px-4 rounded-[15px] bg-[#EEF0FF] mb-7">
              <span className="text-[#4537C9] font-inter text-sm font-medium">
                <span className="font-inter">Apply7</span>
                <span className="font-pingfang"> 明星产品</span>
              </span>
            </div>

            <div className="flex gap-[70px] items-start">
              <div className="flex-1">
                <h3 className="text-black font-inter text-[32px] font-semibold mb-5">
                  <span className="font-inter">AI</span>
                  <span className="font-pingfang"> 升学规划报告</span>
                </h3>

                <p className="text-[#3A4157] font-pingfang text-xl leading-[160%] mb-7">
                  基于AI Agent
                  和大数据分析，覆盖从高中规划到大学专业选择与职业发展计划，打造科学权威、有数据支撑的全球升学方案。
                </p>

                <div className="flex gap-7 mb-7">
                  <div className="flex-1">
                    <div className="flex flex-col gap-1">
                      {['推荐学校清单', '专业方向推荐', '发展规划', '录取要求分析', '针对性申请策略及成功案例'].map(
                        (item, index) => (
                          <div key={index} className="flex items-center gap-5">
                            <div className="w-5 h-5 bg-[#3FDBB1] rounded-full"></div>
                            <span className="text-[#323232] font-bold text-lg leading-[190%]">{item}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="w-[259px]">
                    <div className="flex flex-col gap-1">
                      {['适用（7-12年级）', '希望明确申请目标和计划', '1v1 专家分析讲解', '制定专属个人的未来规划'].map(
                        (item, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div className="w-2 h-2 bg-[#4537C9] rounded-full"></div>
                            <span className="text-[#3A4157] font-bold text-lg leading-[188%]">{item}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-5">
                  <button className="flex w-[200px] h-14 px-15 py-[15px] justify-center items-center rounded-[64px] border border-[#23169B] bg-[#4537C9] text-white text-xl font-pingfang font-medium cursor-pointer">
                    了解更多
                  </button>
                  <button className="flex w-60 h-14 px-15 py-[15px] justify-center items-center rounded-[64px] border border-[#E2E3EB] bg-white text-black text-xl font-pingfang font-medium cursor-pointer">
                    查看样例报告
                  </button>
                </div>
              </div>

              <div className="relative">
                <div
                  className="w-[325px] h-[461px] bg-gray-100 rounded-lg shadow-[0px_1.475px_3.689px_0px_rgba(23,49,133,0.20)] bg-cover bg-center"
                  style={{ backgroundImage: 'url("/images/ai-report-preview1.jpg")' }}></div>
                <div
                  className="absolute top-0 left-[71px] w-[327px] h-[461px] bg-gray-100 rounded-lg shadow-[0px_1.475px_3.689px_0px_rgba(23,49,133,0.20)] bg-cover bg-center"
                  style={{ backgroundImage: 'url("/images/ai-report-preview2.jpg")' }}></div>
              </div>
            </div>

            {/* AI Planning Report Delivery Process */}
            <div className="w-[1100px] mx-auto mt-20 p-6 rounded-3xl bg-[#F7F8FF]">
              <h3 className="text-[#3E3E3E] text-center font-inter text-2xl font-semibold mb-10">
                <span className="font-inter">AI </span>
                <span className="font-pingfang">升学规划报告交付流程</span>
              </h3>

              <div className="flex justify-between items-center relative">
                {deliverySteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center gap-4 relative">
                    {/* Step circle */}
                    <div className="w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>

                    {/* Step title */}
                    <div className="text-[#323232] font-inter text-[19px] font-semibold text-center">
                      <span className="font-inter">{step.number}.</span>
                      <span className="font-pingfang">{step.title}</span>
                    </div>

                    {/* Arrow between steps */}
                    {index < deliverySteps.length - 1 && (
                      <div className="absolute -right-10 top-[35px] w-[13px] h-[13px] bg-[#93A3FF] rounded-full flex items-center justify-center">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M2 1L6 4L2 7" stroke="white" strokeWidth="1.5" fill="none" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Customer testimonials */}
        <div className="px-[170px]">
          <h3 className="text-black font-pingfang text-[32px] font-semibold mb-5">我们的学生怎么说</h3>

          <p className="text-[#3A4157] font-pingfang text-xl leading-[160%] mb-10">
            来自平和双语、上海世外、常熟UWC、上海包玉刚、深圳���文等100+国际学校家长的选择
          </p>

          <div className="flex gap-5 items-center">
            <div className="w-[560px] p-5 rounded-xl bg-[#F7F8FF]">
              <div className="text-6xl text-[#4537C9] font-poller leading-[60px] mb-5">"</div>
              <p className="text-[#3A4157] font-pingfang text-base leading-[160%] mb-5">
                Apply7的规划报告整体感觉推荐的方向不错，整体框架也很不错。对国内的家长来说，知道了本土成功案例，尤其是平和的案例，觉得对标性很强，值得借鉴！
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-gray-100 bg-cover bg-center"
                  style={{ backgroundImage: 'url("/images/testimonial-avatar1.jpg")' }}></div>
                <div>
                  <div className="text-[#2C2C2C] font-pingfang text-base font-semibold">Z同学家长 平和双语</div>
                  <div className="text-[#535353] font-pingfang text-xs">化学、数据科学方向</div>
                </div>
              </div>
            </div>

            <div className="w-[560px] p-5 rounded-xl bg-[#F7F8FF]">
              <div className="text-6xl text-[#4537C9] font-poller leading-[60px] mb-5">"</div>
              <p className="text-[#3A4157] font-pingfang text-base leading-[160%] mb-5">
                老师们给的规划建议非常个性、有针对性，能感觉到真的是根据我们的情况量身打造的。拿到报告仔细阅读之后，对整个未来的申请攻坚战瞬间更有信心、不焦虑了！
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-gray-100 bg-cover bg-center"
                  style={{ backgroundImage: 'url("/images/testimonial-avatar2.jpg")' }}></div>
                <div>
                  <div className="text-[#2C2C2C] font-pingfang text-base font-semibold">Lydia 同学家长 深圳爱文</div>
                  <div className="text-[#535353] font-pingfang text-xs">音乐科技、人机交互方向</div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex flex-col gap-3">
              <button className="w-[50px] h-[50px] rounded-lg bg-[#F7F8FF] border-none cursor-pointer flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M10.6497 1.33366L11.833 2.51699L6.34967 8.00033L11.833 13.4837L10.6497 14.667L3.98301 8.00033L10.6497 1.33366Z"
                    fill="black"
                  />
                </svg>
              </button>
              <button className="w-[50px] h-[50px] rounded-lg bg-[#F7F8FF] border-none cursor-pointer flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M5.35033 14.6663L4.16699 13.483L9.65033 7.99967L4.16699 2.51634L5.35033 1.33301L12.017 7.99967L5.35033 14.6663Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Enhancement Services - Master Courses */}
      {activeTab === 'background' && (
        <div className="py-20 px-[170px]">
          <h3 className="text-black text-center font-pingfang text-[32px] font-semibold mb-5">
            背景提升服务 - 大师课程
          </h3>

          <p className="text-[#3A4157] text-center font-pingfang text-xl font-semibold mb-15">
            Apply7 联合全球顶尖导师推出大师系列课程，涵盖
            STEM、商科、艺术人文等领域，帮助学生提升学术能力和背景竞争力。以下为部分精选课程：
          </p>

          <div className="flex gap-10 justify-center mb-10">
            {courses.map((course, index) => (
              <div key={index} className="w-[340px] rounded-[20px] border border-[#D1D5E4] bg-white overflow-hidden">
                <div
                  className="w-[340px] h-[200px] bg-gray-100 bg-cover bg-center"
                  style={{ backgroundImage: `url("${course.image}")` }}></div>
                <div className="p-6">
                  <h4 className="text-black font-pingfang text-lg font-semibold mb-2">{course.title}</h4>
                  <p className="text-black font-pingfang text-sm font-semibold mb-2">
                    授课导师： <span className="text-[#164CAA]">{course.instructor}</span>
                  </p>
                  <p className="text-black font-pingfang text-sm font-medium mb-4">开课时间：{course.schedule}</p>
                  <p className="text-black font-pingfang text-sm leading-[150%] mb-5 whitespace-pre-line">
                    {course.description}
                  </p>
                  <button className="w-full h-10 rounded-[20px] bg-[#EDF0FE] border-none text-[#4537C9] font-pingfang text-base font-medium cursor-pointer">
                    了解详情
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="w-[200px] h-14 rounded-[64px] border border-[#E2E3EB] bg-white text-black text-xl font-pingfang font-medium cursor-pointer">
              了解更多
            </button>
          </div>
        </div>
      )}

      {/* Coaching Services */}
      {activeTab === 'coaching' && (
        <div className="py-20 px-[170px]">
          <h3 className="text-black text-center font-pingfang text-[32px] font-semibold mb-5">教练式升学服务</h3>

          <p className="text-[#3A4157] text-center font-pingfang text-xl leading-[160%] mb-20">
            我们提供 1 对 1
            教练式升学指导，覆盖从早期规划、申请季到录取后的全阶段服务。资深升学教练全程陪伴，以教练身份激发学生潜力，定制专属申请策略。
          </p>

          <div className="flex gap-15">
            <div
              className="w-[371px] h-[401px] rounded-[44px] bg-[#F9F9FA] relative bg-cover bg-center"
              style={{ backgroundImage: 'url("/images/coaching-illustration.jpg")' }}>
              <div className="absolute top-[330px] right-[315px] w-[17px] h-6 bg-[#4F4F4F]"></div>
              <div className="absolute top-[300px] right-[300px] w-[17px] h-6 bg-[#4F4F4F]"></div>
              <div className="absolute top-[391px] right-[35px] w-[17px] h-6 bg-[#4F4F4F]"></div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-5">
                {coachingServices.map((service, index) => (
                  <div key={index} className="flex w-[624px] p-4 rounded-2xl bg-[#F7F8FF]">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4 text-xl">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-black font-pingfang text-lg mb-2">{service.title}</h4>
                      <p className="text-[#3A4157] font-pingfang text-base leading-[155%]">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <button className="w-[200px] h-14 rounded-[64px] border border-[#E2E3EB] bg-white text-black text-xl font-pingfang font-medium cursor-pointer">
                  了解更多
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Our Unique Advantages */}
      <div className="w-[1440px] py-20 px-[110px] bg-[#F7F8FF]">
        <h2 className="text-black font-pingfang text-4xl font-semibold mb-10">我们的独特优势</h2>

        <p className="text-[#3A4157] font-pingfang text-xl leading-[150%] mb-20 w-[380px]">
          在Apply7，我们深知升学不仅关乎申请结果，更是一次系统的自我探索与未来规划。我们依托先进的AI技术与全球顶尖专家资源，为学生提供个性化、全程化的升学解决方案，以精准的数据洞察和专业教练式指导，助力学生在激烈的竞争中脱颖而出，迈向理想的世界名校。
        </p>

        <div className="grid grid-cols-2 gap-x-[390px] gap-y-15 max-w-[1200px]">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 text-xl shadow-[0px_10.6667px_16px_rgba(53,96,158,0.1)]">
                {advantage.icon}
              </div>
              <h3 className="text-[#2C2E4B] font-inter text-xl font-semibold mb-3 w-[300px]">{advantage.title}</h3>
              <p className="text-[#3A4157] font-pingfang text-sm leading-[150%] w-[320px]">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <button className="w-[200px] h-14 rounded-[64px] border border-[#E2E3EB] bg-white text-black text-xl font-pingfang font-medium cursor-pointer">
            联系我们
          </button>
        </div>
      </div>

      {/* Our Admissions */}
      <div className="w-[1440px] py-20 px-[167px] bg-white">
        <h2 className="text-[#2C2E4B] text-center font-pingfang text-4xl font-semibold mb-5">我们的录取</h2>

        <p className="text-[#3A4157] text-center font-pingfang text-xl leading-[150%] mb-15">
          精准规划+"教练式"带学，成功拿下全球TOP级名校录取
        </p>

        <div className="grid grid-cols-4 gap-6 mb-10">
          {universities.slice(0, 20).map((university, index) => (
            <div key={index} className="flex w-64 p-3 items-center gap-2 rounded-2xl bg-[#F9F9FA]">
              <div className="w-[70px] h-[70px] rounded border border-[#F2F3F9] bg-white shadow-[0px_0.5px_1.5px_rgba(25,33,61,0.10)] flex items-center justify-center">
                <div
                  className="w-14 h-14 bg-gray-100 rounded bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url("${university.logo}")` }}></div>
              </div>
              <div>
                <div className="text-black font-pingfang text-base font-semibold mb-1">{university.name}</div>
                <div className="text-black font-pingfang text-base font-medium">Offer数量：{university.offers}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining universities in a smaller row */}
        <div className="flex gap-6 justify-center">
          {universities.slice(20).map((university, index) => (
            <div key={index} className="flex w-64 p-3 items-center gap-2 rounded-2xl bg-[#F9F9FA]">
              <div className="w-[70px] h-[70px] rounded border border-[#F2F3F9] bg-white shadow-[0px_0.5px_1.5px_rgba(25,33,61,0.10)] flex items-center justify-center">
                <div
                  className="w-14 h-14 bg-gray-100 rounded bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url("${university.logo}")` }}></div>
              </div>
              <div>
                <div className="text-black font-pingfang text-base font-semibold mb-1">{university.name}</div>
                <div className="text-black font-pingfang text-base font-medium">Offer数量：{university.offers}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="w-[1440px] h-[298px] bg-[#F2F3F9] flex items-center justify-between px-[108px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#4537C9] rounded-full flex items-center justify-center text-white text-sm font-bold font-inter">
            A7
          </div>
          <span className="font-inter text-xl font-bold text-[#3E3E7B]">Apply7</span>
        </div>

        {/* Follow us section */}
        <div>
          <h3 className="text-[#3E3E7C] font-pingfang text-xl font-semibold mb-5 text-center">关注我们</h3>

          <div className="flex gap-6">
            {/* Social media QR codes */}
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-[120px] h-[120px] bg-gray-100 rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: 'url("/images/xiaohongshu-qr.jpg")' }}></div>
              <span className="text-[#3E3E7C] font-pingfang text-sm font-medium">小红书</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div
                className="w-[120px] h-[120px] bg-gray-100 rounded-xl bg-cover bg-center"
                style={{ backgroundImage: 'url("/images/wechat-qr.jpg")' }}></div>
              <span className="text-[#3E3E7C] font-pingfang text-sm font-medium">微信公众号</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-[120px] h-[120px] bg-white rounded-xl p-3 flex items-center justify-center">
                <div
                  className="w-24 h-24 bg-gray-100 bg-cover bg-center"
                  style={{ backgroundImage: 'url("/images/video-account-qr.jpg")' }}></div>
              </div>
              <span className="text-[#3E3E7C] font-pingfang text-sm font-medium">MIT潘博士视频号</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPage;
