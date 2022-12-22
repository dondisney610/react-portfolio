import axios from "axios";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Contactsection from "../../components/Contactsection";
import Image from "next/image";
import Link from "next/link";

const ENDPOINT = "https://rikudon.shop/wp-json/wp/v2/posts";

const Detail = ({ article }) => {
  return (
    <>
      <Head>
        <title>
          {article[0].title.rendered} | 三重県フリーランスエンジニア　大山口吏紅
          | Webサイト制作
        </title>
      </Head>
      <Header />
      <h1 className="page-name">DETAILS</h1>
      <section className="single-content">
        <div className="single-image">
          <Image
            src={article[0].acf.thumbnail_of_work}
            width={1154}
            height={718}
            alt=""
          />
        </div>
        <h2>{article[0].acf.cliant_name}</h2>
        <div className="single-category wordpress">WordPress</div>
        <div
          dangerouslySetInnerHTML={{ __html: article[0].content.rendered }}
        />
        <div className="single-button">
          <Link href="/works">一覧に戻る ＞</Link>
        </div>
      </section>
      <Contactsection />
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  const result = await axios.get(`${ENDPOINT}?per_page=100`).then((res) => {
    return res.data;
  });

  const Paths = result.map((article) => ({
    params: { detail: `${article.slug}` },
  }));
  const paths = [...Paths];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const url = `${ENDPOINT}?slug=${params.detail}`;
  const result = await axios.get(url).then((res) => {
    return res.data;
  });

  return {
    props: { article: result },
  };
};

export default Detail;
