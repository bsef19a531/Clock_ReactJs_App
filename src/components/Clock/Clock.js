import { useState } from "react";
import styles from "./Clock.module.css";

const Clock = () => {

    let time = new Date().toLocaleTimeString();

    const [currentTime, setcurrentTime] = useState(time);


    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setcurrentTime(time);
    }

    setInterval(updateTime, 1000);

    return (
        <div className={styles.clock}>
            <h1 className={styles.clock_heading}>React Clock</h1>
            <div className={styles.clock_time}>
                {currentTime}
            </div>
        </div>
    )
}

export default Clock;