import { AreaConverterComponent } from "./Components/AreaCalculatorComponent";
import { Header } from "./Components/Header";
import { LengthConverterComponent } from "./Components/LengthCalculatorComponent";
import { NumberTypeConverterComponent } from "./Components/BinaryConverterComponent";
import { SpeedConverterComponent } from "./Components/SpeedCalculatorComponent";
import { useState } from 'react';
import { TempConverterComponent } from "./Components/TemperatureCalculatorComponent";
import { VolumeConverterComponent } from "./Components/VolumeCalculatorComponent";

function App() {
  const [selectedConverter, setSelectedConverter] = useState("Length");

  const handleConverterSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedConverter(value);
  };

  return (
    <>
      <div>
        <Header></Header>
        <div>
          <label>Selected converter: </label>
          <select onChange={handleConverterSelect}>
            <option value="Length">Length</option>
            <option value="Area">Area</option>
            <option value="Converter">Number type converter</option>
            <option value="Speed">Speed</option>
            <option value="Temperature">Temperature</option>
            <option value="Volume">Volume</option>
            <option value="Digital storage">Digital storage</option>
            <option value="Data Transfer Rate">Data Transfer Rate</option>
            <option value="Energy">Energy</option>
            <option value="Frequency">Frequency</option>
            <option value="Mass">Mass</option>
            <option value="Pressure">Pressure</option>
            <option value="Time">Time</option>
          </select>
          {selectedConverter === "Length" && <LengthConverterComponent />}
          {selectedConverter === "Area" && <AreaConverterComponent />}
          {selectedConverter === "Converter" && <NumberTypeConverterComponent />}
          {selectedConverter === "Speed" && <SpeedConverterComponent />}
          {selectedConverter === "Temperature" && <TempConverterComponent />}
          {selectedConverter === "Volume" && <VolumeConverterComponent />}
        </div>
      </div>
    </>
  );
}

export default App;
