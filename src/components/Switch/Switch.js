import styles from "./Switch.module.css";

let switchCondition = true;
const Switch = (props) => {

    const changeState = () => {
        switchCondition = !switchCondition;
        props.set(switchCondition);
    }

    const styleSwitch = `form-check form-switch ${styles.switch}`;
    return (
        <div className={styleSwitch} >
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changeState} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.title}</label>
        </div >
    )
}

export default Switch;