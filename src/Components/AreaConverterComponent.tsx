import React from "react";
import { useState } from "react";
import { AreaUnits } from "../types";
import AreaConverter from "../Converters/ConverterArea";

interface Calculation {
    type: "Area",
    unit1: AreaUnits,
    unit2: AreaUnits
}

export const AreaConverterComponent = () => {

    const [selectedUnits, setSelectedUnits] = useState<Calculation>({
        unit1: "square meter",
        unit2: "square kilometer",
        type: "Area"
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
            const result = AreaConverter(selectedUnits.unit1, selectedUnits.unit2, Number(value));
            setResult(result);
        } else {
            setResult(null);
        }
        
    };

    return (
        <div>
            <h1>Area Converter</h1>
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
                <label>Value: </label>
                <input type="text" id="value" value={value !== null ? value : ''} onChange={handleInputChange} />
                <br />
                <button type="submit">Calculate</button>
                {result !== null && (
                    <div>
                        {selectedUnits.unit2 === "square kilometer" && <h2>Result: {result} km²</h2>}
                        {selectedUnits.unit2 === "square meter" && <h2>Result: {result} m²</h2>}
                        {selectedUnits.unit2 === "square centimeter" && <h2>Result: {result} cm²</h2>}
                        {selectedUnits.unit2 === "square millimeter" && <h2>Result: {result} mm²</h2>}
                        {selectedUnits.unit2 === "square mile" && <h2>Result: {result} mi²</h2>}
                        {selectedUnits.unit2 === "square yard" && <h2>Result: {result} yd²</h2>}
                        {selectedUnits.unit2 === "square foot" && <h2>Result: {result} ft²</h2>}
                        {selectedUnits.unit2 === "square inch" && <h2>Result: {result} in²</h2>}
                        {selectedUnits.unit2 === "hectare" && <h2>Result: {result} ha</h2>}
                        {selectedUnits.unit2 === "acre" && <h2>Result: {result} acres</h2>}
                    </div>
                )}
            </form>
        </div>
    );
};