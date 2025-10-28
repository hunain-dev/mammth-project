import Home from "./pages/Home/Section/Home"
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Home/>
      <div className="h-[30vh] w-full"></div>
    </div>
  )
}

export default App
