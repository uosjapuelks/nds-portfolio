import React from "react";
import "../styles/minicard.css";

//TODO: Portfolio component details
export const DynamicCard = (props) => {
    return (
        <a href={props.href} className="portCard">
            <div
                className= {props.color}
                style={{
                     width: "21.875rem",
                     margin: "2rem 0",
                }}>
                <img src={props.src} className="portfolio-click shortPic" style={{position:"relative"}}></img>
                <CardInfo role={props.role}>{props.children}</CardInfo>
            </div>
        </a>
    )
}

export const FixedCard = (props) => {
    return (
        <>
            <div className= {props.color}
                 style={{
                     width: "21.875rem",
                     height: "12.5rem",
                     margin: "2rem 0",
                 }}>
                <img src={props.src} className="portfolio-click longPic" style={{position:"relative"}}></img>
                {props.children}
            </div>
        </>
    )
}

export const CardInfo = (props) => {
    return (
        <div className="portfolio-name"
            style={{
            margin: "1rem 0.5rem",
            paddingBottom:"1rem",
        }}>
            <div className="portfolio-role">{props.role}</div>
            {props.children}
        </div>
    )
}

//TODO: Navbar?

