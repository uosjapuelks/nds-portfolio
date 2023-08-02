import "../styles/resume.css";

export const ResumeTitle = (props) => {
    return (
        <div
            className="res-overallTitle"
            style={{width:"100%"}}>
            <img className="resume-logo" src={props.src} style={{margin:".5rem"}}/>
            <div className="resume-title">
                {props.children}
            </div>
        </div>
    )
}

export const ResCard = (props) => {
    return (
        <div className={props.color}
             style={{
                 width:"80%",
                 padding:"1.2rem 0 1.2rem 1.5rem",
                 marginBottom:"1.2rem",
             }}
        >
            <a className="res-date"> {props.date} <br/></a>
            {props.level ? <a className="res-level">{props.level}<br/></a> : null}
            <a className="res-role"> {props.role} <br/></a>
            <a className="res-company"> {props.company} <br/></a>
            {props.misc ? <li className="res-misc">{props.misc}<br/></li> : null}
            {props.children}
        </div>
    )
}