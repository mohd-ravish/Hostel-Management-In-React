import Navbar from "./Navbar";
import About from "./About";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="main-page">
      <Navbar/>
      <About/>
      <Carousel/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;
