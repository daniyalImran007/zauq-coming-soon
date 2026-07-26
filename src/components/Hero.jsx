import "./Hero.scss";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import { useEffect, useState } from "react";

const TEXT = "Coming Soon...";
const Hero = () => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    let timeout;

    const type = () => {
      if (index <= TEXT.length) {
        setDisplayText(TEXT.slice(0, index));
        index++;

        timeout = setTimeout(type, 180); // Typing speed
      } else {
        // Keep full text visible
        timeout = setTimeout(() => {
          setDisplayText("");

          // Restart after blank pause
          timeout = setTimeout(() => {
            index = 0;
            type();
          }, 500);
        }, 1500);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className="left"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
    >
      <section className="hero">
        <div className="overlay"></div>

        <div className="container hero-content">
          <div className="left">
            <br />
            <span className="heading">Premium Pakistani Spices</span>
            <h1>
              <span className="title">ZauQ Spices are</span>

              <span className="typing-wrapper">
                <span className="typing">{displayText}</span>
              </span>
            </h1>
            <br />
            <p>
              Crafted with purity. Packed with authentic flavor. We are
              preparing something truly special.
            </p>

            <div className="features">
              <span className="tag">100% Natural</span>
              <span className="tag">Finest Quality</span>
              <span className="tag">Rich Aroma</span>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
