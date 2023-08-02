import "../../styles/font.css";
import {DownRes} from "../common/clickable";
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
                <div className="contactDeet"
                     style={{
                         marginLeft:"1.12rem",
                         textAlign: "left",
                         marginTop:".8rem",
                     }}>
                    <p className="contactMeans" style={{margin:"0 0 0.4rem 0"}}>{props.item}</p>
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
        <div className="download">
            <DownRes className="themedButton"
                    href="https://uosjapuelks.github.io/anderson/files/Resume_Anderson_Leong.pdf"
                    style={{padding: "0.625rem 1.25rem", display: "inline-flex", }}
            > <DownloadLogo/>Download Resume</DownRes>
        </div>
    )
}

