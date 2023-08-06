import {DynamicCard} from "../components/portfolio";
import portfoliodata from "../assets/portfolio.json";
import {Outlet} from "react-router-dom";
import {ContentCard} from "../components/layout/info";
import "../styles/portfolio.css"

//TODO: Each portfolio's details
export const Portfolio = (props) => {
    return (
        <Outlet/>
    )
}

export const PortfolioMain = (props) => {
    return (
        <ContentCard title={"Portfolio"}>
            <div className="portfolio-whole">
                <div className="portfolio-container" >
                    {portfoliodata.introlist1.map((items) => {
                        return <DynamicCard href={items.href}
                                            src={require(`../images/portfolio/covers/${items.src}`)}
                                            color={items.color}
                                            role={items.role}> {items.project} </DynamicCard>
                    })}
                </div>
                <div className="portfolio-container" >
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