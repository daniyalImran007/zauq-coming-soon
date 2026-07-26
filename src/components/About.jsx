import "./About.scss";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import { stagger } from "../utils/animations";
const About = () => {
  return (
    <motion.section
      className="about"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="overlay"></div>

      <div className="container">
        <span className="sub-title">OUR STORY</span>

        <h2>
          Pure. Natural.
          <br />
          Authentic.
        </h2>

        <p>
          Every spice is carefully selected to preserve its natural aroma, rich
          flavor, and uncompromising quality. We believe authentic food begins
          with authentic ingredients.
        </p>

        <motion.div
          className="cards"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="card" variants={fadeUp}>
            <h3>100%</h3>
            <span>Natural</span>
          </motion.div>

          <motion.div className="card" variants={fadeUp}>
            <h3>Premium</h3>
            <span>Quality</span>
          </motion.div>

          <motion.div className="card" variants={fadeUp}>
            <h3>Rich</h3>
            <span>Aroma</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
