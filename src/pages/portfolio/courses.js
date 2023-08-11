import {ContentCard} from "../../components/layout/info";
import data from "../../assets/portfolio.json";
import {DownRes, VisitGit} from "../../components/common/clickable";
import "../../styles/font.css";
import portfoliodata from "../../assets/portfolio.json";
import {DynamicCard} from "../../components/portfolio";

export const Courses = (props) => {
    const project = data.courses;
    return (
        <ContentCard title={project.shortenedName}>
            <div style={{overflowY:"auto",height:"80%",}}>
                <div className="res-role">{project.name}</div>
                <div className="res-company">
                    {portfoliodata.courses.module.map((items) => {
                        return <><ol style={{listStyleType:"disc"}}>
                            <b>{items.courseName}</b>
                            <li>
                                {items.briefContent}
                                <ol style={{listStyleType:"lower-alpha"}}>
                                    <b>Assignments / Projects Included:</b>
                                    {items.examples.map((egs)=> {
                                        return <li>{egs}</li>
                                    })}
                                </ol>
                                <br/>

                                <ol style={{listStyleType:"square"}}>
                                    <b>Technologies/Frameworks/Protocols:</b>
                                    {items.techStack.map((stack)=> {
                                        return <li>{stack}</li>
                                    })}
                                </ol>

                            </li>
                        </ol><br/></>
                    })}
                    <br/><br/>
                </div>
            </div>
        </ContentCard>    )
}