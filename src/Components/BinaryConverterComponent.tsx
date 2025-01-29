import React from 'react';
import { useState } from 'react';
import { NumberConversion } from '../types';
import { Converter } from '../Calculators/binaryConverter';

interface Conversion {
    type: "conversion",
    unit1: NumberConversion,
    unit2: NumberConversion
}

export const NumberTypeConverterComponent = () => {

    const [selectedUnits, setSelectedUnits] = useState<Conversion>({
        type: "conversion",
        unit1: "binary",
        unit2: "decimal",
    });

    const [value, setValue] = useState<string | null>(null);
    const [result, setResult] = useState<string | null>(null);

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
        const numbericValue = value !== null ? parseFloat(value) : NaN;
        if (!isNaN(numbericValue)) {
            const result = Converter(selectedUnits.unit1, selectedUnits.unit2, value || '');
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
                    <option value="binary">Binary</option>
                    <option value="hexadecimal">Hexadecimal</option>
                    <option value="decimal">Decimal</option>
                </select>
                <br />
                <label>Choose target unit: </label>
                <select id="unit2" value={selectedUnits.unit2} onChange={handleSelectChange}>
                    <option value="binary">Binary</option>
                    <option value="hexadecimal">Hexadecimal</option>
                    <option value="decimal">Decimal</option>
                </select>
                <br />
                <label>Value: </label>
                <input type="number" id="value" value={value !== null ? value : ''} onChange={handleInputChange} />
                <br />
                <button type="submit">Calculate</button>
                {result !== null && (
                    <div>
                        <h2>{value} in {selectedUnits.unit1} is {result} in {selectedUnits.unit2}</h2>
                    </div>
                )}
            </form>
        </div>
    );
};

