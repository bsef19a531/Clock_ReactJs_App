import { useState } from "react";
import styles from "./Clock.module.css";
import ClockDot from "./ClockDot/ClockDot";

const Clock = () => {

    let time = new Date().toLocaleTimeString();
    let day = new Date().getDay();
    let date = new Date().getDate();
    let year = new Date().getFullYear();
    let month = new Date().getMonth();

    const monthList = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const [currentTime, setcurrentTime] = useState(time);


    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setcurrentTime(time);
    }

    setInterval(updateTime, 1000);

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