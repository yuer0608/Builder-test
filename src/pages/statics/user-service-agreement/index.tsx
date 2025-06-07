/**
 * @Author: aric 1290657123@qq.com
 * @Date: 2024-11-25 17:21:51
 * @LastEditors: aric 1290657123@qq.com
 * @LastEditTime: 2024-11-25 17:40:47
 */
import styled from 'styled-components';
import locales from './locales';

const Container = styled.div`
  padding: 20px;
  font-size: 16px;
  line-height: 1.5;
  max-width: 1280px;
  margin: 0 auto;

  ul {
    list-style: decimal;
    margin-left: 20px;
  }

  section {
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 400;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: 800;
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
  }
`;

const Page = () => {
  const lang = nx.i18n.language;
  return <Container className="ff-inter" dangerouslySetInnerHTML={{ __html: locales[lang] }} />;
};

export default Page;
