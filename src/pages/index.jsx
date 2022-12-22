import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contactsection from "../components/Contactsection";
import imageSrcRobinPc from "../../public/robin-pc.png";
import imageSrcHayatePc from "../../public/hayate-pc.png";
import imageSrcPokipokiPc from "../../public/pokipoki-pc.png";
import imageSrcHisayamaPc from "../../public/hisayama-pc.png";
import imageSrcRobinSp from "../../public/robin-sp.png";
import imageSrcHayateSp from "../../public/hayate-sp.png";
import imageSrcPokipokiSp from "../../public/pokipoki-sp.png";
import imageSrcHisayamaSp from "../../public/hisayama-sp.png";
import { FaCode, FaLaptop, FaShoppingCart } from "react-icons/fa";
import { gsap } from "gsap";
import axios from "axios";

const Home = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    import("gsap/ScrollTrigger").then((module) => {
      gsap.registerPlugin(module.ScrollTrigger);
      setAnimation();
    });

    const getArticlesTop = async () => {
      const articles = await axios
        .get("https://rikudon.shop/wp-json/wp/v2/posts?per_page=3")
        .then((res) => {
          return res.data;
        });
      setArticles(articles);
    };
    getArticlesTop();
  }, []);

  const setAnimation = () => {
    gsap.to("#top-header", {
      scrollTrigger: {
        trigger: "#__next",
        start: "top -400px",
        end: "bottom 0px",
        toggleClass: { targets: "#top-header", className: "isView" },
        once: false,
      },
    });
    gsap.to("#greeting", {
      scrollTrigger: {
        trigger: "#greeting",
        start: "top 80%",
        toggleClass: { targets: "#greeting", className: "isView" },
        once: true,
      },
    });
    gsap.to("#service", {
      scrollTrigger: {
        trigger: "#service",
        start: "top 80%",
        toggleClass: { targets: "#service", className: "isView" },
        once: true,
      },
    });
    gsap.to("#works", {
      scrollTrigger: {
        trigger: "#works",
        start: "top 80%",
        toggleClass: { targets: "#works", className: "isView" },
        once: true,
      },
    });
    gsap.to("#customer-reviews", {
      scrollTrigger: {
        trigger: "#customer-reviews",
        start: "top 80%",
        toggleClass: { targets: "#customer-reviews", className: "isView" },
        once: true,
      },
    });
  };

  return (
    <>
      <Head>
        <title>三重県フリーランスエンジニア　大山口吏紅 | Webサイト制作</title>
      </Head>
      <Header id="top-header" />
      <section className="section-contents" id="top">
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
              <FaCode />
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
              <FaLaptop />
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
              <FaShoppingCart />
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
          {articles.map((article) => {
            return (
              <li className="works-box" key={article.id}>
                <Link href={`/works/${article.slug}`}>
                  <div className="works-box-category">
                    <p className={article.category_name.toLowerCase()}>
                      {article.category_name}
                    </p>
                  </div>
                  <div className="works-box-title">
                    <p>{article.title.rendered}</p>
                  </div>
                </Link>
              </li>
            );
          })}
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
          <div className="customer-reviews-boxes-pc">
            <Image src={imageSrcRobinPc} alt="レビュー1" />
            <Image src={imageSrcHayatePc} alt="レビュー2" />
            <Image src={imageSrcPokipokiPc} alt="レビュー3" />
            <Image src={imageSrcHisayamaPc} alt="レビュー4" />
          </div>
          <div className="customer-reviews-boxes-sp">
            <Image src={imageSrcRobinSp} alt="レビュー1" />
            <Image src={imageSrcHayateSp} alt="レビュー2" />
            <Image src={imageSrcPokipokiSp} alt="レビュー3" />
            <Image src={imageSrcHisayamaSp} alt="レビュー4" />
          </div>
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
      <Contactsection />
      <Footer />
    </>
  );
};

export default Home;
