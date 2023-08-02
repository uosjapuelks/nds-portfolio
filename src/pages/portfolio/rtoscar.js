import {ContentCard} from "../../components/layout/info";
import {YoutubeEmbed} from "../../utils/video";
import data from "../../assets/portfolio.json";
import {DownRes} from "../../components/common/clickable";
import "../../styles/font.css";

export const Rtoscar = (props) => {
    const project = data.rtoscar;
    return (
        <ContentCard title={project.shortenedName}>
            <div style={{overflowY:"auto",height:"80%",}}>
                {project.youtube ? <YoutubeEmbed embedId={project.youtube}/> : null}
                <br/><br/><DownRes className="gitlink"
                   style={{padding: "0.625rem 1.25rem"}}
                   href={project.git} target="_blank"
                   style={{textDecoration:"none"}}>
                    Click to visit the Github Repo</DownRes>
                <br/><br/><br/>
                <div className="res-role">{project.name}</div>
                <div className="res-company">
                    This is an ESP32 Wi-Fi Microcontroller is pre-programmed to connect to a hotspot. An app can then be used to establish connection with the robot and start giving intrsuctions to it.
                    <br/><br/>
                    Keil uVision5 was used along with languages C and C++ to program the robot. It uses KL25Z Freedom board integrated with an ARM microcontroller with Real Time Operating Systems along with interrupts to function.
                    <br/><br/>
                    An ultrasonic sensor is mounted at the front of the robot for sensing obstacles.
                    <br/><br/>
                </div>
            </div>
        </ContentCard>    )
}