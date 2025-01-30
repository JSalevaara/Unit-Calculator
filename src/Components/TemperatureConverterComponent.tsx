import React from 'react';
import { useState } from 'react';
import { TempUnits } from '../types';
import { TempConverter } from '../Converters/ConverterTemp';

interface Calculation {
    type: "temp",
    unit1: TempUnits,
    unit2: TempUnits
}

export const TempConverterComponent = () => {

    const [selectedUnits, setSelectedUnits] = useState<Calculation>({
        unit1: "celcius",
        unit2: "fahrenheit",
        type: "temp"
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
            const result = TempConverter(selectedUnits.unit1, selectedUnits.unit2, Number(value));
            setResult(result);
        } else {
            setResult(null);
        }
        
    };

    return (
        <div>
            <h1>Temperature Converter</h1>
            <form onSubmit={(handleCalculate)}>
                <label>Choose a unit: </label>
                <select id="unit1" value={selectedUnits.unit1} onChange={handleSelectChange}>
                    <option value="celcius">Celcius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
                </select>
                <br />
                <label>Choose target unit: </label>
                <select id="unit2" value={selectedUnits.unit2} onChange={handleSelectChange}>
                    <option value="celcius">Celcius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
                </select>
                <br />
                <label>Value: </label>
                <input type="number" id="value" value={value !== null ? value : ''} onChange={handleInputChange} />
                <br />
                <button type="submit">Calculate</button>
                {result !== null && (
                    <div>
                        {selectedUnits.unit2 === "celcius" && <h2>Result: {result} °C</h2>}
                        {selectedUnits.unit2 === "fahrenheit" && <h2>Result: {result} °F</h2>}
                        {selectedUnits.unit2 === "kelvin" && <h2>Result: {result} K</h2>}
                    </div>
                )}
            </form>
        </div>
    );
};