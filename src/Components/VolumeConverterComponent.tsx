import React from 'react';
import { useState } from 'react';
import { VolumeUnits } from "../types";
import VolumeConverter from "../Converters/ConverterVolume";


interface Calculation {
    type: "volume",
    unit1: VolumeUnits,
    unit2: VolumeUnits
}

export const VolumeConverterComponent = () => {
    
    const [selectedUnits, setSelectedUnits] = useState<Calculation>({
            unit1: "liter",
            unit2: "deciliter",
            type: "volume"
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
            const result = VolumeConverter(selectedUnits.unit1, selectedUnits.unit2, Number(value));
            setResult(result);
        } else {
            setResult(null);
        }
        
    };

    return (
        <div>
            <h1>Volume Converter</h1>
            <form onSubmit={(handleCalculate)}>
                <label>Choose a unit: </label>
                <select id="unit1" value={selectedUnits.unit1} onChange={handleSelectChange}>
                    <option value="deciliter">Deciliter</option>
                    <option value="cubic meter">Cubic Meter</option>
                    <option value="liter">Liter</option>
                    <option value="milliliter">Milliliter</option>
                    <option value="cubic centimeter">Cubic Centimeter</option>
                    <option value="cubic inch">Cubic Inch</option>
                    <option value="cubic foot">Cubic Foot</option>
                    <option value="cubic yard">Cubic Yard</option>
                    <option value="fluid ounce">Fluid Ounce</option>
                    <option value="gallon">Gallon</option>
                    <option value="quart">Quart</option>
                    <option value="pint">Pint</option>
                    <option value="cup">Cup</option>
                    <option value="tablespoon">Tablespoon</option>
                    <option value="teaspoon">Teaspoon</option>
                </select>
                <br />
                <label>Choose target unit: </label>
                <select id="unit2" value={selectedUnits.unit2} onChange={handleSelectChange}>
                <option value="deciliter">Deciliter</option>
                    <option value="cubic meter">Cubic Meter</option>
                    <option value="liter">Liter</option>
                    <option value="milliliter">Milliliter</option>
                    <option value="cubic centimeter">Cubic Centimeter</option>
                    <option value="cubic inch">Cubic Inch</option>
                    <option value="cubic foot">Cubic Foot</option>
                    <option value="cubic yard">Cubic Yard</option>
                    <option value="fluid ounce">Fluid Ounce</option>
                    <option value="gallon">Gallon</option>
                    <option value="quart">Quart</option>
                    <option value="pint">Pint</option>
                    <option value="cup">Cup</option>
                    <option value="tablespoon">Tablespoon</option>
                    <option value="teaspoon">Teaspoon</option>
                </select>
                <br />
                <label>Value: </label>
                <input type="number" id="value" value={value !== null ? value : ''} onChange={handleInputChange} />
                <br />
                <button type="submit">Calculate</button>
                {result !== null && (
                    <div>
                        {selectedUnits.unit2 === "deciliter" && <h2>Result: {result} dl</h2>}
                        {selectedUnits.unit2 === "cubic meter" && <h2>Result: {result} m³</h2>}
                        {selectedUnits.unit2 === "liter" && <h2>Result: {result} l</h2>}
                        {selectedUnits.unit2 === "milliliter" && <h2>Result: {result} ml</h2>}
                        {selectedUnits.unit2 === "cubic centimeter" && <h2>Result: {result} cm³</h2>}
                        {selectedUnits.unit2 === "cubic inch" && <h2>Result: {result} in³</h2>}
                        {selectedUnits.unit2 === "cubic foot" && <h2>Result: {result} ft³</h2>}
                        {selectedUnits.unit2 === "cubic yard" && <h2>Result: {result} yd³</h2>}
                        {selectedUnits.unit2 === "fluid ounce" && <h2>Result: {result} fl oz</h2>}
                        {selectedUnits.unit2 === "gallon" && <h2>Result: {result} gal</h2>}
                        {selectedUnits.unit2 === "quart" && <h2>Result: {result} qt</h2>}
                        {selectedUnits.unit2 === "pint" && <h2>Result: {result} pt</h2>}
                        {selectedUnits.unit2 === "cup" && <h2>Result: {result} cup</h2>}
                        {selectedUnits.unit2 === "tablespoon" && <h2>Result: {result} tbsp</h2>}
                        {selectedUnits.unit2 === "teaspoon" && <h2>Result: {result} tsp</h2>}
                    </div>
                )}
            </form>
            <div>

            </div>
        </div>
    );
};