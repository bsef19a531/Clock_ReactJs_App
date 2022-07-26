import styles from "./AnalogueClock.module.css"

const AnalogueClock = () => {
    return (
        <div className={styles.analogue_clock}>
            <div className={styles.hour}></div>
            <div className={styles.minute}></div>
            <div className={styles.second}></div>
        </div>
    )
}

export default AnalogueClock;