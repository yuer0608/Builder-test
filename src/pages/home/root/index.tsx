import React from 'react';
import styled from 'styled-components';

const HomePage = styled.div`
  width: 1440px;
  height: 1098px;
  background: #fff;
  position: relative;
  margin: 0 auto;
`;

const HeroSection = styled.div`
  width: 1440px;
  height: 800px;
  background: linear-gradient(270deg, #fff 0%, #f6f6ff 100%);
  position: relative;
`;

const NavBar = styled.nav`
  width: 1440px;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(250, 250, 252, 0.8);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  z-index: 10;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #3e3e7b;
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #4537c9 0%, #ed8ee9 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 700;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const NavItem = styled.div`
  color: #000;
  font-family:
    'PingFang SC',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: #4537c9;
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: #000;
  font-family:
    'PingFang SC',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

const DropdownIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

const LanguageIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

const HeroContent = styled.div`
  position: absolute;
  left: 80px;
  top: 283px;
  width: 556px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 150%;
  background: linear-gradient(270deg, #4537c9 59.61%, #ed8ee9 103.41%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;

  .mit-text {
    font-family:
      Inter,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-weight: 700;
  }

  .chinese-text {
    font-family:
      'PingFang SC',
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-weight: 600;
  }
`;

const HeroSubtitle = styled.p`
  color: #000;
  font-family:
    'PingFang SC',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

const PrimaryButton = styled.button`
  width: 200px;
  height: 56px;
  padding: 15px 36px;
  background: #4537c9;
  border: 1px solid #23169b;
  border-radius: 12px;
  color: #fff;
  font-family:
    'PingFang SC',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 155%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3d2fb7;
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled.button`
  width: 200px;
  height: 56px;
  padding: 15px 36px;
  background: #fff;
  border: 1px solid #e2e3eb;
  border-radius: 12px;
  color: #000;
  font-family:
    'PingFang SC',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 155%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f8f9fa;
    border-color: #4537c9;
  }
`;

const HeroImageSection = styled.div`
  position: absolute;
  right: 0;
  top: 60px;
  width: 648px;
  height: 740px;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 648px;
  height: 740px;
  background: linear-gradient(313deg, rgba(223, 206, 255, 0.5) 0%, rgba(233, 236, 255, 0) 59.46%);
`;

const HeroImage = styled.img`
  position: absolute;
  left: 96px;
  top: 84px;
  width: 431px;
  height: 656px;
  border-radius: 12px;
  object-fit: cover;
`;

const FounderLabel = styled.div`
  position: absolute;
  right: 167px;
  bottom: 62px;
  color: #fff;
  text-align: right;

  .founder-title {
    font-family:
      Inter,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 160%;
  }

  .founder-subtitle {
    font-family:
      'PingFang SC',
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 160%;
  }

  .founder-description {
    font-family:
      'PingFang SC',
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 160%;
    opacity: 0.9;
    margin-top: 8px;
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 1440px;
  height: 298px;
  background: #f2f3f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 108px;
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .logo-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #4537c9 0%, #ed8ee9 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    font-weight: 700;
  }

  .logo-text {
    font-family:
      Inter,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #3e3e7b;
  }
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const SocialTitle = styled.h3`
  color: #3e3e7c;
  font-family:
    'PingFang SC',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 24px;
`;

const SocialItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const QRCode = styled.div`
  width: 120px;
  height: 120px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &.video-qr {
    padding: 12px;
  }
`;

const SocialLabel = styled.div`
  color: #3e3e7c;
  font-family:
    'PingFang SC',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

const QRPlaceholder = styled.div`
  width: 96px;
  height: 96px;
  background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%),
    linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%),
    linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
  background-size: 8px 8px;
  background-position:
    0 0,
    0 4px,
    4px -4px,
    -4px 0px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 12px;
  text-align: center;
`;

function HomeRoot() {
  return (
    <HomePage>
      <HeroSection>
        <NavBar>
          <Logo>
            <LogoIcon>A7</LogoIcon>
            Apply7
          </Logo>

          <NavMenu>
            <NavItem>学生/家长</NavItem>
            <NavItem>学校/机构</NavItem>
            <NavItem>
              关于我们
              <DropdownIcon viewBox="0 0 20 20" fill="none">
                <path d="M9.9987 12.4997L5.83203 8.33301H14.1654L9.9987 12.4997Z" fill="black" />
              </DropdownIcon>
            </NavItem>
            <LanguageSelector>
              <LanguageIcon viewBox="0 0 20 20" fill="none">
                <path
                  d="M9.99935 18.3346C8.86046 18.3346 7.78407 18.1159 6.77018 17.6784C5.75629 17.2409 4.87088 16.6437 4.11393 15.8867C3.35699 15.1298 2.75977 14.2444 2.32227 13.2305C1.88477 12.2166 1.66602 11.1402 1.66602 10.0013C1.66602 8.84852 1.88477 7.76866 2.32227 6.76172C2.75977 5.75477 3.35699 4.87283 4.11393 4.11589C4.87088 3.35894 5.75629 2.76172 6.77018 2.32422C7.78407 1.88672 8.86046 1.66797 9.99935 1.66797C11.1521 1.66797 12.232 1.88672 13.2389 2.32422C14.2459 2.76172 15.1278 3.35894 15.8848 4.11589C16.6417 4.87283 17.2389 5.75477 17.6764 6.76172C18.1139 7.76866 18.3327 8.84852 18.3327 10.0013C18.3327 11.1402 18.1139 12.2166 17.6764 13.2305C17.2389 14.2444 16.6417 15.1298 15.8848 15.8867C15.1278 16.6437 14.2459 17.2409 13.2389 17.6784C12.232 18.1159 11.1521 18.3346 9.99935 18.3346ZM9.99935 16.6263C10.3605 16.1263 10.673 15.6055 10.9368 15.0638C11.2007 14.5221 11.416 13.9457 11.5827 13.3346H8.41602C8.58268 13.9457 8.79796 14.5221 9.06185 15.0638C9.32574 15.6055 9.63824 16.1263 9.99935 16.6263ZM7.83268 16.293C7.58268 15.8346 7.36393 15.3589 7.17643 14.8659C6.98893 14.3728 6.83268 13.8624 6.70768 13.3346H4.24935C4.65213 14.0291 5.1556 14.6332 5.75977 15.1471C6.36393 15.661 7.0549 16.043 7.83268 16.293ZM12.166 16.293C12.9438 16.043 13.6348 15.661 14.2389 15.1471C14.8431 14.6332 15.3466 14.0291 15.7493 13.3346H13.291C13.166 13.8624 13.0098 14.3728 12.8223 14.8659C12.6348 15.3589 12.416 15.8346 12.166 16.293ZM3.54102 11.668H6.37435C6.33268 11.3902 6.30143 11.1159 6.2806 10.8451C6.25977 10.5742 6.24935 10.293 6.24935 10.0013C6.24935 9.70963 6.25977 9.42838 6.2806 9.15755C6.30143 8.88672 6.33268 8.61241 6.37435 8.33463H3.54102C3.47157 8.61241 3.41949 8.88672 3.38477 9.15755C3.35004 9.42838 3.33268 9.70963 3.33268 10.0013C3.33268 10.293 3.35004 10.5742 3.38477 10.8451C3.41949 11.1159 3.47157 11.3902 3.54102 11.668ZM8.04102 11.668H11.9577C11.9993 11.3902 12.0306 11.1159 12.0514 10.8451C12.0723 10.5742 12.0827 10.293 12.0827 10.0013C12.0827 9.70963 12.0723 9.42838 12.0514 9.15755C12.0306 8.88672 11.9993 8.61241 11.9577 8.33463H8.04102C7.99935 8.61241 7.9681 8.88672 7.94727 9.15755C7.92643 9.42838 7.91602 9.70963 7.91602 10.0013C7.91602 10.293 7.92643 10.5742 7.94727 10.8451C7.9681 11.1159 7.99935 11.3902 8.04102 11.668ZM13.6243 11.668H16.4577C16.5271 11.3902 16.5792 11.1159 16.6139 10.8451C16.6487 10.5742 16.666 10.293 16.666 10.0013C16.666 9.70963 16.6487 9.42838 16.6139 9.15755C16.5792 8.88672 16.5271 8.61241 16.4577 8.33463H13.6243C13.666 8.61241 13.6973 8.88672 13.7181 9.15755C13.7389 9.42838 13.7493 9.70963 13.7493 10.0013C13.7493 10.293 13.7389 10.5742 13.7181 10.8451C13.6973 11.1159 13.666 11.3902 13.6243 11.668ZM13.291 6.66797H15.7493C15.3466 5.97352 14.8431 5.36936 14.2389 4.85547C13.6348 4.34158 12.9438 3.95964 12.166 3.70964C12.416 4.16797 12.6348 4.64366 12.8223 5.13672C13.0098 5.62977 13.166 6.14019 13.291 6.66797ZM8.41602 6.66797H11.5827C11.416 6.05686 11.2007 5.48047 10.9368 4.9388C10.673 4.39714 10.3605 3.8763 9.99935 3.3763C9.63824 3.8763 9.32574 4.39714 9.06185 4.9388C8.79796 5.48047 8.58268 6.05686 8.41602 6.66797ZM4.24935 6.66797H6.70768C6.83268 6.14019 6.98893 5.62977 7.17643 5.13672C7.36393 4.64366 7.58268 4.16797 7.83268 3.70964C7.0549 3.95964 6.36393 4.34158 5.75977 4.85547C5.1556 5.36936 4.65213 5.97352 4.24935 6.66797Z"
                  fill="black"
                />
              </LanguageIcon>
              简体中文
              <DropdownIcon viewBox="0 0 20 20" fill="none">
                <path d="M9.9987 12.4997L5.83203 8.33301H14.1654L9.9987 12.4997Z" fill="black" />
              </DropdownIcon>
            </LanguageSelector>
          </NavMenu>
        </NavBar>

        <HeroContent>
          <HeroTitle>
            <span className="mit-text">MIT 潘博士</span>
            <br />
            <span className="chinese-text">用AI逆转留学信息差</span>
          </HeroTitle>
          <HeroSubtitle>让全世界年轻人都有更美好的未来！</HeroSubtitle>

          <ButtonGroup>
            <PrimaryButton>学生/家长</PrimaryButton>
            <SecondaryButton>学校/机构</SecondaryButton>
          </ButtonGroup>
        </HeroContent>

        <HeroImageSection>
          <BackgroundGradient />
          <HeroImage
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=431&h=656&fit=crop&crop=face"
            alt="MIT Dr. Pan - Apply7 Founder"
          />
          <FounderLabel>
            <div className="founder-title">Apply7 </div>
            <div className="founder-subtitle">创始人</div>
            <div className="founder-title">MIT</div>
            <div className="founder-subtitle"> 潘博士</div>
            <div className="founder-description">
              Apply7 创始人
              <br />
              麻省理工学院 潘鹏凯博士
            </div>
          </FounderLabel>
        </HeroImageSection>
      </HeroSection>

      <Footer>
        <FooterLogo>
          <div className="logo-icon">A7</div>
          <div className="logo-text">Apply7</div>
        </FooterLogo>

        <SocialSection>
          <SocialTitle>关注我们</SocialTitle>
          <SocialIcons>
            <SocialItem>
              <QRCode>
                <QRPlaceholder>
                  小红书
                  <br />
                  二维码
                </QRPlaceholder>
              </QRCode>
              <SocialLabel>小红书</SocialLabel>
            </SocialItem>
            <SocialItem>
              <QRCode>
                <QRPlaceholder>
                  微信公众号
                  <br />
                  二维码
                </QRPlaceholder>
              </QRCode>
              <SocialLabel>微信公众号</SocialLabel>
            </SocialItem>
            <SocialItem>
              <QRCode className="video-qr">
                <QRPlaceholder>
                  MIT潘博士
                  <br />
                  视频号
                </QRPlaceholder>
              </QRCode>
              <SocialLabel>MIT潘博士视频号</SocialLabel>
            </SocialItem>
          </SocialIcons>
        </SocialSection>
      </Footer>
    </HomePage>
  );
}

export default HomeRoot;
