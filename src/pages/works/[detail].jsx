import axios from "axios";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Contactsection from "../../components/Contactsection";
import Image from "next/image";
import Link from "next/link";

const ENDPOINT = "http://127.0.0.1:10013/wp-json/wp/v2/posts";

const Detail = () => {
  return (
    <>
      <p>このサイトにはアクセスできません</p>
    </>
  );
};

export default Detail;
