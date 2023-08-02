import '../styles/App.css';
import '../styles/minicard.css'
import { Layout } from '../pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import {ContentCard} from "../components/layout/info";
import {About} from "../pages/about";
import {Resume} from "../pages/resume";
import {Portfolio, PortfolioMain} from "../pages/portfolio";
import {Capstone} from "../pages/portfolio/capstone";
import {LandingPage} from "../pages/landing-page";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} exact element={<Layout><LandingPage/></Layout>}>
              <Route path="" element={<About/>}/>
              <Route path="resume" element={<Resume/>} />
              <Route path={"projects"} element={<Portfolio/>}>
                  <Route path="" element={<PortfolioMain/>} />
                  <Route path="capstone" element={<Capstone/>} />
          </Route>
          </Route>
      </Routes>
    </BrowserRouter>
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
