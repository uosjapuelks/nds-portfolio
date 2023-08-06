import {ResCard, ResumeTitle} from "../components/resume";
import gradHat from "../images/icons/icon-park-outline_degree-hat.svg";
import briefcase from "../images/icons/humbleicons_briefcase.svg";
import tech from "../images/icons/techStack.png";
import resData from "../assets/resume.json";
import {ContentCard} from "../components/layout/info";

//TODO: cleanup Resume code
export const Resume = (props) => {
    const Layout = props.mobile ? MobileResume : DesktopResume;
    return (
        <ContentCard title={"Resume"}>
        <div className="res-mainbox" style={{width:"100%"}}>
            <Layout/>
            <div style={{height:"20vh", display:"normal", overflowX:"auto", width:"100%"}}>
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

const DesktopResume = (props) => {
    return (
        <div style={{height:"55vh", display:"flex", justifyContent:"flex-start", overflowY:"auto"}}>
            <div className="res-mainbox" style={{width:"50%", height:"100%"}}>
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
    )
}

const MobileResume = (props) => {
    return (
        <>
        <div style={{height:"30vh", overflowY:"hidden"}}>
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
        <div style={{height:"30vh", overflowY:"hidden"}}>
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


        </>
    )
}