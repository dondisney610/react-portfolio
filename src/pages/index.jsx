import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";
import imageSrcRobin from "../../public/ROBINsan-review.png";
import imageSrcYuki from "../../public/yukisan-review.png";
import imageShock from "../../public/shockimg.png";
import imageSrcShirai from "../../public/siraisan-review.png";
import Contactsec from "../components/Contactsec";

const Home = () => {
  return (
    <>
      <Head>
        <title>三重県フリーランスエンジニア　大山口吏紅 | Webサイト制作</title>
      </Head>
      <Header id="top-header" />
      <section className="section-contents" id="top">
        <h1
          data-splitting
          className="site-title headline--float headline--twirl"
        >
          Riku Oyamaguchi&apos;s Portforio
        </h1>
        <h1>Riku Oyamaguchi&apos;s Portforio</h1>
      </section>
      <section id="greeting" className="top-section-container">
        <p>初めまして！大山口吏紅と申します。</p>
        <br />
        <p>「質」と「スピード」を重視することで、</p>
        <p>期待以上のものを提供させていただきます。</p>
        <br />
        <p>また、クライアント様に寄り添った</p>
        <p>丁寧なコミュニケーションを常に心がけ、</p>
        <p>最後まで責任を持って、仕事に取り組ませていただきます。</p>
        <div className="button">
          <Link href="/about">ABOUT ME ＞ </Link>
        </div>
      </section>
      <section id="service" className="top-section-container">
        <div className="heading">
          <h2>Service</h2>
          <div className="under-bar"></div>
        </div>
        <div className="service-boxes" data-aos="fade">
          <div className="service-box">
            <h2>コーディング</h2>
            <div className="service-icon">
              <i className="fas fa-code"></i>
            </div>
            <div className="service-text">
              <p className="service-p">
                LPやコーポレートサイト、ブログなど、
                目的に応じた適切なコーディングを行います。
                <br />
                スマートフォン等のデバイスに適切に表示させるレスポンシブ対応も可能です。
                <br />
                既存サイトの微修正や、Vanilla
                JavaScriptやjQueryを用いたアニメーションの導入も得意としております。
              </p>
            </div>
          </div>
          <div className="service-box">
            <h2>サイト運用サポート</h2>
            <div className="service-icon">
              <i className="fas fa-laptop"></i>
            </div>
            <div className="service-text">
              <p className="service-p">
                管理画面の操作方法がわからない、プラグインを導入して機能を追加したい、既存システムに変更を加えたいというようなお悩みはございませんでしょうか。
                <br />
                こちらではすでに運用されているサイトの運用サポートも承っております。
                <br />
                どんな些細なことでも、まずは一度ご相談ください！
              </p>
            </div>
          </div>
          <div className="service-box">
            <h2>ECサイト構築</h2>
            <div className="service-icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div className="service-text">
              <p className="service-p">
                Shopifyを用いて、ECサイトの構築代行をお引き受けます。
                <br />
                構築後は諸設定や運営方法の解説資料もご用意し、安心して運営していただける環境を提供します。
                <br />
                追加機能やデザインのカスタマイズは、アプリやコーディングを用いて実装させていただきます。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="works">
        <div className="heading">
          <h2>WORKS</h2>
          <div className="under-bar"></div>
        </div>
        <ul className="works-boxes">
          <li className="works-box">
            <Link href="#">
              <div className="works-box-category">
                <p className="wordpress">WordPress</p>
              </div>
              <div className="works-box-title">
                <p>サイトの多言語化をお手伝いさせていただきました。</p>
              </div>
            </Link>
          </li>
          <li className="works-box">
            <Link href="#">
              <div className="works-box-category">
                <p className="otherec">その他</p>
              </div>
              <div className="works-box-title">
                <p>Yahoo Shoppingの立ち上げを代行させていただきました。</p>
              </div>
            </Link>
          </li>
          <li className="works-box">
            <Link href="#">
              <div className="works-box-category">
                <p className="shopify">Shopify</p>
              </div>
              <div className="works-box-title">
                <p>Shopifyへのアプリ追加をお手伝いさせていただきました。</p>
              </div>
            </Link>
          </li>
        </ul>
        <div className="button">
          <Link href="/works">VIEW ALL ＞ </Link>
        </div>
      </section>
      <section id="customer-reviews" className="top-section-container">
        <div className="heading">
          <h2>CUSTOMER REVIEWS</h2>
          <div className="under-bar"></div>
        </div>
        <div className="customer-reviews-boxes">
          <Image src={imageSrcRobin} alt="レビュー1" />
          <Image src={imageSrcYuki} alt="レビュー2" />
          <Image src={imageShock} alt="レビュー3" />
          <Image src={imageSrcShirai} alt="レビュー4" />
        </div>
        <div className="button">
          <Link
            href="https://coconala.com/users/2453340/reviews"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW MORE ＞
          </Link>
        </div>
      </section>
      <Contactsec />
      <Footer />
    </>
  );
};

export default Home;
