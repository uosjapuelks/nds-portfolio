import '../../styles/font.css';
import profilePicture from "../../images/hollandfieldssolo.jpeg";
import {SocialIcon} from 'react-social-icons';
import {PhoneLogo, EmailLogo, LocationLogo} from "./icons";
import {ContactDetails, DownldRes} from "../specificLayouts/profile";

const ProfilePic = (props) => {
    return (
        <div style={{display:"flex", justifyContent:"center",}}>
            <img
                src={profilePicture}
                style={{
                    marginTop:"-6.25rem",
                    width: "12.5rem",
                    height: "12.5rem",
                    flexShrink: "0",
                    objectFit: "scale-down",
                    borderRadius: "1.25rem",
                    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                }}
            />
        </div>
    )
}

export const ProfilCard = (props) => {
    return (
        <div style={{
            width: "20vw",
            height: "69vh",
            minHeight: "36.5rem",
            minWidth: "15rem",
            flexShrink: "0",
            borderRadius: "1.25rem",
            background: "#FFF",
            boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.25)",
            marginTop: "6.25rem",
            // marginBottom: "3.25rem",
            justifyContent:"center",
        }}
        >
            <ProfilePic/>
            <h1 className="profileName"
                style={{
                    width:"100%",
                    textAlign: "center",
                    margin:"0",
                }}
            >
                Anderson Leong
            </h1>
            <h2 className="role"
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
                <SocialIcon url="https://www.linkedin.com/in/andersonleong/" target="_blank"/>
                <SocialIcon url="https://github.com/uosjapuelks/" target="_blank"/>
                <SocialIcon url="mailto:anderson@u.nus.edu" target="_blank"/>
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

const MobileProfilePic = (props) => {
    const viz = props.mobile ? "-100%" : "0%";
    return (
        <div style={{display:"flex", justifyContent:"center", marginTop: {viz},}}>
            <img
                src={profilePicture}
                style={{
                    marginTop:"-6.25rem",
                    width: "12.5rem",
                    height: "12.5rem",
                    flexShrink: "0",
                    objectFit: "scale-down",
                    borderRadius: "1.25rem",
                    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                }}
            />
        </div>
    )
}

export const MobileProfileCard = (props) => {
    return (
        <div style={{
            marginTop:"12.5rem",
            width: "80vw",
            height: "42.5rem",
            borderRadius: "1.25rem",
            background: "#FFF",
            boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.25)",
        }}
        >
            <MobileProfilePic/>
            <h1 className="profileName"
                style={{
                    width:"100%",
                    textAlign: "center",
                }}
            >
                Anderson Leong
            </h1>
            <h2 className="role"
                style={{
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
                height:"3rem",
                width: "100%",
                justifyContent: "center",
            }}>
                <SocialIcon url="https://www.linkedin.com/in/andersonleong/" target="_blank"/>
                <SocialIcon url="https://github.com/uosjapuelks/" target="_blank"/>
                <SocialIcon url="mailto:anderson@u.nus.edu" target="_blank"/>
            </div>
            <div style={{
                height: "20rem",
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