import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">

        {/* LOGO */}
        <Link href="/" className="logo">
          <Image
            src="/logo.png"
            alt="MyWebsite Logo"
            width={40}
            height={40}
          />
          <span></span>
        </Link>

        {/* NAV */}
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  );
}