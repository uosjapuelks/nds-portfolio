import '../styles/App.css';
import '../styles/minicard.css'
import {BrowserRouter, Routes, Route, HashRouter, Router} from "react-router-dom";
import { useState, useEffect } from 'react';
import {About} from "../pages/about";
import {Resume} from "../pages/resume";
import {Portfolio, PortfolioMain} from "../pages/portfolio";
import {Capstone} from "../pages/portfolio/capstone";
import {LandingPage} from "../pages/landing-page";
import {Rtoscar} from "../pages/portfolio/rtoscar";
import {Fridget} from "../pages/portfolio/fridget";
import {Minifpga} from "../pages/portfolio/fpga2026";
import {MobileProfileCard} from "../components/common/profilCard";
import {LayoutDesktop, LayoutMobile} from "../components/layout";

function App() {
    const { height, width } = useWindowDimensions();
    const ChosenLayout = (width > 750 ? LayoutDesktop : LayoutMobile);
    let mobile = width <= 750;

    return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route path={"/"} exact element={<ChosenLayout><LandingPage/></ChosenLayout>}>
              <Route path="" element={<About/>}/>
              <Route path="resume" element={<Resume mobile={mobile}/>} />
              <Route path={"projects"} element={<Portfolio/>}>
                  <Route path="" element={<PortfolioMain/>} />
                  <Route path="capstone" element={<Capstone/>} />
                  <Route path="fridget" element={<Fridget/>} />
                  <Route path="minifpga" element={<Minifpga/>} />
                  <Route path="rtoscar" element={<Rtoscar/>} />
              </Route>
              <Route path="contact" element={<MobileProfileCard/>}/>
          </Route>
      </Routes>
    </BrowserRouter basename={process.env.PUBLIC_URL}>
  );
}
export default App;
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
