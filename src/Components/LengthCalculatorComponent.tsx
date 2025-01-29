import React from 'react';
import { useState } from 'react';
import { LengthUnits } from '../types';
import LengthCalculator from '../Calculators/calculatorLength';

interface Calculation {
    type: "length",
    unit1: LengthUnits,
    unit2: LengthUnits
}

export const LengthCalculatorComponent = () => {

    const [selectedUnits, setSelectedUnits] = useState<Calculation>({
        unit1: "meter",
        unit2: "centimeter",
        type: "length"
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
            const result = LengthCalculator(selectedUnits.unit1, selectedUnits.unit2, Number(value));
            setResult(result);
        } else {
            setResult(null);
        }
        
    };

    return (
        <div>
            <h1>Length Calculator</h1>
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
                <input type="number" id="value" value={value !== null ? value : ''} onChange={handleInputChange} />
                <br />
                <button type="submit">Calculate</button>
                {result !== null && (
                    <div>
                        <h2>Result: {result} {selectedUnits.unit2}s</h2>
                    </div>
                )}
            </form>
        </div>
    );
};