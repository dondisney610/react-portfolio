import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTwitter, FaArrowCircleUp } from "react-icons/fa";
import { gsap } from "gsap";
import { animateScroll } from "react-scroll";

const Header = ({ id }) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    import("gsap/ScrollTrigger").then((module) => {
      gsap.registerPlugin(module.ScrollTrigger);
      setAnimation();
    });
  }, []);

  const setAnimation = () => {
    gsap.to("#page-top", {
      scrollTrigger: {
        trigger: "#__next",
        start: "top -400px",
        end: "bottom 0px",
        toggleClass: { targets: "#page-top", className: "isView" },
        once: false,
      },
    });
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const toggleClass = () => {
    setIsActive((prev) => !prev);
    if (screen.availWidth < 768) {
      if (!isActive) {
        document.body.classList = ["-active"];
      } else {
        document.body.classList = [];
      }
    }
  };

  return (
    <header id={id}>
      <div className="header-wrapper">
        <div className="header-logo">
          <div className="header-logo-a" id="header-logo">
            <Link href="/">RikuDon</Link>
          </div>
          <button
            className={isActive ? "nav-btn -active" : "nav-btn"}
            id="nav-btn"
            type="button"
            aria-label="メニュー"
            onClick={toggleClass}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={isActive ? "header-nav -active" : "header-nav"}>
          <ul>
            <li onClick={toggleClass}>
              <Link href="/">HOME</Link>
            </li>
            <li onClick={toggleClass}>
              <Link href="/about">ABOUT</Link>
            </li>
            <li onClick={toggleClass}>
              <Link href="/works">WORKS</Link>
            </li>
            <li onClick={toggleClass}>
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
