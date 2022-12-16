import Link from "next/link";

export default function Footer() {
  return (
    <footer>
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
      <p>
        <Link href="/privacy-policy">プライバシーポリシー</Link>
      </p>
      <small>&copy; Riku Oyamaguchi All rights reserved.</small>
    </footer>
  );
}
