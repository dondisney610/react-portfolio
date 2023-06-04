import axios from "axios";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Articles from "../../components/Articles";
import Contactsection from "../../components/Contactsection";

const Works = ({ articles }) => {
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
        <Articles articles={articles} />
      </div>
      <Contactsection />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const results = await axios
    .get("http://localhost:10013/wp-json/wp/v2/posts?per_page=100")
    .then((res) => res.data);
  return {
    props: { articles: results },
  };
};

export default Works;
