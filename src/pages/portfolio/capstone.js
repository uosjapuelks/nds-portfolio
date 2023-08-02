import {ContentCard} from "../../components/layout/info";
import {YoutubeEmbed} from "../../utils/video";
import data from "../../assets/portfolio.json";
import {CheckReport, VisitGit} from "../../components/common/clickable";

export const Capstone = (props) => {
    const project = data.cg4002;
    return (
        <ContentCard title={project.shortenedName}>
            <div style={{overflowY:"auto",height:"80%",}}>
            {project.youtube ? <YoutubeEmbed embedId={project.youtube}/> : null}

            <VisitGit project={project}/>
            <div className="res-role">{project.name}</div>
                <div className="res-company">
                    This Project was tasked to us in CG4002 Capstone Project for Computer Engineering Undergraduates.
                    <br/><br/>
                    The systems allows for gestures to be input as action commands such as Shield, Grenade, or Reload,
                    <br/><br/>
                    I was in charge of deploying Machine Learning Models, extracting the weights and biases to program the FPGA accelerator and integrating them into the game engine. I also undertook the responsibility of ensuring correct messages being sent to the Evaluation server while not compromising gameplay by taking up the role to debug and program the game engine component as well.
                    <br/><br/>
                    The system was made using python, where communication with server, and relay laptops utilized TCP/IP. The Artificial Intelligence made use of an accelerator attached to the Ultra96 FPGA programmed with trained weights from data collected from all 5 members and a few additional people for generalisability. The game engine also runs on the Ultra96 FPGA which houses the accelerator, and sends the game states to an Evaluation server to be verified for correctness and latency of our gesture recognition system. Out project proved to be very, if not the most generalisable out of all teams during this run of the module/course, predicting 39 out of 40 actions right by the final demo where random players outside of training datasets were chosen as players for evaluation.
                    <br/><br/>
                </div>

                <CheckReport src={project.report}> See Full Report </CheckReport>
            <a>Link to additional component involved here: <br/></a>
            <a href={project.additionalLink}
               style={{textDecoration:"none"}} target="_blank">
                External Communication Component (inclusive of Game Engine Component)</a>
            </div>
        </ContentCard>
    )
}