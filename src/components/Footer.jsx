import "./Footer.scss";

import logo from "../assets/images/logo.png";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../utils/animations";

import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <motion.div
          className="footer-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left */}

          <motion.div className="footer-column" variants={fadeUp}>
            <motion.img
              src={logo}
              alt="ZauQ"
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            <p>
              Premium spices crafted with purity
              <br />
              and passion for a healthier you
              <br />
              and your family.
            </p>
          </motion.div>

          {/* Center */}

          <motion.div className="footer-column center" variants={fadeUp}>
            <h3>Follow Us</h3>

            <motion.a
              href="https://www.instagram.com/zauqspices/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 8 }}
            >
              <FaInstagram />
              <span>@zauqspices</span>
            </motion.a>

            <motion.a
              href="https://www.facebook.com/zauqspices/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 8 }}
            >
              <FaFacebookF />
              <span>@zauqspices</span>
            </motion.a>

            <motion.a
              href="https://www.tiktok.com/@zauqspices"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 8 }}
            >
              <FaTiktok />
              <span>@zauqspices</span>
            </motion.a>
          </motion.div>

          {/* Right */}

          <motion.div className="footer-column" variants={fadeUp}>
            <h3>Contact Us</h3>

            <motion.a href="tel:+923335907439" whileHover={{ x: 8 }}>
              <FaPhoneAlt />
              <span>+92 333 5907439</span>
            </motion.a>

            <motion.a href="tel:+923467302434" whileHover={{ x: 8 }}>
              <FaPhoneAlt />
              <span>+92 346 7302434</span>
            </motion.a>

            <motion.a
              href="mailto:zauqspices.official@gmail.com"
              whileHover={{ x: 8 }}
            >
              <FaEnvelope />
              <span>zauqspices.official@gmail.com</span>
            </motion.a>

            <motion.a
              href="https://www.zauqspices.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 8 }}
            >
              <FaGlobe />
              <span>www.zauqspices.com</span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div className="footer-bottom" variants={fadeUp}>
          <div className="line"></div>

          <span>© 2026 ZauQ Spices. All Rights Reserved.</span>

          <div className="line"></div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
