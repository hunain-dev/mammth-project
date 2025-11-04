import { Routes, Route } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import Aboutus from "./pages/About/Section/Aboutus";
import Services from "./pages/Services/Section/Services";
import DetailsCom from "./Components/DetailsCom";
import Contact from "./pages/Contact/Section/Contact";
import Home from "./pages/Home/Section/Home";
import Work from "./pages/Work/Section/Work";
import ScrollToTop from "./Components/ScrollToTop";
import { useEffect } from "react";
import Loader from "./Components/Loader";

const App = () => {
  // Locomotive scroll initialize
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  
    return () => {
      // 👇 page change hone pe scroll destroy ho jaye
      locomotiveScroll.destroy();
    };
  }, []);
  
  return (
    <div>
      <Loader/>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />

        {/* ✅ yeh line galat jagah thi, sirf yahan Route hona chahiye */}
        <Route path="/DetailsCom/:id" element={<DetailsCom />} />
      </Routes>
    </div>
  );
};

export default App;
