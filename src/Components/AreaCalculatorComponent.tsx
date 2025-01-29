import React from "react";
import { useState } from "react";
import { AreaUnits } from "../types";
import AreaCalculator from "../Calculators/calculatorArea";

interface Calculation {
    type: "Area",
    unit1: AreaUnits,
    unit2: AreaUnits
}

export const AreaCalculatorComponent = () => {

    const [selectedUnits, setSelectedUnits] = useState<Calculation>({
        unit1: "square meter",
        unit2: "square kilometer",
        type: "Area"
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
            const result = AreaCalculator(selectedUnits.unit1, selectedUnits.unit2, Number(value));
            setResult(result);
        } else {
            setResult(null);
        }
        
    };

    return (
        <div>
            <h1>Area Calculator</h1>
            <form onSubmit={(handleCalculate)}>
                <label>Choose a unit: </label>
                <select id="unit1" value={selectedUnits.unit1} onChange={handleSelectChange}>
                    <option value="square kilometer">Square Kilometer</option>
                    <option value="square meter">Square Meter</option>
                    <option value="square centimeter">Square Centimeter</option>
                    <option value="square millimeter">Square Millimeter</option>
                    <option value="square mile">Square Mile</option>
                    <option value="square yard">Square Yard</option>
                    <option value="square foot">Square Foot</option>
                    <option value="square inch">Square Inch</option>
                    <option value="hectare">Hectare</option>
                    <option value="acre">Acre</option>
                </select>
                <br />
                <label>Choose target unit: </label>
                <select id="unit2" value={selectedUnits.unit2} onChange={handleSelectChange}>
                <option value="Square kilometer">Square Kilometer</option>
                    <option value="square meter">Square Meter</option>
                    <option value="square centimeter">Square Centimeter</option>
                    <option value="square millimeter">Square Millimeter</option>
                    <option value="square mile">Square Mile</option>
                    <option value="square yard">Square Yard</option>
                    <option value="square foot">Square Foot</option>
                    <option value="square inch">Square Inch</option>
                    <option value="hectare">Hectare</option>
                    <option value="acre">Acre</option>
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