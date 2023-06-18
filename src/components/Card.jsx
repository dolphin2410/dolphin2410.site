import React from "react";
import styles from './Card.module.css'

export default function Card(props) {
    return (
        <div className={styles.container}>
            <section className={styles.card}>
                {props.children}
            </section>
            {props.helpers.top != null ? <span className={styles.top}>{props.helpers.top}</span> : null}
            {props.helpers.bottom != null ? <span className={styles.bottom}>{props.helpers.bottom}</span> : null}
            {props.helpers.right != null ? <span className={styles.right}>{props.helpers.right}</span> : null}
            {props.helpers.left != null ? <span className={styles.left}>{props.helpers.left}</span> : null}
        </div>
    )
}