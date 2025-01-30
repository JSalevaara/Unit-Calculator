import { NumberConversion } from "../types";

export const NumberConverter = (unit1: NumberConversion, unit2: NumberConversion, value: string): string => {
    let decimalValue: number;

    switch (unit1) {
        case "binary":
            decimalValue = parseInt(value, 2);
            break;
        case "hexadecimal":
            decimalValue = parseInt(value, 16);
            break;
        case "decimal":
            decimalValue = parseInt(value, 10);
            break;
        default:
            throw new Error(`Unsupported unit: ${unit1}`);
    }

    let result: string;
    switch (unit2) {
        case "binary":
            result = decimalValue.toString(2);
            break;
        case "hexadecimal":
            result = decimalValue.toString(16);
            break;
        case "decimal":
            result = decimalValue.toString(10);
            break;
        default:
            throw new Error(`Unsupported unit: ${unit2}`);
    }

    return result;
};