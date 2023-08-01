import {FixedCard, DynamicCard} from "../components/portfolio";
import ee2026 from "../images/portfolio/EE2026/BoardIntro.jpg";
import cg2271 from "../images/portfolio/CG2271/2271Intro.png";
import cg4002 from "../images/portfolio/CG4002/CG4002Group.png";
import fridget from "../images/portfolio/Fridget/FridgetIntro.jpg";

export const Portfolio = (props) => {
    return (
        <div style={{height:"80%", display:"flex", justifyContent:"space-evenly", overflowY:"auto"}}>
            <div style={{display:"auto"}}>
                <DynamicCard src={cg4002} color="DeepSat" role="Artificial Intelligence"> Gesture Controlled Laser Tag </DynamicCard>
                <DynamicCard src={ee2026} color="LightSat" role="Digital Design"> FPGA Mini Project </DynamicCard>
                {/*<DynamicCard color="Alt"> Short </DynamicCard>*/}
            </div>
            <div style={{display:"auto",}}>
                <DynamicCard src={fridget} color="Light" role="Software Engineer"> CLI Application </DynamicCard>
                <DynamicCard src={cg2271} color="Sat" role="Real-Time Operating Systems"> SelfDriving / Remote Controlled Mini-Car </DynamicCard>
            </div>
        </div>
    )
}