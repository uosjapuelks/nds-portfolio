import {DynamicCard} from "../components/portfolio";
import ee2026 from "../images/portfolio/covers/BoardIntro.jpg";
import cg2271 from "../images/portfolio/covers/2271Intro.png";
import cg4002 from "../images/portfolio/covers/CG4002Group.png";
import fridget from "../images/portfolio/covers/FridgetIntro.jpg";
import portfoliodata from "../assets/portfolio.json";

//TODO: Each portfolio's details
export const Portfolio = (props) => {
    return (
        <div style={{height:"80%", display:"flex", justifyContent:"space-evenly", overflowY:"auto"}}>
            <div style={{display:"auto"}}>
                {portfoliodata.introlist1.map((items) => {
                    return <DynamicCard href={items.href}
                                 src={require(`../images/portfolio/covers/${items.src}`)} 
                                 color={items.color} 
                                 role={items.role}> {items.project} </DynamicCard>
                })}
                {/*<DynamicCard color="Alt"> Short </DynamicCard>*/}
            </div>
            <div style={{display:"auto",}}>
                {portfoliodata.introlist2.map((items) => {
                    return <DynamicCard href={items.href}
                                        src={require(`../images/portfolio/covers/${items.src}`)}
                                        color={items.color}
                                        role={items.role}> {items.project} </DynamicCard>
                })}
            </div>
        </div>
    )
}