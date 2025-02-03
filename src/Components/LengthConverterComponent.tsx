import React from 'react';
import { useState } from 'react';
import { LengthUnits } from '../types';
import LengthConverter from '../Converters/ConverterLength';

interface Calculation {
    type: "length",
    unit1: LengthUnits,
    unit2: LengthUnits
}

interface FunctionProps {
    addToHistory: (entry: string) => void
    addToFavorites: (entry: string) => void
}

export const LengthConverterComponent: React.FC<FunctionProps> = ({ addToFavorites, addToHistory}) => {

    const [selectedUnits, setSelectedUnits] = useState<Calculation>({
        unit1: "meter",
        unit2: "centimeter",
        type: "length"
    });

    const [value, setValue] = useState<string>('');
    const [result, setResult] = useState<number | null>(null);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = event.target;
        setSelectedUnits(prevState => ({
            ...prevState,
            [id]: value
        }));  
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleCalculate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const numbericValue = parseFloat(value);
        if (!isNaN(numbericValue)) {
            const result = LengthConverter(selectedUnits.unit1, selectedUnits.unit2, Number(value));
            setResult(result);
            const entry = `${value} ${selectedUnits.unit1}s = ${result} ${selectedUnits.unit2}s`;
            addToHistory(entry);
        } else {
            setResult(null);
        }
        
    };

    const handleAddToFavorites = () => {
        if (result !== null) {
            const entry = `${value} ${selectedUnits.unit1}s = ${result} ${selectedUnits.unit2}s`;
            addToFavorites(entry);
        }
    };

    return (
        <div>
            <h1>Length Converter</h1>
            <form onSubmit={(handleCalculate)}>
                <label>Choose a unit: </label>
                <select id="unit1" value={selectedUnits.unit1} onChange={handleSelectChange}>
                    <option value="kilometer">Kilometer</option>
                    <option value="meter">Meter</option>
                    <option value="centimeter">Centimeter</option>
                    <option value="millimeter">Millimeter</option>
                    <option value="mile">Mile</option>
                    <option value="yard">Yard</option>
                    <option value="foot">Foot</option>
                    <option value="inch">Inch</option>
                </select>
                <br />
                <label>Choose target unit: </label>
                <select id="unit2" value={selectedUnits.unit2} onChange={handleSelectChange}>
                    <option value="kilometer">Kilometer</option>
                    <option value="meter">Meter</option>
                    <option value="centimeter">Centimeter</option>
                    <option value="millimeter">Millimeter</option>
                    <option value="mile">Mile</option>
                    <option value="yard">Yard</option>
                    <option value="foot">Foot</option>
                    <option value="inch">Inch</option>
                </select>
                <br />
                <label>Value: </label>
                <input type="text" id="value" value={value !== null ? value : ''} onChange={handleInputChange} />
                <br />
                <button type="submit">Calculate</button>
                {result !== null && (
                    <div>
                        {selectedUnits.unit2 === "kilometer" && <h2>Result: {result} km</h2>}
                        {selectedUnits.unit2 === "meter" && <h2>Result: {result} m</h2>}
                        {selectedUnits.unit2 === "centimeter" && <h2>Result: {result} cm</h2>}
                        {selectedUnits.unit2 === "millimeter" && <h2>Result: {result} mm</h2>}
                        {selectedUnits.unit2 === "mile" && <h2>Result: {result} mi</h2>}
                        {selectedUnits.unit2 === "yard" && <h2>Result: {result} yd</h2>}
                        {selectedUnits.unit2 === "foot" && <h2>Result: {result} ft</h2>}
                        {selectedUnits.unit2 === "inch" && <h2>Result: {result} in</h2>}
                        <button type="button" onClick={handleAddToFavorites}>Add to favorites</button>
                    </div>
                )}
            </form>
        </div>
    );
};