import {Header} from "./header";
import {useWindowDimensions} from "../../utils/App";
import {Profile} from "./profile";

export const LayoutDesktop = (props) => {

    return (
        <div style={{
            padding: "0 6.25rem 0 6.25rem",
            background: "#F2F5F9",
            height: "100vh",
            minWidth: "64rem",
            minHeight: "50rem",
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
