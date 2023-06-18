import Card from "../components/Card";
import logo from "../logo.png";
import React from "react";

export default function IndexCard() {
    return (
        <Card helpers={{bottom: "SWIPE DOWN", right: null, left: null, top: null}}>
            <img src={logo} alt="LOGO" width="150px" height="150px" />
        </Card>
    )
}