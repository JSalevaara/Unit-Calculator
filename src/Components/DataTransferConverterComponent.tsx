import React from "react";
import { useState } from "react";
import { TransferUnits } from "../types";
import { DataTransferConverter } from "../Converters/ConverterDataTransfer";

interface Calculation {
    type: "data transfer",
    unit1: TransferUnits,
    unit2: TransferUnits
}

export const DataTransferConverterComponent = () => {
    const [selectedUnits, setSelectedUnits] = useState<Calculation>({
        unit1: "bit per second",
        unit2: "megabit per second",
        type: "data transfer"
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
            const result = DataTransferConverter(selectedUnits.unit1, selectedUnits.unit2, Number(value));
            setResult(result);
        } else {
            setResult(null);
        }
    };

    return (
        <div>
            <h1>Data Transfer rate Converter</h1>
            <form onSubmit={handleCalculate}>
                <label>Choose a unit: </label>
                <select id="unit1" value={selectedUnits.unit1} onChange={handleSelectChange}>
                    <option value="bit per second">Bit per second</option>
                    <option value="kilobit per second">Kilobit per second</option>
                    <option value="megabit per second">Megabit per second</option>
                    <option value="gigabit per second">Gigabit per second</option>
                    <option value="terabit per second">Terabit per second</option>
                    <option value="byte per second">Byte per second</option>
                    <option value="kilobyte per second">Kilobyte per second</option>
                    <option value="megabyte per second">Megabyte per second</option>
                    <option value="gigabyte per second">Gigabyte per second</option>
                    <option value="terabyte per second">Terabyte per second</option>
                </select>
                <br />
                <label>Choose target unit: </label>
                <select id="unit2" value={selectedUnits.unit2} onChange={handleSelectChange}>
                    <option value="bit per second">Bit per second</option>
                    <option value="kilobit per second">Kilobit per second</option>
                    <option value="megabit per second">Megabit per second</option>
                    <option value="gigabit per second">Gigabit per second</option>
                    <option value="terabit per second">Terabit per second</option>
                    <option value="byte per second">Byte per second</option>
                    <option value="kilobyte per second">Kilobyte per second</option>
                    <option value="megabyte per second">Megabyte per second</option>
                    <option value="gigabyte per second">Gigabyte per second</option>
                    <option value="terabyte per second">Terabyte per second</option>
                </select>
                <br />
                <label>Value: </label>
                <input type="number" id="value" value={value !== null ? value : ''} onChange={handleInputChange} />
                <br />
                <button type="submit">Calculate</button>
                {result !== null && (
                    <div>
                        {<h2>Result: {result} {selectedUnits.unit2}s</h2>}
                    </div>
                )}
            </form>
        </div>
    );
};