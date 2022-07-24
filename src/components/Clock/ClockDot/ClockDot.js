import { useState } from "react";
import styles from "./ClockDot.module.css";

const ClockDot = (props) => {

    const [currentDot, setDotState] = useState(props.dotValue);
    const [currentDay, setCurrentDay] = useState("MON");
    const [currentMonth, setCurrentMonth] = useState("JAN");
    const [currentDate, setCurrentDate] = useState("1");
    const [currentYear, setCurrentYear] = useState("2022");


    if (currentDay !== props.day) {
        setCurrentDay(props.day);
        setCurrentDate(props.date);
        if (currentMonth !== props.month) {
            setCurrentMonth(props.month);
            if (currentYear !== props.year) {
                setCurrentYear(props.year);
            }
        }
    }

    return (
        <div className={styles.clock}>
            <span className={styles.clock_date}>{currentDay}</span>
            <span className={styles.clock_date}>{currentDate}</span>
            <span className={styles.clock_date}>{currentMonth}</span>
            <span className={styles.clock_date}>{currentYear}</span>
            <span className={styles.clock_dot}>{currentDot}</span>
        </div>
    )
}

export default ClockDot; 