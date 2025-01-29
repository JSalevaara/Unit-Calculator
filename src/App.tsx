import { AreaCalculatorComponent } from "./Components/AreaCalculatorComponent";
import { Header } from "./Components/Header";
import { LengthCalculatorComponent } from "./Components/LengthCalculator";
import { useState } from 'react';

function App() {
  const [selectedCalculator, setSelectedCalculator] = useState("Length");

  const handleCalculatorSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedCalculator(value);
  };

  return (
    <>
      <div>
        <Header></Header>
        <div>
          <label>Selected calculator: </label>
          <select onChange={handleCalculatorSelect}>
            <option value="Length">Length</option>
            <option value="Area">Area</option>
            <option value="Binary">Binary</option>
            <option value="Speed">Speed</option>
            <option value="Temperature">Temperature</option>
            <option value="Volume">Volume</option>
            <option value="Digital storage">Digital storage</option>
            <option value="Energy">Energy</option>
            <option value="Frequency">Frequency</option>
            <option value="Mass">Mass</option>
            <option value="Temperature">Temperature</option>
            <option value="Pressure">Pressure</option>
            <option value="Time">Time</option>
          </select>
          {selectedCalculator === "Length" && <LengthCalculatorComponent />}
          {selectedCalculator === "Area" && <AreaCalculatorComponent></AreaCalculatorComponent>}
        </div>
      </div>
    </>
  );
}

export default App;
