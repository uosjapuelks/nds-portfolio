import {Maincard, Themed} from "../common/clickable";
import fonts from "../../styles/font.module.css";
import {MainLine} from "../common/icons";




export const ContentCard = (props) => {
    return (
        <Maincard>
            <div style={{display:"flex", marginBottom:"2rem",}}>
                <div className={fonts.title}>
                    {props.title}
                </div>
                <MainLine/>
            </div>
            {props.children}
        </Maincard>
    )
}


