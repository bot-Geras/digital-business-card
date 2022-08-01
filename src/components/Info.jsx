import React from "react";
import MeImage from "../assets/me.png"
import Mail from "../assets/mail.svg"
import LinkedIn from "../assets/linkedin.svg"

 function Info() {
    return (
        <div className="info">
            <img src={MeImage} className="info--image" />
            <h2 className="info--name">Brian David</h2>
            <h3 className="info--title">Frontend Developer</h3>
            <h3 className="info--email">briandave771@gmail.com</h3>
            <a href="#" className="btn info--btn_email">
                <img src={Mail} className="img--svg"/>Email</a>
            <a href="#" className="btn info--btn_linkedin">
                <img src={LinkedIn} className="img--svg"/>LinkedIn</a>
    
        </div>
    )
        
}

export default Info