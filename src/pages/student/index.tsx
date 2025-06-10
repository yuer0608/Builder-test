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
        '对接全球教育与实践资源，构建从学习到实习再到申请的闭环成长系统。不仅是申请成功，更是未��发展的坚实基石。'
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
      icon: '���',
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
    <div style={{ width: '1440px', margin: '0 auto', backgroundColor: '#FFFFFF' }}>
      {/* Navigation */}
      <nav
        style={{
          width: '1440px',
          height: '60px',
          backgroundColor: 'rgba(250, 250, 252, 0.8)',
          backdropFilter: 'blur(8px)',
          position: 'relative',
          zIndex: 100
        }}>
        <div
          style={{
            maxWidth: '1440px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 108px'
          }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#4537C9',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
                fontSize: '14px',
                fontWeight: '700'
              }}>
              A7
            </div>
            <span
              style={{
                fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
                fontSize: '20px',
                fontWeight: '700',
                color: '#3E3E7B'
              }}>
              Apply7
            </span>
          </div>

          {/* Menu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
            <div
              style={{
                color: '#4537C9',
                fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
              学生/家长
            </div>
            <div
              style={{
                color: '#000000',
                fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
              学校/机构
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                color: '#000000',
                fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
              关于我们
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.9987 12.4997L5.83203 8.33301H14.1654L9.9987 12.4997Z" fill="black" />
              </svg>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                color: '#000000',
                fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
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
      <div
        style={{
          width: '1440px',
          height: '800px',
          background: 'linear-gradient(270deg, #FFF 0%, #F6F6FF 100%)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}>
        {/* Background decorations */}
        <div
          style={{
            position: 'absolute',
            right: '0',
            top: '60px',
            width: '846px',
            height: '740px',
            background: 'linear-gradient(261deg, #D5D8FF -12.77%, #FBFBFF 92.72%)'
          }}></div>
        <div
          style={{
            position: 'absolute',
            right: '0',
            top: '60px',
            width: '464px',
            height: '318px',
            background: 'linear-gradient(313deg, #DFCEFF 0%, rgba(233, 236, 255, 0.00) 75.87%)'
          }}></div>

        <div style={{ padding: '0 80px', zIndex: 2 }}>
          {/* Main title */}
          <h1
            style={{
              fontSize: '48px',
              fontWeight: '700',
              lineHeight: '150%',
              background: 'linear-gradient(270deg, #4537C9 0%, #ED8EE9 150.63%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Inter, PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
              marginBottom: '20px',
              width: '397px'
            }}>
            <span style={{ fontFamily: 'Inter' }}>AI </span>
            <span style={{ fontFamily: 'PingFang SC' }}>
              驱动、博士品控
              <br />
              全球升学
            </span>
            <span style={{ fontFamily: 'Inter' }}> VIP </span>
            <span style={{ fontFamily: 'PingFang SC' }}>服务</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '20px',
              color: '#000000',
              fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
              marginBottom: '20px',
              width: '277px'
            }}>
            独家 AI 系统 + 顶尖科研资源库
          </p>

          {/* User stats and rating */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '30px'
            }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              {/* User avatars */}
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: '#B190B6',
                  border: '1px solid #FFF',
                  marginLeft: '-5px'
                }}></div>
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: '#B190B6',
                  border: '1px solid #FFF',
                  marginLeft: '-5px'
                }}></div>
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: '#B190B6',
                  border: '1px solid #FFF',
                  marginLeft: '-5px'
                }}></div>
              <span
                style={{
                  fontSize: '12px',
                  color: '#868E96',
                  fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                  marginLeft: '8px'
                }}>
                1,000+ Users
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="20" height="20" viewBox="0 0 20 21" fill="none">
                    <path
                      d="M6.66667 5.93099L10 2.59766L13.3333 6.34766L17.5 8.01432L15 12.181V16.7643L10 15.5143L5 16.7643V12.181L2.5 8.01432L6.66667 5.93099Z"
                      fill="#FFE663"
                    />
                  </svg>
                ))}
              </div>
              <span
                style={{
                  fontSize: '14px',
                  color: '#000000',
                  fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif'
                }}>
                5.0
              </span>
            </div>
          </div>

          {/* Contact button */}
          <button
            style={{
              display: 'flex',
              width: '200px',
              height: '56px',
              padding: '15px 36px',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '64px',
              border: '1px solid #23169B',
              backgroundColor: '#4537C9',
              color: '#FFFFFF',
              fontSize: '20px',
              fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
              cursor: 'pointer',
              marginBottom: '20px'
            }}>
            联系我们
          </button>

          {/* Founder message link */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              cursor: 'pointer'
            }}>
            <div
              style={{
                width: '30px',
                height: '30px',
                backgroundColor: '#ED3A79',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M7 0.960938C3.38945 0.960938 0.460938 3.88945 0.460938 7.5C0.460938 11.1105 3.38945 14.0391 7 14.0391C10.6105 14.0391 13.5391 11.1105 13.5391 7.5C13.5391 3.88945 10.6105 0.960938 7 0.960938Z"
                  fill="white"
                />
              </svg>
            </div>
            <span
              style={{
                fontSize: '20px',
                color: '#000000',
                fontFamily: 'PingFang SC, SF Compact, -apple-system, Roboto, Helvetica, sans-serif'
              }}>
              创始人致用户的一封信 ›
            </span>
          </div>
        </div>

        {/* Hero image */}
        <div
          style={{
            position: 'absolute',
            right: '80px',
            top: '144px',
            width: '431px',
            height: '656px',
            backgroundColor: '#f0f0f0',
            borderRadius: '20px',
            backgroundImage: 'url("/images/hero-founder.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>

        {/* Founder caption */}
        <div
          style={{
            position: 'absolute',
            right: '80px',
            bottom: '80px',
            color: '#FFFFFF',
            fontSize: '14px',
            fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif'
          }}>
          Apply7 创始人
          <br />
          麻省理工学院 潘鹏凯博士
        </div>
      </div>

      {/* Stats section */}
      <div
        style={{
          width: '1440px',
          height: '200px',
          backgroundColor: '#4537C9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '100px',
            width: '1249px'
          }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                minWidth: '170px'
              }}>
              <div
                style={{
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '48px',
                  fontWeight: '700',
                  lineHeight: '150%'
                }}>
                {stat.number}
              </div>
              <div
                style={{
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '18px',
                  lineHeight: '150%'
                }}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company introduction section */}
      <div
        style={{
          width: '1440px',
          padding: '80px 165px',
          backgroundColor: '#FFFFFF'
        }}>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <h2
              style={{
                color: '#000000',
                fontFamily: 'Inter, PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                fontSize: '40px',
                fontWeight: '600',
                marginBottom: '30px'
              }}>
              <span style={{ fontFamily: 'Inter' }}>Apply7：</span>
              <span style={{ fontFamily: 'PingFang SC' }}>名校直通车</span>
            </h2>
            <p
              style={{
                color: '#3A4157',
                fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                fontSize: '16px',
                lineHeight: '150%',
                marginBottom: '40px'
              }}>
              Apply7 由权威教育专家与 MIT 团队联合打造，依托智能系统，助力学生斩获全球顶尖名校录取。Apply7
              全球升学平台覆盖美、英、欧洲、加、澳、港、新等全球6000+
              顶级院校，无论你向往何方，我们都能为你提供精准、专业的升学指导���资源对接，助你稳步踏入理想的顶尖学府。
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
              {/* Partner logos */}
              <div style={{ width: '115px', height: '32px', backgroundColor: '#f0f0f0' }}></div>
              <div style={{ width: '97px', height: '26px', backgroundColor: '#f0f0f0' }}></div>
              <div style={{ width: '88px', height: '50px', backgroundColor: '#f0f0f0' }}></div>
              <div style={{ width: '32px', height: '33px', backgroundColor: '#f0f0f0' }}></div>
              <div style={{ width: '33px', height: '33px', backgroundColor: '#f0f0f0' }}></div>
            </div>
          </div>
          <div style={{ width: '578px', height: '334px', position: 'relative' }}>
            <div
              style={{
                width: '578px',
                height: '334px',
                backgroundColor: '#f0f0f0',
                borderRadius: '12px'
              }}></div>
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '578px',
                height: '34px',
                background: 'linear-gradient(90deg, #3244B5 0%, rgba(203, 210, 255, 0.65) 100%)',
                borderRadius: '0px 0px 7px 8px',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '29px'
              }}>
              <span
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '14px'
                }}>
                三位创始人：潘旦丹女士（Cornell），潘鹏凯博士（MIT），尼葛洛庞帝教授（MIT）
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Products and Services Section */}
      <div
        style={{
          width: '1440px',
          padding: '80px 0',
          backgroundColor: '#FFFFFF'
        }}>
        <h2
          style={{
            color: '#000000',
            textAlign: 'center',
            fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
            fontSize: '40px',
            fontWeight: '600',
            marginBottom: '60px'
          }}>
          产品和服务
        </h2>

        {/* Service tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '80px'
          }}>
          <div
            style={{
              display: 'inline-flex',
              height: '60px',
              padding: '10px 19px',
              alignItems: 'center',
              gap: '31px',
              borderRadius: '45px',
              backgroundColor: '#FFF',
              boxShadow: '0px 5px 27px 0px rgba(0, 0, 0, 0.10)'
            }}>
            <button
              onClick={() => setActiveTab('ai-report')}
              style={{
                display: 'flex',
                width: '160px',
                height: '40px',
                padding: '9px 24px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '20px',
                backgroundColor: activeTab === 'ai-report' ? '#EDF0FE' : 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}>
              <span
                style={{
                  color: activeTab === 'ai-report' ? '#4537C9' : '#000000',
                  fontFamily: 'Inter, PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontWeight: activeTab === 'ai-report' ? '600' : '400'
                }}>
                <span style={{ fontFamily: 'Inter' }}>AI</span>
                <span style={{ fontFamily: 'PingFang SC' }}> 规划报告</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('background')}
              style={{
                display: 'flex',
                width: '160px',
                height: '40px',
                padding: '9px 24px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '20px',
                backgroundColor: activeTab === 'background' ? '#EDF0FE' : 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}>
              <span
                style={{
                  color: activeTab === 'background' ? '#4537C9' : '#000000',
                  fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontWeight: activeTab === 'background' ? '600' : '400'
                }}>
                背景提升服务
              </span>
            </button>
            <button
              onClick={() => setActiveTab('coaching')}
              style={{
                display: 'flex',
                width: '160px',
                height: '40px',
                padding: '9px 24px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '20px',
                backgroundColor: activeTab === 'coaching' ? '#EDF0FE' : 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}>
              <span
                style={{
                  color: activeTab === 'coaching' ? '#4537C9' : '#000000',
                  fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontWeight: activeTab === 'coaching' ? '600' : '400'
                }}>
                教练式升学服务
              </span>
            </button>
          </div>
        </div>

        {/* Tab content - AI Planning Report */}
        {activeTab === 'ai-report' && (
          <div style={{ padding: '0 170px' }}>
            <div
              style={{
                display: 'inline-flex',
                padding: '4px 16px',
                borderRadius: '15px',
                backgroundColor: '#EEF0FF',
                marginBottom: '30px'
              }}>
              <span
                style={{
                  color: '#4537C9',
                  fontFamily: 'Inter, PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                <span style={{ fontFamily: 'Inter' }}>Apply7</span>
                <span style={{ fontFamily: 'PingFang SC' }}> 明星产品</span>
              </span>
            </div>

            <div style={{ display: 'flex', gap: '70px', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    color: '#000000',
                    fontFamily: 'Inter, PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '32px',
                    fontWeight: '600',
                    marginBottom: '20px'
                  }}>
                  <span style={{ fontFamily: 'Inter' }}>AI</span>
                  <span style={{ fontFamily: 'PingFang SC' }}> 升学规划报告</span>
                </h3>

                <p
                  style={{
                    color: '#3A4157',
                    fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '20px',
                    lineHeight: '160%',
                    marginBottom: '30px'
                  }}>
                  基于AI Agent
                  和大数据分析，覆盖从高中规划到大学专业选择与职业发展计划，打造科学权威、有数据支撑的全球升学方案。
                </p>

                <div style={{ display: 'flex', gap: '30px', marginBottom: '30px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {['推荐学校清单', '专业方向推荐', '发展规划', '录取要求分析', '针对性申请策略及成功案例'].map(
                        (item, index) => (
                          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div
                              style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: '#3FDBB1',
                                borderRadius: '50%'
                              }}></div>
                            <span
                              style={{
                                color: '#323232',
                                fontFamily: 'Alibaba PuHuiTi 3.0, -apple-system, Roboto, Helvetica, sans-serif',
                                fontSize: '18px',
                                fontWeight: '600',
                                lineHeight: '190%'
                              }}>
                              {item}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div style={{ width: '259px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {['适用（7-12年级）', '希望明确申请目标和计划', '1v1 专家分析讲解', '制定专属个人的未来规划'].map(
                        (item, index) => (
                          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '17px' }}>
                            <div
                              style={{
                                width: '8px',
                                height: '8px',
                                backgroundColor: '#4537C9',
                                borderRadius: '50%'
                              }}></div>
                            <span
                              style={{
                                color: '#3A4157',
                                fontFamily: 'Alibaba PuHuiTi 3.0, -apple-system, Roboto, Helvetica, sans-serif',
                                fontSize: '18px',
                                fontWeight: '600',
                                lineHeight: '188%'
                              }}>
                              {item}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <button
                    style={{
                      display: 'flex',
                      width: '200px',
                      height: '56px',
                      padding: '15px 60px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '64px',
                      border: '1px solid #23169B',
                      backgroundColor: '#4537C9',
                      color: '#FFFFFF',
                      fontSize: '20px',
                      fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}>
                    了解更多
                  </button>
                  <button
                    style={{
                      display: 'flex',
                      width: '240px',
                      height: '56px',
                      padding: '15px 60px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '64px',
                      border: '1px solid #E2E3EB',
                      backgroundColor: '#FFFFFF',
                      color: '#000000',
                      fontSize: '20px',
                      fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}>
                    查看样例报告
                  </button>
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    width: '325px',
                    height: '461px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '8px',
                    boxShadow: '0px 1.475px 3.689px 0px rgba(23, 49, 133, 0.20)',
                    backgroundImage: 'url("/images/ai-report-preview1.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '71px',
                    width: '327px',
                    height: '461px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '8px',
                    boxShadow: '0px 1.475px 3.689px 0px rgba(23, 49, 133, 0.20)',
                    backgroundImage: 'url("/images/ai-report-preview2.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
              </div>
            </div>

            {/* AI Planning Report Delivery Process */}
            <div
              style={{
                width: '1100px',
                margin: '80px auto',
                padding: '24px',
                borderRadius: '24px',
                backgroundColor: '#F7F8FF'
              }}>
              <h3
                style={{
                  color: '#3E3E3E',
                  textAlign: 'center',
                  fontFamily: 'Inter, PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '24px',
                  fontWeight: '600',
                  marginBottom: '40px'
                }}>
                <span style={{ fontFamily: 'Inter' }}>AI </span>
                <span style={{ fontFamily: 'PingFang SC' }}>升学规划报告交付流程</span>
              </h3>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  position: 'relative'
                }}>
                {deliverySteps.map((step, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '16px',
                      position: 'relative'
                    }}>
                    {/* Step circle */}
                    <div
                      style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px'
                      }}>
                      {step.icon}
                    </div>

                    {/* Step title */}
                    <div
                      style={{
                        color: '#323232',
                        fontFamily: 'Inter, PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                        fontSize: '19px',
                        fontWeight: '600',
                        textAlign: 'center'
                      }}>
                      <span style={{ fontFamily: 'Inter' }}>{step.number}.</span>
                      <span style={{ fontFamily: 'PingFang SC' }}>{step.title}</span>
                    </div>

                    {/* Arrow between steps */}
                    {index < deliverySteps.length - 1 && (
                      <div
                        style={{
                          position: 'absolute',
                          right: '-40px',
                          top: '35px',
                          width: '13px',
                          height: '13px',
                          backgroundColor: '#93A3FF',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
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
        <div style={{ padding: '0 170px' }}>
          <h3
            style={{
              color: '#000000',
              fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '32px',
              fontWeight: '600',
              marginBottom: '20px'
            }}>
            我们的学生怎么说
          </h3>

          <p
            style={{
              color: '#3A4157',
              fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '20px',
              lineHeight: '160%',
              marginBottom: '40px'
            }}>
            来自平和双语、上海世外、常熟UWC、上海包玉刚、深圳爱文等100+国际学校家长的选择
          </p>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div
              style={{
                width: '560px',
                padding: '24px 20px',
                borderRadius: '12px',
                backgroundColor: '#F7F8FF'
              }}>
              <div
                style={{
                  fontSize: '60px',
                  color: '#4537C9',
                  fontFamily: 'Poller One, -apple-system, Roboto, Helvetica, sans-serif',
                  lineHeight: '60px',
                  marginBottom: '20px'
                }}>
                "
              </div>
              <p
                style={{
                  color: '#3A4157',
                  fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '16px',
                  lineHeight: '160%',
                  marginBottom: '20px'
                }}>
                Apply7的规划报告整体感觉推荐的方向不错，整体框架也很不错。对国内的家长来说，知道了本土成功案例，尤其是平和的案例，觉得对标性很强，值得借鉴！
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#f0f0f0',
                    backgroundImage: 'url("/images/testimonial-avatar1.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                <div>
                  <div
                    style={{
                      color: '#2C2C2C',
                      fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                      fontSize: '16px',
                      fontWeight: '600'
                    }}>
                    Z同学家长 平和双语
                  </div>
                  <div
                    style={{
                      color: '#535353',
                      fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                      fontSize: '12px'
                    }}>
                    化学、数据科学方向
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                width: '560px',
                padding: '24px 20px',
                borderRadius: '12px',
                backgroundColor: '#F7F8FF'
              }}>
              <div
                style={{
                  fontSize: '60px',
                  color: '#4537C9',
                  fontFamily: 'Poller One, -apple-system, Roboto, Helvetica, sans-serif',
                  lineHeight: '60px',
                  marginBottom: '20px'
                }}>
                "
              </div>
              <p
                style={{
                  color: '#3A4157',
                  fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '16px',
                  lineHeight: '160%',
                  marginBottom: '20px'
                }}>
                老师们给的规划建议非常个性、有针对性，能感觉到真的是根据我们的情况量身打造的。拿到报告仔细阅读之后，对整个未来的申请攻坚战瞬间更有信心、不焦虑了！
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#f0f0f0',
                    backgroundImage: 'url("/images/testimonial-avatar2.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                <div>
                  <div
                    style={{
                      color: '#2C2C2C',
                      fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                      fontSize: '16px',
                      fontWeight: '600'
                    }}>
                    Lydia 同学家长 深圳爱文
                  </div>
                  <div
                    style={{
                      color: '#535353',
                      fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                      fontSize: '12px'
                    }}>
                    音乐科技、人机交互方向
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '7px',
                  backgroundColor: '#F7F8FF',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M10.6497 1.33366L11.833 2.51699L6.34967 8.00033L11.833 13.4837L10.6497 14.667L3.98301 8.00033L10.6497 1.33366Z"
                    fill="black"
                  />
                </svg>
              </button>
              <button
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '7px',
                  backgroundColor: '#F7F8FF',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
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
        <div style={{ padding: '80px 170px' }}>
          <h3
            style={{
              color: '#000000',
              textAlign: 'center',
              fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '32px',
              fontWeight: '600',
              marginBottom: '20px'
            }}>
            背景提升服务 - 大师课程
          </h3>

          <p
            style={{
              color: '#3A4157',
              textAlign: 'center',
              fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '60px'
            }}>
            Apply7 联合全球顶尖导师推出大师系列课程，涵盖
            STEM、商科、艺术人文等领域，帮助学生提升学术能力和背景竞争力。以下为部分精选课程：
          </p>

          <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', marginBottom: '40px' }}>
            {courses.map((course, index) => (
              <div
                key={index}
                style={{
                  width: '340px',
                  borderRadius: '20px',
                  border: '0.8px solid #D1D5E4',
                  backgroundColor: '#FFFFFF',
                  overflow: 'hidden'
                }}>
                <div
                  style={{
                    width: '340px',
                    height: '200px',
                    backgroundColor: '#f0f0f0',
                    backgroundImage: `url("${course.image}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                <div style={{ padding: '24px 15px' }}>
                  <h4
                    style={{
                      color: '#000000',
                      fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                      fontSize: '18px',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                    {course.title}
                  </h4>
                  <p
                    style={{
                      color: '#000000',
                      fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                      fontSize: '14px',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                    授课导师： <span style={{ color: '#164CAA' }}>{course.instructor}</span>
                  </p>
                  <p
                    style={{
                      color: '#000000',
                      fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                      fontSize: '14px',
                      fontWeight: '500',
                      marginBottom: '16px'
                    }}>
                    开课时间：{course.schedule}
                  </p>
                  <p
                    style={{
                      color: '#000000',
                      fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                      fontSize: '14px',
                      lineHeight: '150%',
                      marginBottom: '20px',
                      whiteSpace: 'pre-line'
                    }}>
                    {course.description}
                  </p>
                  <button
                    style={{
                      width: '100%',
                      height: '40px',
                      borderRadius: '20px',
                      backgroundColor: '#EDF0FE',
                      border: 'none',
                      color: '#4537C9',
                      fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                      fontSize: '16px',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}>
                    了解详情
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              style={{
                width: '200px',
                height: '56px',
                borderRadius: '64px',
                border: '1px solid #E2E3EB',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                fontSize: '20px',
                fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
              了解更多
            </button>
          </div>
        </div>
      )}

      {/* Coaching Services */}
      {activeTab === 'coaching' && (
        <div style={{ padding: '80px 170px' }}>
          <h3
            style={{
              color: '#000000',
              textAlign: 'center',
              fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '32px',
              fontWeight: '600',
              marginBottom: '20px'
            }}>
            教练式升学服务
          </h3>

          <p
            style={{
              color: '#3A4157',
              textAlign: 'center',
              fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '20px',
              lineHeight: '160%',
              marginBottom: '80px'
            }}>
            我们提供 1 对 1
            教练式升学指导，覆盖从早期规划、申请季到录取后的全阶段服务。资深升学教练全程陪伴，以教练身份激发学生潜力，定制专属申请策略。
          </p>

          <div style={{ display: 'flex', gap: '60px' }}>
            <div
              style={{
                width: '371px',
                height: '401px',
                borderRadius: '44px',
                backgroundColor: '#F9F9FA',
                position: 'relative',
                backgroundImage: 'url("/images/coaching-illustration.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
              <div
                style={{
                  position: 'absolute',
                  top: '330px',
                  right: '315px',
                  width: '17px',
                  height: '24px',
                  backgroundColor: '#4F4F4F'
                }}></div>
              <div
                style={{
                  position: 'absolute',
                  top: '300px',
                  right: '300px',
                  width: '17px',
                  height: '24px',
                  backgroundColor: '#4F4F4F'
                }}></div>
              <div
                style={{
                  position: 'absolute',
                  top: '391px',
                  right: '35px',
                  width: '17px',
                  height: '24px',
                  backgroundColor: '#4F4F4F'
                }}></div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {coachingServices.map((service, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      width: '624px',
                      padding: '16px',
                      borderRadius: '16px',
                      backgroundColor: '#F7F8FF'
                    }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '16px',
                        fontSize: '20px'
                      }}>
                      {service.icon}
                    </div>
                    <div>
                      <h4
                        style={{
                          color: '#000000',
                          fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                          fontSize: '18px',
                          marginBottom: '8px'
                        }}>
                        {service.title}
                      </h4>
                      <p
                        style={{
                          color: '#3A4157',
                          fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                          fontSize: '16px',
                          lineHeight: '155%'
                        }}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '40px' }}>
                <button
                  style={{
                    width: '200px',
                    height: '56px',
                    borderRadius: '64px',
                    border: '1px solid #E2E3EB',
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    fontSize: '20px',
                    fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}>
                  了解更多
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Our Unique Advantages */}
      <div
        style={{
          width: '1440px',
          padding: '80px 110px',
          backgroundColor: '#F7F8FF'
        }}>
        <h2
          style={{
            color: '#000000',
            fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
            fontSize: '40px',
            fontWeight: '600',
            marginBottom: '40px'
          }}>
          我们的独特优势
        </h2>

        <p
          style={{
            color: '#3A4157',
            fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
            fontSize: '20px',
            lineHeight: '150%',
            marginBottom: '80px',
            width: '380px'
          }}>
          在Apply7，我们深知升学不仅关乎申请结果，更是一次系统的自我探索与未来规划。我们依托先进的AI技术与全球顶尖专家资源，为学生提供个性化、全程化的升学解决方案，以精准的数据洞察和专业教练式指导，助力学生在激烈的竞争中脱颖而出，迈向理想的世界名校。
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px 390px',
            maxWidth: '1200px'
          }}>
          {advantages.map((advantage, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  fontSize: '20px',
                  boxShadow: '0px 10.6667px 16px rgba(53, 96, 158, 0.1)'
                }}>
                {advantage.icon}
              </div>
              <h3
                style={{
                  color: '#2C2E4B',
                  fontFamily: 'Inter, PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  width: '300px'
                }}>
                {advantage.title}
              </h3>
              <p
                style={{
                  color: '#3A4157',
                  fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '14px',
                  lineHeight: '150%',
                  width: '320px'
                }}>
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '80px' }}>
          <button
            style={{
              width: '200px',
              height: '56px',
              borderRadius: '64px',
              border: '1px solid #E2E3EB',
              backgroundColor: '#FFFFFF',
              color: '#000000',
              fontSize: '20px',
              fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
            联系我们
          </button>
        </div>
      </div>

      {/* Our Admissions */}
      <div
        style={{
          width: '1440px',
          padding: '80px 167px',
          backgroundColor: '#FFFFFF'
        }}>
        <h2
          style={{
            color: '#2C2E4B',
            textAlign: 'center',
            fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
            fontSize: '40px',
            fontWeight: '600',
            marginBottom: '20px'
          }}>
          我们的录取
        </h2>

        <p
          style={{
            color: '#3A4157',
            textAlign: 'center',
            fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
            fontSize: '20px',
            lineHeight: '150%',
            marginBottom: '60px'
          }}>
          精准规划+"教练式"带学，成功拿下全球TOP级名校录取
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '40px' }}>
          {universities.slice(0, 20).map((university, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                width: '256px',
                padding: '12px',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '16px',
                backgroundColor: '#F9F9FA'
              }}>
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '4px',
                  border: '0.5px solid #F2F3F9',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0px 0.5px 1.5px rgba(25, 33, 61, 0.10)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '4px'
                  }}></div>
              </div>
              <div>
                <div
                  style={{
                    color: '#000000',
                    fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '16px',
                    fontWeight: '600',
                    marginBottom: '4px'
                  }}>
                  {university.name}
                </div>
                <div
                  style={{
                    color: '#000000',
                    fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}>
                  Offer数量：{university.offers}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining universities in a smaller row */}
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
          {universities.slice(20).map((university, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                width: '256px',
                padding: '12px',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '16px',
                backgroundColor: '#F9F9FA'
              }}>
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '4px',
                  border: '0.5px solid #F2F3F9',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0px 0.5px 1.5px rgba(25, 33, 61, 0.10)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '4px'
                  }}></div>
              </div>
              <div>
                <div
                  style={{
                    color: '#000000',
                    fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '16px',
                    fontWeight: '600',
                    marginBottom: '4px'
                  }}>
                  {university.name}
                </div>
                <div
                  style={{
                    color: '#000000',
                    fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}>
                  Offer数量：{university.offers}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          width: '1440px',
          height: '298px',
          backgroundColor: '#F2F3F9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 108px'
        }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#4537C9',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '14px',
              fontWeight: '700'
            }}>
            A7
          </div>
          <span
            style={{
              fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '20px',
              fontWeight: '700',
              color: '#3E3E7B'
            }}>
            Apply7
          </span>
        </div>

        {/* Follow us section */}
        <div>
          <h3
            style={{
              color: '#3E3E7C',
              fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
            关注我们
          </h3>

          <div style={{ display: 'flex', gap: '24px' }}>
            {/* Social media QR codes */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
              }}>
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '16px'
                }}></div>
              <span
                style={{
                  color: '#3E3E7C',
                  fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                小红书
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
              }}>
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '12px'
                }}></div>
              <span
                style={{
                  color: '#3E3E7C',
                  fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                微信公众号
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
              }}>
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <div
                  style={{
                    width: '96px',
                    height: '96px',
                    backgroundColor: '#f0f0f0'
                  }}></div>
              </div>
              <span
                style={{
                  color: '#3E3E7C',
                  fontFamily: 'PingFang SC, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                MIT潘博士视频号
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPage;
