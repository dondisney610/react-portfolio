import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Contact = () => {
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
        <div
          role="form"
          className="wpcf7"
          id="wpcf7-f11-o2"
          lang="ja"
          dir="ltr"
        >
          <div className="screen-reader-response">
            <p role="status" aria-live="polite" aria-atomic="true"></p>
            <ul></ul>
          </div>
          <form
            action="/contact#wpcf7-f11-o2"
            method="post"
            className="wpcf7-form init"
            data-status="init"
          >
            <p>
              <label>
                Name
                <br />
                <span className="wpcf7-form-control-wrap" data-name="your-name">
                  <input
                    type="text"
                    name="your-name"
                    value=""
                    size={40}
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </span>
              </label>
            </p>
            <p>
              <label>
                E-mail
                <br />
                <span
                  className="wpcf7-form-control-wrap"
                  data-name="your-email"
                >
                  <input
                    type="email"
                    name="your-email"
                    value=""
                    size={40}
                    className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </span>
              </label>
            </p>
            <p>
              <label>
                Message
                <br />
                <span
                  className="wpcf7-form-control-wrap"
                  data-name="your-message"
                >
                  <textarea
                    name="your-message"
                    cols={40}
                    rows={10}
                    className="wpcf7-form-control wpcf7-textarea"
                    aria-invalid="false"
                  ></textarea>
                </span>
              </label>
            </p>
            <p>
              <input
                type="submit"
                value="Submit"
                className="wpcf7-form-control has-spinner wpcf7-submit"
              />
              <span className="wpcf7-spinner"></span>
            </p>
            <div className="wpcf7-response-output" aria-hidden="true"></div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
