import {ContentCard} from "../../components/layout/info";
import data from "../../assets/portfolio.json";
import {CheckReport, VisitGit} from "../../components/common/clickable";

export const Fridget = (props) => {
    const project = data.fridget;
    return (
        <ContentCard title={project.shortenedName}>
            <div style={{overflowY:"auto",height:"80%"}}>
                <img src={require(`../../images/portfolio/${project.image}`)} className="portfolio-click shortPic"
                     style={{position:"relative", width:"100%"}}/><br/>
            <VisitGit project={project}/>
            <div className="res-role">{project.name}</div>
                <div className="res-company">
                    This project is part of a group assignment for CS2113T Software Engineering and Object-Oriented Programming.
                    <br/>
                    Fridget was created to prevent food items expiring in the fridge for users that use it.
                    <br/>
                    The application was made using Java.
                    <br/><br/>
                </div>
                <div className="res-role">Checkout the Following Sites: </div>
                {/*<div style={{display:"flex", justifyContent:"space-between", width:"100%", background:"red"}}>*/}
                <div className="sidescroll">
                    <CheckReport src={project.site}> Main Site </CheckReport>
                    <CheckReport src={project.UG}> User Guide </CheckReport>
                    <CheckReport src={project.DG}> Developer Guide </CheckReport>
                </div>
            </div>
        </ContentCard>
    )
}