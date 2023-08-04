import {Header} from "./header";
import {useWindowDimensions} from "../../utils/App";
import {Profile} from "./profile";

export const LayoutDesktop = (props) => {

    return (
        <div style={{
            padding: "0 5vw",
            borderRadius: "0 5vw",
            height: "auto",
            minWidth: "16rem",
            minHeight: "48rem",
        }}>
            <Header/>
            <div style={{display:"flex"}}>
                <Profile/>
                <div style={{marginTop:"-7rem", width:"100%"}}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
