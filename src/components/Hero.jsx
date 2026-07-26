import "./Hero.scss";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

const Hero = () => {
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
            <span className="heading">Premium Pakistani Spices</span>

            <h1>
              zauq spices
              <br />
              are Coming Soon
            </h1>

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
