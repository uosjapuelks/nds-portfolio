import fonts from "../../styles/font.module.css";
import {Themed} from "../common/clickable";
import {DownloadLogo} from "../common/icons";

export const ContactDetails = (props) => {
    return (
        <div style={{
            height:"25%",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            // background: "grey"
        }}>
            <div style={{display:"flex", marginLeft: "15%",
                alignItems:"center", height:"100%",
            }}
            >
                <props.src/>
                <div className={fonts.contactDeet}
                     style={{
                         marginLeft:"1.12rem",
                         textAlign: "left",
                         marginTop:".8rem",
                     }}>
                    <p className={fonts.contactMeans} style={{margin:"0 0 0.4rem 0"}}>{props.item}</p>
                    {props.children}
                </div>
            </div>
            <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
                <div style={{width: "65%", height: "0.0625rem", background:"#E3E3E3"}}/></div>
        </div>
    )
}

export const DownldRes = (props) => {
    return (
        <div className={fonts.download}>
            <Themed className={fonts.themedButton}> <DownloadLogo/>Download Resume</Themed>
        </div>
    )
}
