import Link from "next/link";

const Contactsec = () => {
  return (
    <section id="contact">
      <div className="contact-area">
        <div className="heading">
          <h2>CONTACT</h2>
        </div>
        <p>本サービスに関するお問い合わせは、</p>
        <p>コンタクトフォームよりお願いいたします。</p>
        <div className="button">
          <Link href="/contact">問い合わせ ＞</Link>
        </div>
      </div>
    </section>
  );
};

export default Contactsec;
