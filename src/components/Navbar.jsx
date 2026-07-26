import "./Navbar.scss";
import { motion } from "framer-motion";

import logo from "../assets/images/logo.png";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

const Navbar = () => {
  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
      }}
    >
      <header className="navbar">
        <div className="container">
          <img src={logo} alt="ZauQ Spices" className="logo" />

          <div className="social">
            <span>Follow Us</span>

            <a
              href="https://www.instagram.com/zauqspices/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/zauqspices/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.tiktok.com/@zauqspices"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </header>
    </motion.header>
  );
};

export default Navbar;
