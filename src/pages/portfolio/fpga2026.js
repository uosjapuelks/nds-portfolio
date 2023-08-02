import {ContentCard} from "../../components/layout/info";
import {YoutubeEmbed} from "../../utils/video";
import data from "../../assets/portfolio.json";
import {CheckReport, VisitGit} from "../../components/common/clickable";

export const Minifpga = (props) => {
    const project = data.cg4002;
    return (
        <ContentCard title={project.shortenedName}>
            <div style={{overflowY:"auto",height:"80%",}}>

            <VisitGit project={project}/>
            <div className="res-role">{project.name}</div>
                <div className="res-company">
                    I made this as part of a group project assignment for EE2026 Digital Design. Verilog code and Vivado was used to program the FPGA Board.
                    <br/><br/>
                    The Board can then play 3 different modes and respond to the user’s inputs to the buttons and microphone that is attached to the board.
                    <br/><br/>
                </div>

                {/*<CheckReport src={project.report}> See Full Report </CheckReport>*/}
            </div>
        </ContentCard>
    )
}