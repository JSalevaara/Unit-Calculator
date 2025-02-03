import React from "react";
import { useState } from "react";
import { EnergyUnits } from "../types";
import { EnergyConverter } from "../Converters/ConverterEnergy";

interface Calculation {
    type: "energy",
    unit1: EnergyUnits,
    unit2: EnergyUnits
}
interface FunctionProps {
    addToHistory: (entry: string) => void
    addToFavorites: (entry: string) => void
}

export const EnergyConverterComponent: React.FC<FunctionProps> = ({ addToFavorites, addToHistory}) => {
    const [selectedUnits, setSelectedUnits] = useState<Calculation>({
        unit1: "joule",
        unit2: "kilojoule",
        type: "energy"
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
            const result = EnergyConverter(selectedUnits.unit1, selectedUnits.unit2, Number(value));
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
            <h1>Energy Converter</h1>
            <form onSubmit={handleCalculate}>
                <label>Choose a unit: </label>
                <select id="unit1" value={selectedUnits.unit1} onChange={handleSelectChange}>
                    <option value="joule">Joule</option>
                    <option value="kilojoule">Kilojoule</option>
                    <option value="megajoule">Megajoule</option>
                    <option value="gigajoule">Gigajoule</option>
                    <option value="terajoule">Terajoule</option>
                    <option value="calorie">Calorie</option>
                    <option value="kilocalorie">Kilocalorie</option>
                    <option value="watt-hour">Watt-hour</option>
                    <option value="kilowatt-hour">Kilowatt-hour</option>
                    <option value="megawatt-hour">Megawatt-hour</option>
                    <option value="gigawatt-hour">Gigawatt-hour</option>
                    <option value="terawatt-hour">Terawatt-hour</option>
                </select>
                <br />
                <label>Choose target unit: </label>
                <select id="unit2" value={selectedUnits.unit2} onChange={handleSelectChange}>
                    <option value="joule">Joule</option>
                    <option value="kilojoule">Kilojoule</option>
                    <option value="megajoule">Megajoule</option>
                    <option value="gigajoule">Gigajoule</option>
                    <option value="terajoule">Terajoule</option>
                    <option value="calorie">Calorie</option>
                    <option value="kilocalorie">Kilocalorie</option>
                    <option value="watt-hour">Watt-hour</option>
                    <option value="kilowatt-hour">Kilowatt-hour</option>
                    <option value="megawatt-hour">Megawatt-hour</option>
                    <option value="gigawatt-hour">Gigawatt-hour</option>
                    <option value="terawatt-hour">Terawatt-hour</option>
                </select>
                <br />
                <label>Value: </label>
                <input type="number" id="value" value={value !== null ? value : ''} onChange={handleInputChange} />
                <br />
                <button type="submit">Calculate</button>
                {result !== null && (
                    <div>
                        {<h2>Result: {result} {selectedUnits.unit2}s</h2>}
                        <button type="button" onClick={handleAddToFavorites}>Add to favorites</button>
                    </div>
                )}
            </form>
        </div>
    );
};