import {Themed} from "../common/clickable";
import fonts from "../../styles/font.module.css";
import "../../styles/navbar.css";
import {HomeLogo, ResumeLogo, WorkLogo} from "../common/icons";
import {NavLink} from "react-router-dom";

const NavSelection = (props) => {
    return (
        <Themed className={fonts.navSelection}>
            {props.children}
        </Themed>
    )
}

export const NavCard = (props) => {
    return (
        <div style={{
            width: "31.4375rem",
            height: "6.25rem",
            marginRight:"0",
            marginLeft: "auto",
            borderRadius: "1.25rem",
            background: "#F2F7FC",
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        }}>
            <nav style={{
                paddingTop:".6rem",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
            }}>
                <NavLink to="/" style={{textDecoration:"none",}}> <NavSelection><HomeLogo active={true}/>About</NavSelection> </NavLink>
                <NavLink to="/resume" style={{textDecoration:"none",}}> <NavSelection><ResumeLogo active={true}/>Resume</NavSelection> </NavLink>
                <NavLink to="/projects" style={{textDecoration:"none",}}> <NavSelection><WorkLogo active={true}/>Projects</NavSelection> </NavLink>
            </nav>
        </div>
    )
}