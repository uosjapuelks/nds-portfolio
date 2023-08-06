import {Themed} from "../common/clickable";
import "../../styles/navbar.css";
import {AxeLogo, ContactBook, HomeLogo, ResumeLogo, WorkLogo} from "../common/icons";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import Hamburger from 'hamburger-react'

import {DownRes} from "../common/clickable";

const NavStyle = (isActive) => {
    return (
        {
        color: isActive ? '#E1E8EFFF' : '#1A1003',
        background: isActive ? "linear-gradient(127deg, #E5CA60FF 0%, #8A4DD7FF 100%)" : "#c5cbd2",
        ":hover": {
            background: "linear-gradient(127deg, #A4508B 0%, #E1E8EF 100%)"
        },
        zIndex:"1"
    });
}

export const NavCard = () => {
    const [toggle, setToggle] = useState(false);
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    return (
        <div style={{
            width: "25rem",
            height: "6.25rem",
            margin: "0 5vw 1rem auto",
            borderRadius: "1.25rem",
            background: "#fafbfd",
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        }}>
            <nav style={{
                paddingTop:".6rem",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
            }}>
                <NavLink to={"/"} exact className="navlink-navcard" style={({ isActive }) => {
                    setToggle(isActive)
                    return NavStyle(isActive);
                }}> <><HomeLogo active={toggle}/>
                    About</> </NavLink>

                <NavLink to="/resume" className="navlink-navcard" style={({ isActive }) => {
                    setToggle1(isActive)
                    return NavStyle(isActive);
                }}> <><ResumeLogo active={toggle1}/>
                    Resume</> </NavLink>

                <NavLink to="/projects" className="navlink-navcard" style={({ isActive }) => {
                    setToggle2(isActive)
                    return NavStyle(isActive);
                }}> <><WorkLogo active={toggle2}/>
                    Portfolio</> </NavLink>

            </nav>
        </div>
    )
}

export const MobileNavCard = (props) => {
    const [burger, setBurger] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);

    return (
        <div className={`sidebar ${burger ? 'active' : ''}`}>
            <div className={`nav-burger ${burger ? 'active' : ''}`} onClick={()=>setBurger(!burger)}
                style={{
                    display:"flex",
                    justifyContent: "space-evenly",
                    visibility:"visible",
                }}
            >
                <Hamburger active={burger} color={`${burger ? '#FFF' : '#1A1003'}`}/>
            </div>

            <nav
                style={{
                height:"75%",
                margin:".8rem .6rem 0 .6rem",
                display:"flex",
                flexDirection:"column",
                justifyContent: "space-evenly",
            }}>
                <NavLink to={"/"} exact className="navlink-navcard" style={({ isActive }) => {
                    setToggle(isActive)
                    return NavStyle(isActive);
                }}> <><HomeLogo active={toggle}/>
                    About</> </NavLink>

                <NavLink to="/resume" className="navlink-navcard" style={({ isActive }) => {
                    setToggle1(isActive)
                    return NavStyle(isActive);
                }}> <><ResumeLogo active={toggle1}/>
                    Resume</> </NavLink>

                <NavLink to="/projects" className="navlink-navcard" style={({ isActive }) => {
                    setToggle2(isActive);
                    return NavStyle(isActive);
                }}> <><WorkLogo active={toggle2}/>
                    Portfolio</> </NavLink>

                <NavLink to="/contact" className="navlink-navcard" style={({ isActive }) => {
                    setToggle3(isActive);
                    return NavStyle(isActive);
                }}> <><ContactBook active={toggle3}/>
                    Contact</> </NavLink>

            </nav>
        </div>
    )
}
