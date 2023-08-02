import {FixedCard, DynamicCard} from "../components/portfolio";
import ee2026 from "../images/portfolio/covers/BoardIntro.jpg";
import cg2271 from "../images/portfolio/covers/2271Intro.png";
import cg4002 from "../images/portfolio/covers/CG4002Group.png";
import fridget from "../images/portfolio/covers/FridgetIntro.jpg";

//TODO: Each portfolio's details
export const Portfolio = (props) => {
    return (
        <div style={{height:"80%", display:"flex", justifyContent:"space-evenly", overflowY:"auto"}}>
            <div style={{display:"auto"}}>
                <DynamicCard href="/projects" src={cg4002} color="DeepSat" role="Artificial Intelligence"> Gesture Controlled Laser Tag </DynamicCard>
                <DynamicCard href="/resume" src={ee2026} color="LightSat" role="Digital Design"> FPGA Mini Project </DynamicCard>
                {/*<DynamicCard color="Alt"> Short </DynamicCard>*/}
            </div>
            <div style={{display:"auto",}}>
                <DynamicCard href="/resume" src={fridget} color="Light" role="Software Engineer"> CLI Application </DynamicCard>
                <DynamicCard href="/resume" src={cg2271} color="Sat" role="Real-Time Operating Systems"> SelfDriving / Remote Controlled Mini-Car </DynamicCard>
            </div>
        </div>
    )
}