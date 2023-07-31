import logo from '../logo.svg';
import '../styles/App.css';
import { Layout } from '../pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import {ContentCard} from "../components/layout/info";
import {About} from "../pages/about";
import {Resume} from "../pages/resume";
import {Projects} from "../pages/projects";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} exact element={<Layout><ContentCard title={"About Me"}>
              <About/></ContentCard></Layout>} />
          <Route path={"/resume"} exact element={<Layout><ContentCard title={"Resume"}>
              <Resume/></ContentCard></Layout>} />
          <Route path={"/projects"} exact element={<Layout><ContentCard title={"Projects"}>
              <Projects/></ContentCard></Layout>} />
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
