import {DynamicCard} from "../components/portfolio";
import portfoliodata from "../assets/portfolio.json";
import {Outlet} from "react-router-dom";
import {ContentCard} from "../components/layout/info";

//TODO: Each portfolio's details
export const Portfolio = (props) => {
    return (
        <Outlet/>
    )
}

export const PortfolioMain = (props) => {
    return (
        <ContentCard title={"Portfolio"}>
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
        </ContentCard>
    )
}