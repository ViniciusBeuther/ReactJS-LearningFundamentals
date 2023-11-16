import ButtonComponent from "../ButtonComponent/ButtonComponent"
import InformationComponent from "../../components/InformationComponent/InformationComponent";
import ProfileImg from "../ProfileImage/ProfileImg";
import TitleComponent from "../TitleComponent/TitleComponent";
import style from "../TitleComponent/index.module.css"
import { useState } from "react";



export default function ProfileComponent({ profileImage, fullname, description, phone, email, gitURL, linkedinURL, instagramURL }){
    // [valor, funcaoModificadora]
    const [followText, setFollowText] = useState("Follow")
    
    function handleClick(ev) {
        alert('Clicked')
        setFollowText("Following")
    }
    
    return(
<>
    <div style={
        {
        background: "#F9F9F9",
        height: "650px",
        width: "450px",
        display: 'flex',
        alignItems: "center",
        flexDirection: 'column',
        borderRadius: '35px'
        }
    }>
        <ProfileImg imageUrl={profileImage} />
        <TitleComponent >
            <h1>{fullname}</h1>
            <button
                className={style.followButton}
                onClick={handleClick}
            >
                {followText}
            </button>
        </TitleComponent>
        <InformationComponent description={description} phone={phone} email={email} />
        
        <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        flexDirection: "column"
        }}>
        <ButtonComponent textContent={"GitHub"} url={gitURL}/>
        <ButtonComponent textContent={"Linkedin"} url={linkedinURL} />
        <ButtonComponent textContent={"Instagram"} url={instagramURL} />
        </div>

    </div>
</>
    )


}