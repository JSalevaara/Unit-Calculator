import React from 'react';
import { useState } from 'react';
import { SpeedUnits } from '../types';
import SpeedConverter from '../Converters/ConverterSpeed';

interface Calculation {
    type: "speed",
    unit1: SpeedUnits,
    unit2: SpeedUnits
}

export const SpeedConverterComponent = () => {

    const [selectedUnits, setSelectedUnits] = useState<Calculation>({
        unit1: "meters per second",
        unit2: "kilometers per hour",
        type: "speed"
    });

    const [value, setValue] = useState<number | null>(null);
    const [result, setResult] = useState<number | null>(null);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = event.target;
        setSelectedUnits(prevState => ({
            ...prevState,
            [id]: value
        }));  
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value ? parseFloat(event.target.value) : null);
    };

    const handleCalculate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const numbericValue = value !== null ? value : NaN;
        if (!isNaN(numbericValue)) {
            const result = SpeedConverter(selectedUnits.unit1, selectedUnits.unit2, Number(value));
            setResult(result);
        } else {
            setResult(null);
        }
        
    };

    return (
        <div>
            <h1>Speed Converter</h1>
            <form onSubmit={(handleCalculate)}>
                <label>Choose a unit: </label>
                <select id="unit1" value={selectedUnits.unit1} onChange={handleSelectChange}>
                    <option value="meters per second">Meters per second</option>
                    <option value="kilometers per hour">Kilometers per hour</option>
                    <option value="miles per hour">Miles per hour</option>
                    <option value="feet per second">Feet per second</option>
                    <option value="knots">Knots</option>
                </select>
                <br />
                <label>Choose target unit: </label>
                <select id="unit2" value={selectedUnits.unit2} onChange={handleSelectChange}>
                    <option value="meters per second">Meters per second</option>
                    <option value="kilometers per hour">Kilometers per hour</option>
                    <option value="miles per hour">Miles per hour</option>
                    <option value="feet per second">Feet per second</option>
                    <option value="knots">Knots</option>
                </select>
                <br />
                <label>Value: </label>
                <input type="number" id="value" value={value !== null ? value : ''} onChange={handleInputChange} />
                <br />
                <button type="submit">Calculate</button>
                {result !== null && (
                    <div>
                        {selectedUnits.unit2 === "meters per second" && <h2>Result: {result} m/s</h2>}
                        {selectedUnits.unit2 === "kilometers per hour" && <h2>Result: {result} km/h</h2>}
                        {selectedUnits.unit2 === "miles per hour" && <h2>Result: {result} mph</h2>}
                        {selectedUnits.unit2 === "feet per second" && <h2>Result: {result} ft/s</h2>}
                        {selectedUnits.unit2 === "knots" && <h2>Result: {result} knots</h2>}
                    </div>
                )}
            </form>
            <div>

            </div>
        </div>
    );
};