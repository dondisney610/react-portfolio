import axios from "axios";
import Head from "next/head";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Articles from "../../../components/Articles";
import Contactsec from "../../../components/Contactsec";

const Works = ({ articles, id }) => {
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
        <Articles list={articles} id={id} />
      </div>
      <Contactsec />
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: "2" } }, { params: { id: "3" } }],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const ENDPOINT = "https://rikudon.shop/wp-json/wp/v2/posts";
  const result = await axios
    .get(`${ENDPOINT}?page=${params.id}`)
    .then((res) => res.data);
  return {
    props: { articles: result, id: params.id },
  };
};

export default Works;
