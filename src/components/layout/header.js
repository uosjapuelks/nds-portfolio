import "../../styles/font.css";
import {useWindowDimensions} from "../../utils/App";
import logo from "../../images/randomLogo.png";
import profilePicture from "../../images/hollandfieldssolo.jpeg";
import {MobileNavCard} from "./navcard";

export const Header = (props) => {
    const { height, width } = useWindowDimensions();
    const logoText = "ee";
    return (
        <div
            style={{
                display: "flex",
                width: {width},
                height: "6.5rem",
                justifyContent: "normal",
                alignItems: "center",
                flexShrink: "0",
                color:"black",
                padding: "1.13rem 0 2.25rem 0",
            }}
        >
            <img
                src={logo}
                style={{
                    marginTop: "1.12rem",
                    width: "8.5rem",
                    height: "8.5rem",
                    objectFit: "scale-down",
                }}
            />
            <div
                className="heading"
                style={{
                    display: "flex",
                    padding: "3.2rem 0 0 0",
                    alignItems: "center",
                    gap: "0.625rem",
                    fontWeight: "bold",
                    fontSize: 40,
                }}>
                {logoText}
            </div>
        </div>
    )
}

export const MobileHeader = (props) => {
    return (
        <div
            style={{
                // display: "flex",
                width: "100vw",
                height: "4.5rem",
                // justifyContent: "space-between",
                padding: ".5rem 0 1.25rem 0",
                position:"fixed",
                background:"#F2F5F9",
                opacity:"90%",
            }}
        >
            <img
                src={logo}
                style={{
                    margin:"1rem",
                    width: "3.5rem",
                    height: "3.5rem",
                    objectFit: "scale-down",
                }}
            />
        </div>
    )
}