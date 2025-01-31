import React from 'react';
import { useState } from 'react';
import { StorageUnits } from '../types';
import { StorageConverter } from '../Converters/ConverterStorage';

interface Calculation {
    type: "digital storage",
    unit1: StorageUnits,
    unit2: StorageUnits
}

export const StorageConverterComponent = () => {

    const [selectedUnits, setSelectedUnits] = useState<Calculation>({
        unit1: "bit",
        unit2: "megabit",
        type: "digital storage"
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
            const result = StorageConverter(selectedUnits.unit1, selectedUnits.unit2, Number(value));
            setResult(result);
        } else {
            setResult(null);
        }
        
    };

    return (
        <div>
            <h1>Digital storage Converter</h1>
            <form onSubmit={(handleCalculate)}>
                <label>Choose a unit: </label>
                <select id="unit1" value={selectedUnits.unit1} onChange={handleSelectChange}>
                    <option value="bit">Bit</option>
                    <option value="kilobit">Kilobit</option>
                    <option value="megabit">Megabit</option>
                    <option value="gigabit">Gigabit</option>
                    <option value="terabit">Terabit</option>
                    <option value="petabit">Petabit</option>
                    <option value="byte">Byte</option>
                    <option value="kilobyte">Kilobyte</option>
                    <option value="megabyte">Megabyte</option>
                    <option value="gigabyte">Gigabyte</option>
                    <option value="terabyte">Terabyte</option>
                    <option value="petabyte">Petabyte</option>
                </select>
                <br />
                <label>Choose target unit: </label>
                <select id="unit2" value={selectedUnits.unit2} onChange={handleSelectChange}>
                    <option value="bit">Bit</option>
                    <option value="kilobit">Kilobit</option>
                    <option value="megabit">Megabit</option>
                    <option value="gigabit">Gigabit</option>
                    <option value="terabit">Terabit</option>
                    <option value="petabit">Petabit</option>
                    <option value="byte">Byte</option>
                    <option value="kilobyte">Kilobyte</option>
                    <option value="megabyte">Megabyte</option>
                    <option value="gigabyte">Gigabyte</option>
                    <option value="terabyte">Terabyte</option>
                    <option value="petabyte">Petabyte</option>
                </select>
                <br />
                <label>Value: </label>
                <input type="number" id="value" value={value !== null ? value : ''} onChange={handleInputChange} />
                <br />
                <button type="submit">Calculate</button>
                {result !== null && (
                    <div>
                        {<h2>Result: {result} {selectedUnits.unit2}s</h2>}
                        {/*{selectedUnits.unit2 === "bit" && <h2>Result: {result} bits</h2>}
                        {selectedUnits.unit2 === "kilobit" && <h2>Result: {result} kilobits</h2>}
                        {selectedUnits.unit2 === "megabit" && <h2>Result: {result} megabits</h2>}
                        {selectedUnits.unit2 === "gigabit" && <h2>Result: {result} gigabits</h2>}
                        {selectedUnits.unit2 === "terabit" && <h2>Result: {result} terabits</h2>}
                        {selectedUnits.unit2 === "petabit" && <h2>Result: {result} petabits</h2>}
                        {selectedUnits.unit2 === "byte" && <h2>Result: {result} bytes</h2>}
                        {selectedUnits.unit2 === "kilobyte" && <h2>Result: {result} kilobytes</h2>}
                        {selectedUnits.unit2 === "megabyte" && <h2>Result: {result} megabytes</h2>}
                        {selectedUnits.unit2 === "gigabyte" && <h2>Result: {result} gigabytes</h2>}
                        {selectedUnits.unit2 === "terabyte" && <h2>Result: {result} terabytes</h2>}
                        {selectedUnits.unit2 === "petabyte" && <h2>Result: {result} petabytes</h2>}*/}
                    </div>
                )}
            </form>
        </div>
    );
};