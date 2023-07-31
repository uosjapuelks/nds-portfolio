import logo from '../logo.svg';
import '../styles/App.css';
import { Layout } from '../pages';
import { Header } from "../components/layout/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import {ContentCard} from "../components/layout/info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} exact element={<Layout><ContentCard title={"About Me"}/></Layout>} />
          <Route path={"/resume"} exact element={<Layout><ContentCard title={"Resume"}/></Layout>} />
          <Route path={"/projects"} exact element={<Layout><ContentCard title={"Project"}/></Layout>} />
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
