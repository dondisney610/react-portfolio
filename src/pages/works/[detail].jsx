import axios from "axios";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Contactsection from "../../components/Contactsection";
import Image from "next/image";
import Link from "next/link";
import Articles from "../../components/Articles";

const ENDPOINT = "https://rikudon.shop/wp-json/wp/v2/posts";

const Detail = ({ articles, article, id }) => {
  if (id === "2" || id === "3") {
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
        <Contactsection />
        <Footer />
      </>
    );
  }
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
  const result = await axios.get(ENDPOINT).then((res) => {
    return res.data;
  });
  if (!result) {
    return;
  }
  const result2 = await axios.get(`${ENDPOINT}?page=2`).then((res) => {
    return res.data;
  });
  if (!result2) {
    return;
  }
  const result3 = await axios.get(`${ENDPOINT}?page=3`).then((res) => {
    return res.data;
  });
  if (!result3) {
    return;
  }

  const Paths1 = result.map((article) => ({
    params: { detail: `${article.slug}` },
  }));
  const Paths2 = result2.map((article) => ({
    params: { detail: `${article.slug}` },
  }));
  const Paths3 = result3.map((article) => ({
    params: { detail: `${article.slug}` },
  }));
  const paths = [
    ...Paths1,
    ...Paths2,
    ...Paths3,
    { params: { detail: "2" } },
    { params: { detail: "3" } },
  ];

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

  if (params.detail === "2" || params.detail === "3") {
    const results = await axios
      .get(`${ENDPOINT}?page=${params.detail}`)
      .then((res) => res.data);
    return {
      props: { articles: results, article: result, id: params.detail },
    };
  }

  return {
    props: { article: result, id: params.detail },
  };
};

export default Detail;
