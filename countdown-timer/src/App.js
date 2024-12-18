import "./App.css";
import useTimer from "./hooks/useTimer";
import { useState } from "react";

function App() {
  const [started, setStarted] = useState(false);
  const [secondsEntered, setSecondsEntered] = useState(0);
  const [minutesEntered, setMinutesEntered] = useState(0);
  const [hoursEntered, setHoursEntered] = useState(0);

  const { secondsLeft } = useTimer(
    hoursEntered,
    minutesEntered,
    secondsEntered,
    started,
    setStarted
  );

  const handleStart = () => setStarted(true);

  const handleReset = () => {
    setStarted(false);
    setHoursEntered(0);
    setMinutesEntered(0);
    setSecondsEntered(0);
  };

  const handleUserInput = (e, type) => {
    let valueEntered = Number(e.target.value);
    if (type === "seconds") setSecondsEntered(valueEntered);
    else if (type === "minutes") setMinutesEntered(valueEntered);
    else if (type === "hours") setHoursEntered(valueEntered);
  };
console.log(secondsLeft)
  return (
    <div className="App">
      {started ? (
        <>
          <div>
            <p>Hours Left: {Math.floor(secondsLeft / 3600)}</p>
            <p>Minutes Left: {Math.floor((secondsLeft % 3600) / 60)}</p>
            <p>Seconds Left: {secondsLeft % 60}</p>
          </div>
          <button onClick={handleReset}>Reset</button>
        </>
      ) : (
        <>
          <div>
            <label>H:</label>
            <input
              value={hoursEntered}
              type="text"
              onChange={(e) => handleUserInput(e, "hours")}
            />
          </div>
          <div>
            <label>M:</label>
            <input
              value={minutesEntered}
              type="text"
              onChange={(e) => handleUserInput(e, "minutes")}
            />
          </div>
          <div>
            <label>S:</label>
            <input
              value={secondsEntered}
              type="text"
              onChange={(e) => handleUserInput(e, "seconds")}
            />
          </div>
          <button onClick={handleStart}>Start</button>
        </>
      )}
    </div>
  );
}

export default App;
