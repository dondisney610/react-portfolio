import axios from "axios";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Articles from "../../components/Articles";
import Contactsection from "../../components/Contactsection";

const Works = ({ articles }) => {
  return (
    <>
      <p>このサイトにはアクセスできません</p>
    </>
  );
};

export const getStaticProps = async () => {
  const results = await axios
    .get("http://127.0.0.1:10013/wp-json/wp/v2/posts?per_page=100")
    .then((res) => res.data);
  return {
    props: { articles: results },
  };
};

export default Works;
