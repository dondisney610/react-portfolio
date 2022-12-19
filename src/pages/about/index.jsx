import Head from "next/head";
import Image from "next/image";
import Contactsection from "../../components/Contactsection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const About = () => {
  return (
    <>
      <Head>
        <title>
          About | 三重県フリーランスエンジニア　大山口吏紅 | Webサイト制作
        </title>
      </Head>
      <Header />
      <h1 className="page-name">ABOUT</h1>
      <div id="aboutpage">
        <div className="introduction-text">
          <p>三重県内でフリーランスとして活動しております。</p>
          <p>
            名古屋大学を卒業後、富士通株式会社でweb開発に携わりながら、副業でweb制作を始めました。
          </p>
          <p>
            その後独立し、ホームページ制作やECサイト構築などの業務を行なっています。
          </p>
        </div>
        <div className="introduction-main">
          <div className="introduction-main-left">
            <Image
              src="/profile.JPG"
              width={288}
              height={288}
              style={{ objectFit: "contain" }}
              alt="顔写真"
            />
          </div>
          <div className="introduction-main-right">
            <table>
              <tbody>
                <tr>
                  <th>名前：</th>
                  <td>大山口 吏紅　Oyamaguchi Riku</td>
                </tr>
                <tr>
                  <th>スキル：</th>
                  <td>
                    HTML, CSS, JavaScript, jQuery, React, Next.js, TypeScript,
                    PHP, Liquid
                  </td>
                </tr>
                <tr>
                  <th>事業内容：</th>
                  <td>
                    コーディング, HPカスタマイズ, WordPressサイト構築,
                    プラグイン導入サポート, ShopifyでのECサイト構築
                  </td>
                </tr>
                <tr>
                  <th>資格：</th>
                  <td>TOEICスコア 830</td>
                </tr>
                <tr>
                  <th>趣味：</th>
                  <td>ディズニー, ボクシング, ピアノ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Contactsection />
      <Footer />
    </>
  );
};

export default About;
