import {Themed} from "../common/clickable";
import fonts from "../../styles/font.module.css";
import "../../styles/navbar.css";
import {HomeLogo, ResumeLogo, WorkLogo} from "../common/icons";
import {NavLink} from "react-router-dom";
import {useState} from "react";

export const NavCard = () => {
    const [toggle, setToggle] = useState(false);
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    return (
        <div style={{
            width: "31.4375rem",
            height: "6.25rem",
            marginRight:"0",
            marginLeft: "auto",
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
                <NavLink to={"/"} className={fonts.navSelection} style={({ isActive }) => {
                    setToggle(isActive)
                    return (
                        {
                            borderRadius: "1.25rem",
                            textDecoration: "none",
                            color: isActive ? '#E1E8EFFF' : '#1A1003',
                            opacity: isActive ? '1' : '0.5',
                            background: isActive ? "linear-gradient(127deg, #A4508B 0%, #400B83 100%)" : "#c5cbd2",
                            ":hover": {
                                background: "linear-gradient(127deg, #A4508B 0%, #E1E8EF 100%)"
                            }
                        });
                }}> <><HomeLogo active={toggle}/>
                    About</> </NavLink>

                <NavLink to="/resume" className={fonts.navSelection} style={({ isActive }) => {
                    setToggle1(isActive)
                    return (
                        {
                            borderRadius: "1.25rem",
                            textDecoration: "none",
                            color: isActive ? '#E1E8EFFF' : '#1A1003',
                            opacity: isActive ? '1' : '0.5',
                            background: isActive ? "linear-gradient(127deg, #A4508B 0%, #400B83 100%)" : "#c5cbd2",
                            ":hover": {
                                background: "linear-gradient(127deg, #A4508B 0%, #E1E8EF 100%)"
                            }
                        });
                }}> <><ResumeLogo active={toggle1}/>
                    Resume</> </NavLink>

                <NavLink to="/projects" className={fonts.navSelection} style={({ isActive }) => {
                    setToggle2(isActive)
                    return (
                        {
                            borderRadius: "1.25rem",
                            textDecoration: "none",
                            color: isActive ? '#E1E8EFFF' : '#1A1003',
                            opacity: isActive ? '1' : '0.5',
                            background: isActive ? "linear-gradient(127deg, #A4508B 0%, #400B83 100%)" : "#c5cbd2",
                            ":hover": {
                                background: "linear-gradient(127deg, #A4508B 0%, #E1E8EF 100%)"
                            }
                        });
                }}> <><WorkLogo active={toggle2}/>
                    Projects</> </NavLink>
            </nav>
        </div>
    )
}