import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Service from "./Service";
import Tech from "./Tech";
import About from "./about";
import Mnc from "./Mnc"; 
import Reviews from "./Reviews";
import Contact from "./Contact";
import Career from "./Career";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Service />
              <Tech />
              <About />
              <Mnc />
              <Reviews />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* ✅ Career page */}
        <Route
          path="/career"
          element={
            <>
            
              <Career />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
