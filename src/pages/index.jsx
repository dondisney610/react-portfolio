import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contactsection from "../components/Contactsection";
import { FaCode, FaLaptop, FaShoppingCart } from "react-icons/fa";
import { gsap } from "gsap";
import axios from "axios";

const Home = ({ articles }) => {
  useEffect(() => {
    import("gsap/ScrollTrigger").then((module) => {
      gsap.registerPlugin(module.ScrollTrigger);
      setAnimation();
    });
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
      <p>このサイトにはアクセスできません</p>
    </>
  );
};

export const getStaticProps = async () => {
  const results = await axios
    .get("http://127.0.0.1:10013/wp-json/wp/v2/posts?per_page=3")
    .then((res) => res.data);
  return {
    props: { articles: results },
  };
};

export default Home;
