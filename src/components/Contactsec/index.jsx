import Link from "next/link";
import { gsap } from "gsap";
import { useEffect } from "react";

const Contactsec = () => {
  useEffect(() => {
    import("gsap/ScrollTrigger").then((module) => {
      gsap.registerPlugin(module.ScrollTrigger);
      setAnimation();
    });
  }, []);

  const setAnimation = () => {
    gsap.to("#contact", {
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleClass: { targets: "#contact", className: "isView" },
        once: true,
      },
    });
  };

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
