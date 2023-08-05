import {Header, MobileHeader} from "./header";
import {useWindowDimensions} from "../../utils/App";
import {Profile} from "./profile";
import {NavCard} from "./navcard";

export const LayoutDesktop = (props) => {
    return (
        <div style={{
            margin: "0 0 0 5vw",
            height: "auto",
            minWidth: "16rem",
            minHeight: "48rem",
        }}>
            <Header/>
            <div style={{display:"flex"}}>
                <Profile/>
                <div style={{marginTop:"-7rem", width:"100%"}}>
                    <NavCard/>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export const LayoutMobile = (props) => {

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center",}}>
            <div style={{display:"normal"}}>
            <MobileHeader/>
            <div style={{
                margin: "0 5vw 0 5vw",
                // height: "auto",
                // minWidth: "16rem",
                // minHeight: "48rem",
            }}>
                {/*<div style={{display:"auto"}}>*/}
                    <Profile/>
                    {/*<div style={{marginTop:"-7rem", width:"100%"}}>*/}
                    {/*    {props.children}*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
            </div>
        </div>
    );
}
