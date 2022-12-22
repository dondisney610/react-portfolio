import Head from "next/head";
import Contactsection from "../../components/Contactsection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>
          404 | 三重県フリーランスエンジニア　大山口吏紅 | Webサイト制作
        </title>
      </Head>
      <Header />
      <div class="not-found-content">
        <p>ページが見つかりません。</p>
      </div>
      <Contactsection />
      <Footer />
    </>
  );
};

export default NotFound;
