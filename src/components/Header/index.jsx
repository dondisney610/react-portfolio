import Link from "next/link";
import { useEffect } from "react";
import { FaTwitter, FaArrowCircleUp } from "react-icons/fa";
import { gsap } from "gsap";
import { animateScroll } from "react-scroll";

const Header = ({ id }) => {
  useEffect(() => {
    import("gsap/ScrollTrigger").then((module) => {
      gsap.registerPlugin(module.ScrollTrigger);
      setAnimation();
    });
  }, []);

  const setAnimation = () => {
    gsap.to("#top-header", {
      scrollTrigger: {
        trigger: "#greeting",
        start: "top 50%",
        end: "bottom -100000%",
        toggleClass: { targets: "#top-header", className: "isView" },
        once: false,
      },
    });
    gsap.to("#page-top", {
      scrollTrigger: {
        trigger: "#greeting",
        start: "top 50%",
        end: "bottom -100000%",
        toggleClass: { targets: "#page-top", className: "isView" },
        once: false,
      },
    });
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <header id={id}>
      <div className="header-wrapper">
        <div className="header-logo">
          <div className="header-logo-a" id="header-logo">
            <Link href="/">RikuDon</Link>
          </div>
          <button
            className="nav-btn"
            id="nav-btn"
            type="button"
            aria-label="メニュー"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="header-nav">
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/works">WORKS</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="header-twitter">
          <a
            href="#"
            onClick={() => {
              alert("This is not available now.");
            }}
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <div id="page-top" onClick={scrollToTop}>
        <FaArrowCircleUp />
      </div>
      {/* <div className="language-switcher">
        <a href="#" className="glink nturl notranslate">
          JA
        </a>
        <a href="#">／</a>
        <a href="#" className="glink nturl notranslate">
          EN
        </a>
      </div> */}
    </header>
  );
};

export default Header;
