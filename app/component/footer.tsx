import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Brand */}
        <div>
          <h2 className="footer-logo">MyWebsite</h2>
          <p>
            We build modern and fast websites using Next.js and
            the latest technologies.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3>Pages</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Services */}
        <div>
          <h3>Services</h3>
          <p>Web Development</p>
          <p>UI/UX Design</p>
          <p>SEO</p>
          <p>Website Maintenance</p>
        </div>

        {/* Social */}
        <div>
          <h3>Follow</h3>
          <div className="social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}