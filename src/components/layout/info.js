import {Maincard, Themed} from "../common/clickable";
import "../../styles/font.css";
import {MainLine} from "../common/icons";

//TODO: Add more portfolio if possible
//TODO: Fix left portfolio contents arrangements (desktop n mobile)
//TODO: shrink mobile profile

export const ContentCard = (props) => {
    return (
        <Maincard>
            <div style={{display:"flex", marginBottom:"1rem",}}>
                <div className="title">
                    {props.title}
                </div>
                <MainLine/>
            </div>
            {props.children}
        </Maincard>
    )
}


