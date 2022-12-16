import axios from "axios";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Articles from "../../components/Articles";
import Contactsec from "../../components/Contactsec";

const Works = ({ articles }) => {
  if (!articles) {
    return (
      <>
        <h1 className="page-name">WORKS</h1>
        <div id="workspage">
          <div>データがありません</div>
        </div>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>
          Works | 三重県フリーランスエンジニア　大山口吏紅 | Webサイト制作
        </title>
      </Head>
      <Header />
      <h1 className="page-name">WORKS</h1>
      <div id="workspage">
        <Articles list={articles} />
        <div className="works-pager">
          <div className="wp-pagenavi" role="navigation">
            <span aria-current="page" className="current">
              1
            </span>
            <a
              className="page larger"
              title="ページ 2"
              href="http://localhost:10073/articles/page/2/"
            >
              2
            </a>
            <a
              className="page larger"
              title="ページ 3"
              href="http://localhost:10073/articles/page/3/"
            >
              3
            </a>
            <span className="extend">...</span>
            <a
              className="nextpostslink"
              rel="next"
              aria-label="次のページ"
              href="http://localhost:10073/articles/page/2/"
            >
              &gt;
            </a>
            <a
              className="last"
              aria-label="Last Page"
              href="http://localhost:10073/articles/page/4/"
            >
              &gt;&gt;
            </a>
          </div>
        </div>
      </div>
      <Contactsec />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const ENDPOINT = "https://rikudon.shop/wp-json/wp/v2/posts";
  const result = await axios.get(ENDPOINT).then((res) => res.data);
  return {
    props: { articles: result },
  };
};

export default Works;
