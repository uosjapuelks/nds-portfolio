import {ResCard, ResumeTitle} from "../components/resume";
import gradHat from "../images/icons/icon-park-outline_degree-hat.svg";
import briefcase from "../images/icons/humbleicons_briefcase.svg";
import tech from "../images/icons/techStack.png";
import resData from "../assets/resume.json";
import {ContentCard} from "../components/layout/info";

//TODO: cleanup Resume code
export const Resume = (props) => {
    return (
        <ContentCard title={"Resume"}>
        <div className="res-mainbox" style={{width:"100%"}}>
            <div style={{height:"55%", display:"flex", justifyContent:"flex-start", overflowY:"hidden"}}>
                <div className="res-mainbox" style={{width:"50%"}}>
                    <ResumeTitle src={gradHat} > Education </ResumeTitle>
                    <div className="res-scroll">
                    {resData.bachelor.map((bachelor) => {
                        return <ResCard color="DeepSat"
                                        date={bachelor.date}
                                        role={bachelor.field}
                                        company={bachelor.university}
                                        level={bachelor.degree}
                                        misc={bachelor.misc}
                        />
                    })}
                    </div>
                </div>
                <div className="res-mainbox" style={{width:"50%"}}>
                    <ResumeTitle src={briefcase}> Experience </ResumeTitle>
                    <div className="res-scroll">
                        {resData.experience.map((experience) => {
                            return <ResCard color="Sat"
                                            misc={experience.elab}
                                            date={experience.date}
                                            role={experience.role}
                                            company={experience.company}/>
                        })}
                    </div>
                </div>
            </div>
            <div style={{height:"25%", display:"normal", overflowX:"auto", width:"55vw"}}>
                <ResumeTitle src={tech}> Tech Stack </ResumeTitle>
                <div className="res-sidescroll">
                    {resData.techstack.map((techstack) => {
                        return <div className="stack">{techstack}</div>
                    })}
                </div>
            </div>
        </div>
        </ContentCard>
    )
}