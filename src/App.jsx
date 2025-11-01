import { Routes, Route } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./pages/Home/Section/Home";
import Work from "./pages/Home/Work/Section/Work";
import Aboutus from "./pages/About/Section/Aboutus";
import Services from "./pages/Services/Section/Services";
import DetailsCom from "./Components/DetailsCom";

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
        </Routes>
    </div>
  );
};

export default App;
