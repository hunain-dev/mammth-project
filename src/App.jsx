import {  Routes, Route, useLocation } from "react-router-dom";
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
  const location = useLocation();

  useEffect(() => {
    const loco = new LocomotiveScroll({
      smooth: true,
    });

    return () => {
      loco.destroy();
    };
  }, [location.pathname]); // <- important
  
  return (
    <div className="h-full w-full" data-scroll-container>
      <Loader/>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/DetailsCom/:id" element={<DetailsCom />} />
      </Routes>
    </div>
  );
};

export default App;
