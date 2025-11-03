import { Routes, Route } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import Aboutus from "./pages/About/Section/Aboutus";
import Services from "./pages/Services/Section/Services";
import DetailsCom from "./Components/DetailsCom";
import Contact from "./pages/Contact/Section/Contact";
import Home from "./pages/Home/Section/Home"
import Work from "./pages/Work/Section/Work"
const App = () => {
    const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/DetailsCom/:id" element={<DetailsCom />} />
        <Route path="/Contact" element={<Contact />} />
        </Routes>
    </div>
  );
};

export default App;
