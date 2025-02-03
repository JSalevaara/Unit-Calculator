import { useState } from 'react';
import { Header } from "./Components/Header";
import { AreaConverterComponent } from "./Components/AreaConverterComponent";
import { LengthConverterComponent } from "./Components/LengthConverterComponent";
import { NumberTypeConverterComponent } from "./Components/BinaryConverterComponent";
import { SpeedConverterComponent } from "./Components/SpeedConverterComponent";
import { TempConverterComponent } from "./Components/TemperatureConverterComponent";
import { VolumeConverterComponent } from "./Components/VolumeConverterComponent";
import { StorageConverterComponent } from './Components/StorageConverterComponent';
import { DataTransferConverterComponent } from './Components/DataTransferConverterComponent';
import { EnergyConverterComponent } from './Components/EnergyConverterComponent';

function App() {
  const [selectedConverter, setSelectedConverter] = useState<string>("Length");
  const [history, setHistory] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleConverterSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedConverter(value);
  };

  const addToHistory = (entry: string) => {
    setHistory(prevHistory => [entry, ...prevHistory]);
  };

  const addToFavorites = (entry: string) => {
    setFavorites(prevFavorites => [entry, ...prevFavorites]);
  };

  const removeFavorite = (index: number) => {
    setFavorites(prevFavorites => prevFavorites.filter((_, i) => i !== index));
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
            {/*
            <option value="Frequency">Frequency</option>
            <option value="Mass">Mass</option>
            <option value="Pressure">Pressure</option>
            <option value="Time">Time</option>*/}
          </select>
          {selectedConverter === "Length" && <LengthConverterComponent addToHistory={addToHistory} addToFavorites={addToFavorites}/>}
          {selectedConverter === "Area" && <AreaConverterComponent addToHistory={addToHistory} addToFavorites={addToFavorites} />}
          {selectedConverter === "Converter" && <NumberTypeConverterComponent addToHistory={addToHistory} addToFavorites={addToFavorites} />}
          {selectedConverter === "Speed" && <SpeedConverterComponent addToHistory={addToHistory} addToFavorites={addToFavorites} />}
          {selectedConverter === "Temperature" && <TempConverterComponent addToHistory={addToHistory} addToFavorites={addToFavorites} />}
          {selectedConverter === "Volume" && <VolumeConverterComponent addToHistory={addToHistory} addToFavorites={addToFavorites} />}
          {selectedConverter === "Digital storage" && <StorageConverterComponent addToHistory={addToHistory} addToFavorites={addToFavorites} />}
          {selectedConverter === "Data Transfer Rate" && <DataTransferConverterComponent addToHistory={addToHistory} addToFavorites={addToFavorites}/>}
          {selectedConverter === "Energy" &&  <EnergyConverterComponent addToHistory={addToHistory} addToFavorites={addToFavorites}/>}
        </div>
        <div>
            <h2>Calculation history</h2>
            <ul>
            {history.slice(0, 5).map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
            </ul>
        </div>
        <div>
            <h2>Favorites</h2>
            <ul>
            {favorites.map((entry, index) => (
              <li key={index}>
              {entry}
              <button onClick={() => removeFavorite(index)}>Remove</button>
              </li>
            ))}
            </ul>
        </div>
      </div>
    </>
  );
}

export default App;
