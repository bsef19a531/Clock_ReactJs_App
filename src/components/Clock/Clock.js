import { useState } from "react";

const Clock = () => {

    let time = new Date().toLocaleTimeString();

    const [currentTime, setcurrentTime] = useState(time);


    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setcurrentTime(time);
    }

    setInterval(updateTime, 1000);

    return (
        <div>
            <input value={currentTime} />
        </div>
    )
}

export default Clock;