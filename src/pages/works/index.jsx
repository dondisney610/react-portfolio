import axios from "axios";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Articles from "../../components/Articles";
import Contactsection from "../../components/Contactsection";

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
      </div>
      <Contactsection />
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
