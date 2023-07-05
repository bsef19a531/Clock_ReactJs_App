import Clock from "./components/Clock/Clock";
import Switch from "./components/Switch/Switch";
import { useState } from "react";
import AnalogueClock from "./components/AnalogueClock/AnalogueClock";

let switchClock = true;

function App() {

  const [currentClock, setCurrentClock] = useState(switchClock);
  const setClockType = (switchCondition) => {
    setCurrentClock(!switchCondition);
  }

  return (
    <>
      {currentClock ? <AnalogueClock /> : < Clock />}
      <Switch title="Clock Mode" set={setClockType} />
      {/* <AnalogueClock /> */}
    </>
  );
}

export default App;