import styles from "./AnalogueClock.module.css"
import React from "react";
import { useState, useEffect, useReducer, useRef } from "react";

const AnalogueClock = () => {

    const [currentHourRotation, setHourRotation] = useState(new Date().getHours() * 30 + new Date().getMinutes() / 2);
    const [currentMinuteRotation, setMinuteRotation] = useState(new Date().getMinutes() * 6);
    const [currentSecondRotation, setSecondRotation] = useState(new Date().getSeconds() * 6);


    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            const hourRotation = hours * 30 + minutes / 2;
            const minuteRotation = 6 * minutes;
            const secondRotation = 6 * seconds;

            setHourRotation(hourRotation);
            setMinuteRotation(minuteRotation);
            setSecondRotation(secondRotation);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className={styles.analogue_clock}>
            <div className={styles.hour} style={{ transform: `rotate(${currentHourRotation}deg)` }}></div>
            <div className={styles.minute} style={{ transform: `rotate(${currentMinuteRotation}deg)` }}></div>
            <div className={styles.second} style={{ transform: `rotate(${currentSecondRotation}deg)` }}></div>
        </div>
    )
}

export default AnalogueClock;