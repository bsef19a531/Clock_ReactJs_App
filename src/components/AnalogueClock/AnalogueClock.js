import styles from "./AnalogueClock.module.css"
import React from "react";
import { useState, useEffect } from "react";

const AnalogueClock = () => {


    const [currentHourRotation, setHourRotation] = useState('');
    const [currentMinuteRotation, setMinuteRotation] = useState('');
    const [currentSecondRotation, setSecondRotation] = useState('');



    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hourRotation = (hours * 30) + (minutes / 2);
    let minuteRotation = 6 * minutes;
    let secondRotaion = 6 * seconds;


    const updateRotaion = () => {

        setHourRotation(hourRotation);
        setMinuteRotation(minuteRotation);
        setSecondRotation(secondRotaion);
    }

    const IntervalTime = setInterval(updateRotaion, 1000);

    useEffect(() => {
        clearInterval(IntervalTime);
    }, [currentSecondRotation, currentMinuteRotation, currentHourRotation]);

    return (
        <div className={styles.analogue_clock}>
            <div className={styles.hour} style={{ transform: `rotate(${currentHourRotation}deg)` }}></div>
            <div className={styles.minute} style={{ transform: `rotate(${currentMinuteRotation}deg)` }}></div>
            <div className={styles.second} style={{ transform: `rotate(${currentSecondRotation}deg)` }}></div>
        </div>
    )
}

export default AnalogueClock;