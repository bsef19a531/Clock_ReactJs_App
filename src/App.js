import Clock from "./components/Clock/Clock";
import Switch from "./components/Switch/Switch";
import { useState } from "react";
import AnalogueClock from "./components/AnalogueClock/AnalogueClock";

let switchClock = true;

function App() {

  const [currentClock, setCurrentClock] = useState(switchClock);
  const setClockType = (switchCondition) => {
    setCurrentClock(switchCondition);
    console.log("hit");
  }

  return (
    <>
      {currentClock ? < Clock /> : <AnalogueClock />}
      <Switch title="Clock Mode" set={setClockType} />
      {/* <AnalogueClock /> */}
    </>
  );
}

export default App;