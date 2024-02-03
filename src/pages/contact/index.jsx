import Head from "next/head";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/600bde30-7f5d-11ed-b38f-a1ed22f366b1";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <Header />
        <h1 className="contact-page-name">CONTACT</h1>
        <div id="contactpage">
          <div className="contact-intro">
            <p>Thank you!</p>
            <p>We'll be in touch soon.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <p>このサイトにはアクセスできません</p>
    </>
  );
};

export default Contact;
