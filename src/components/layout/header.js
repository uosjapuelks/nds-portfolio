import fonts from "../../styles/font.module.css";
import {useWindowDimensions} from "../../utils/App";

export const Header = (props) => {
    const { height, width } = useWindowDimensions();

    return (
        <div
            style={{
                display: "flex",
                width: {width},
                height: "6.5rem",
                justifyContent: "space-between",
                alignItems: "center",
                flexShrink: "0",
                color:"black",
                padding: "1.13rem 0 2.25rem 0",
            }}
        >
            <div
                className={fonts.heading}
                style={{
                    display: "flex",
                    padding: "1.25rem 0rem",
                    alignItems: "center",
                    gap: "0.625rem",
                    fontWeight: "bold",
                    fontSize: 40,
                }}>
                Namecard . Kom
            </div>
        </div>
    )
}