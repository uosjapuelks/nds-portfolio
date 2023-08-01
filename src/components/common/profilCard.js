import fonts from '../../styles/font.module.css';
import profilePicture from "../../images/hollandfieldssolo.jpeg";
import {SocialIcon} from 'react-social-icons';
import {PhoneLogo, EmailLogo, LocationLogo} from "./icons";
import {ContactDetails, DownldRes} from "../specificLayouts/profile";
import {Themed} from "./clickable";

export const ProfilePic = (props) => {
    return (
        <img
            src={profilePicture}
            style={{
                marginLeft: "2.75rem",
                width: "12.5rem",
                height: "12.5rem",
                flexShrink: "0",
                objectFit: "scale-down",
                borderRadius: "1.25rem",
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
        />
    )
}

export const ProfilCard = (props) => {
    return (
        <div style={{
            width: "18rem",
            height: "70vh",
            minHeight: "38.5rem",
            flexShrink: "0",
            borderRadius: "1.25rem",
            background: "#FFF",
            boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.25)",
            marginTop: "-6.25rem",
            marginBottom: "3.25rem",
        }}
        >
            <h1 className={fonts.profileName}
                style={{
                    width:"100%",
                    paddingTop: "6.25rem",
                    textAlign: "center",
                    margin:"0",
                }}
            >
                Anderson Leong
            </h1>
            <h2 className={fonts.role}
                style={{
                    margin: "0",
                    textAlign: "center",
                }}
            >
                <p style={{margin:0}}>Y4 Computer Engineering</p>
                <p style={{marginTop:-15, marginBottom:0}}>National University of Singapore</p>
            </h2>
            <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.56844rem",
                height:"4rem",
                width: "100%",
                justifyContent: "center",
            }}>
                <SocialIcon url="https://www.linkedin.com/in/andersonleong/" />
                <SocialIcon url="github.com/uosjapuelks/" />
                <SocialIcon url="mailto:anderson@u.nus.edu" />
            </div>
            <div style={{
                height: "50%",
                width: "90%",
                margin:"1.12rem 5%",
                borderRadius: "1.25rem",
                background: "#F2F5F9",
            }}>
                <ContactDetails src={PhoneLogo} item={"Phone"}> +65 8856 0076</ContactDetails>
                <ContactDetails src={EmailLogo} item={"Email"}> anderson@u.nus.edu</ContactDetails>
                <ContactDetails src={LocationLogo} item={"Location"}> Singapore</ContactDetails>
                <DownldRes/>
            </div>

        </div>
    )
}