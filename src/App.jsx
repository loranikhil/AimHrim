import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
// import Hero from "./Hero";
import Service from "./Service";
import Tech from "./Tech";
import About from "./about";
import Mnc from "./Mnc"; 
import Reviews from "./Reviews";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Service />
      <Tech />
      <About />
      <Mnc />
      <Reviews />
      <Contact />
      <Footer />
      {/* <Hero /> */}
    </Router>
  );
}

export default App;
