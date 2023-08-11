import {ContentCard} from "../../components/layout/info";
import {YoutubeEmbed} from "../../utils/video";
import data from "../../assets/portfolio.json";
import {DownRes, VisitGit} from "../../components/common/clickable";
import "../../styles/font.css";

export const Courses = (props) => {
    const project = data.courses;
    return (
        <ContentCard title={project.shortenedName}>
            <div style={{overflowY:"auto",height:"80%",}}>
                <div className="res-role">{project.name}</div>
                <div className="res-company">
                    <ol>
                        <li>
                            CS2107 Intorduction to Information Security
                            <ol style={{listStyleType:"lower-alpha"}}><li>

                            </li></ol>
                        </li>
                    </ol>
                    <br/><br/>
                </div>
            </div>
        </ContentCard>    )
}