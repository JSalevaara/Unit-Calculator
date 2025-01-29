import { lengthRates } from "../Utils/conversionRates";
import { LengthUnits } from "../types";
import { roundTo } from "../Utils/utilities";

const LengthCalculator = (unit1: LengthUnits, unit2: LengthUnits, value: number): number => {
    if (unit1 === unit2) {
        return value;
    }
    const conversionRate = lengthRates[unit1][unit2];
    const result = value * conversionRate;
    return roundTo(result, 6);
};

export default LengthCalculator;