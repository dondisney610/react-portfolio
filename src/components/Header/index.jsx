import Link from "next/link";
import { FaTwitter } from "react-icons/fa";

const Header = ({ id }) => {
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
          <a>
            <FaTwitter />
          </a>
        </div>
      </div>

      <div id="page-top">
        <i className="fas fa-arrow-circle-up"></i>
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
