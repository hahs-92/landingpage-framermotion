//PAGES
import Starter from "./pages/Starter";
import About from "./pages/About";
import Why from "./pages/Why";
import Testimonials from "./pages/Testimonials";
import Blogs from "./pages/Blogs";
import Footer from "./pages/Footer";
import ScrollToTop from "./components/ScrollToTop";

//ANIMATIONS
import { motion } from 'framer-motion'


function App() {
  return (
    <motion.main initial='hidden' animate='show'>
      <ScrollToTop />
      <Starter />
      <About />
      <Why />
      <Testimonials />
      <Blogs />
      <Footer />
    </motion.main>
  );
}

export default App;
