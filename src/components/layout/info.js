import {Maincard, Themed} from "../common/clickable";
import "../../styles/font.css";
import {MainLine} from "../common/icons";

export const ContentCard = (props) => {
    return (
        <Maincard>
            <div style={{display:"flex", marginBottom:"2rem",}}>
                <div className="title">
                    {props.title}
                </div>
                <MainLine/>
            </div>
            {props.children}
        </Maincard>
    )
}


