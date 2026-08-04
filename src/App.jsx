import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Divider from "./components/Divider/Divider";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Divider />

      <About />

      <Divider />

      <Footer />
      <Analytics />
    </>
  );
}

export default App;
