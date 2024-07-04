import "../styles/about.css";
import aboutData from "../assets/about.json";
import {ContentCard} from "../components/layout/info";

export const About = (props) => {
    return (
        <ContentCard title={"About Me"}>

        <div style={{overflowY:"auto", height:"80%", }}>
            <div className="about-body"
                style={{textAlign:"justify"}}>
                Hey there! I am a <b>Computer Engineering</b> Bachelor graduate from the <b>National University of Singapore</b>, graduating <b>August 2024</b>. <br/>
                I am hoping to make a difference via Software or related technologies. To achieve this, I have diligently honing my skills while doing university projects, and broadening my exposure to different technologies by participating in Hackathons. <br/>
                These experiences have exposed me to frameworks like the <b>AGILE</b> workflow, and technologies such as <b>Artificial Intelligence, Information Security and Cryptology, Networking, Web Development, Parallel Programming, Distributed Systems</b>, etc. <br/>
                Academics aside, I also partake in a multitude of co-curricular activities to hone my soft skills such as taking up leadership roles or joining planning committees. <br/>
                I believe my experiences and skills can be of value in projects, and the projects pushes me towards improvements which I seek.
            </div>

            <div className="about-sectioning" style={{marginBottom:"1.2rem"}}>
                Areas of Interest
            </div>
            <div className="about-flex">
            {aboutData.interests.map((interests) => {
                return <div className="stack">{interests}</div>
            })}
            </div>


            <div className="about-sectioning">
                Availability
            </div>
            <div className="about-body" style={{textAlign:"justify", marginBottom:"2.5rem"}}>
                <a style={{margin:"0", padding:"0", fontSize:"1.2rem"}}>Full-Time <b>employment</b> starting: <b>Immediate</b></a>
            </div>

        </div>
        </ContentCard>
    )
}
