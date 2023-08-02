import '../styles/App.css';
import '../styles/minicard.css'
import { Layout } from '../pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import {ContentCard} from "../components/layout/info";
import {About} from "../pages/about";
import {Resume} from "../pages/resume";
import {Portfolio} from "../pages/portfolio";
import {Capstone} from "../pages/portfolio/capstone";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} exact element={<Layout><ContentCard title={"About Me"}>
              <About/></ContentCard></Layout>} />
              <Route path={"/"} exact element={<Layout><ContentCard title={"About Me"}>
                  <About/></ContentCard></Layout>} />
          <Route path={"/resume"} element={<Layout><ContentCard title={"Resume"}>
              <Resume/></ContentCard></Layout>} />
          <Route path={"/projects"} element={<Layout><ContentCard title={"Portfolio"}>
              <Portfolio/></ContentCard></Layout>}>
              <Route path="capstone" element={<Capstone/>} />
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
