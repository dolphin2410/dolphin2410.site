import Card from "../components/Card";
import React from "react";

export default function ProfileCard() {
    return (
        <Card helpers={{bottom: "TMI", right: "ABOUT ME", left: "PROJECTS", top: "RETURN"}}>
            <div className="gh-user">
                <h1>dolphin2410</h1>
                <p>잡다한 개발자</p>
                <br />
                <br />
                <div className="sns-container">
                <span className="header-github-link" onClick={() => window.open("https://github.com/dolphin2410", "_blank")}></span>
                <span className="header-discord-link" onClick={() => window.open("https://discord.gg/g3MmHTUDeF", "_blank")}></span>
                <span className="header-twitter-link" onClick={() => window.open("https://twitter.com/dolgore2410", "_blank")}></span>
                </div>
            </div>


        </Card>
    )
}