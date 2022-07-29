import { useState, useEffect } from "react";
import styles from "./Clock.module.css";
import ClockDot from "./ClockDot/ClockDot";

const Clock = () => {

    let currentDate = new Date();
    let time = currentDate.toLocaleTimeString();
    let day = currentDate.getDay();
    let date = currentDate.getDate();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();

    const monthList = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const [currentTime, setcurrentTime] = useState(time);

    useEffect(() => {
        clearInterval(settedInterval);
        // console.log("runDigital");
    }, [currentTime]);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setcurrentTime(time);
    }

    const settedInterval = setInterval(updateTime, 1000);

    return (
        <div className={styles.clock}>
            <h1 className={styles.clock_heading}>React Clock</h1>
            <div className={styles.clock_border}>
                <div className={styles.clock_time}>
                    {currentTime}
                </div>
                <ClockDot dotValue="●" day={dayList[day]} month={monthList[month]} date={date++} year={year} />
            </div>
        </div>
    )
}

export default Clock;