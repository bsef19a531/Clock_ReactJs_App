import Clock from "./components/Clock/Clock";
import Switch from "./components/Switch/Switch";
import AnalogueClock from "./components/AnalogueClock/AnalogueClock";

function App() {
  return (
    <>
      < Clock />
      <Switch title="Light Mode" />
      {/* <AnalogueClock /> */}
    </>
  );
}

export default App;