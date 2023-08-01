import fonts from "../../styles/font.module.css";
import {useWindowDimensions} from "../../utils/App";
import logo from "../../images/randomLogo.png";
import profilePicture from "../../images/hollandfieldssolo.jpeg";

export const Header = (props) => {
    const { height, width } = useWindowDimensions();

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
                className={fonts.heading}
                style={{
                    display: "flex",
                    padding: "3.2rem 0 0 0",
                    alignItems: "center",
                    gap: "0.625rem",
                    fontWeight: "bold",
                    fontSize: 40,
                }}>
                ee
            </div>
        </div>
    )
}