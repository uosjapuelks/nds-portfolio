import logo from '../logo.svg';
import '../styles/App.css';
import { LandingPage } from '../pages';
import { Header } from "../components/layout/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"}>
          <Route index element={<LandingPage />} />
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
