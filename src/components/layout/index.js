import {Header, MobileHeader} from "./header";
import {Profile} from "./profile";
import {MobileNavCard, NavCard} from "./navcard";

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
        <>
            <MobileNavCard/>
            <MobileHeader/>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", paddingBottom:"2rem"}}>
                <div style={{}}>
                        <div style={{marginTop:"6.5rem"}}>
                            {props.children}
                        </div>
                </div>
            </div>
        </>
    );
}
