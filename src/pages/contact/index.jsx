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
      <Head>
        <title>
          Contact | 三重県フリーランスエンジニア　大山口吏紅 | Webサイト制作
        </title>
      </Head>
      <Header />
      <h1 className="contact-page-name">CONTACT</h1>
      <div id="contactpage">
        <div className="contact-intro">
          <p>無料でのお見積もりや相談も受け付けております。</p>
          <p>
            制作の依頼など、サービスに関するご不明点はお気軽にお問い合わせください
          </p>
        </div>
        <div>
          <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <p>
              <label>
                Name
                <br />
                <span data-name="your-name">
                  <input type="text" name="your-name" required />
                </span>
              </label>
            </p>
            <p>
              <label>
                E-mail
                <br />
                <span data-name="your-email">
                  <input type="text" name="your-email" required />
                </span>
              </label>
            </p>
            <p>
              <label>
                Message
                <br />
                <span data-name="your-message">
                  <textarea name="your-message" cols={40} rows={10} required />
                </span>
              </label>
            </p>
            <p>
              <button className="wpcf7-submit" type="submit">
                Submit
              </button>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
