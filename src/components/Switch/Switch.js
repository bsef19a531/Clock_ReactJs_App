import styles from "./Switch.module.css";

const Switch = (props) => {
    const styleSwitch = `form-check form-switch ${styles.switch}`;
    return (
        <div className={styleSwitch} >
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.title}</label>
        </div >
    )
}

export default Switch;