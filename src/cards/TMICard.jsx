import Card from "../components/Card";
import React from "react";

export default function TMICard() {
    return (
        <Card helpers={{bottom: null, right: null, left: null, top: "RETURN"}}>
            - 생일 1월 24일<br/>
            - 일본어 공부중<br/>
            - 샤인머스켓 좋아함<br />
            - 마인크래프트 좋아함<br />
            - 수학 좋아함<br />
            - 키가 176cm<br />
            - 몸이 병들어가는 중<br />

        </Card>
    )
}