import Card from "../components/Card";
import React from "react";

export default function ProjectsCard() {
    return (
        <Card helpers={{bottom: null, right: "RETURN", left: null, top: null}}>
            <div className="projects-container">
                <div onClick={() => window.open("https://github.com/monun-docs/monun-docs", "_blank")}>monun-docs</div>
                <div onClick={() => window.open("https://github.com/dolphin2410/server-script", "_blank")}>server-script</div>
            </div>
        </Card>
    )
}