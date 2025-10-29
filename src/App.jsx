import { Routes, Route } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./pages/Home/Section/Home";
import Work from "./pages/Home/Work/Section/Work";

const App = () => {
    const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
};

export default App;
