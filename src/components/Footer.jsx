import React from "react";
import Facebook from "../assets/facebook-icon.png"
import Github from "../assets/github-icon.png"
import Instagram from "../assets/instagram-icon.png"
import Twitter from "../assets/twitter-icon.png"

export default function Footer() {
    return (
        <footer>
            <a href="#"><img src={Twitter}/></a>
            <a href="#"><img src={Facebook}/></a>
            <a href="#"><img src={Instagram}/></a>
            <a href="#"><img src={Github}/></a>
        </footer>
    )
}