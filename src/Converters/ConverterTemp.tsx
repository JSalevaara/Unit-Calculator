import { tempRates } from "../Utils/conversionRates";
import { TempUnits } from "../types";
import { roundTo } from "../Utils/utilities";

export const TempConverter = (unit1: TempUnits, unit2: TempUnits, value: number): number => {
    if (unit1 === unit2) {
        return value;
    }
    const conversionRate = tempRates[unit1][unit2];
    const result = conversionRate(value);
    return roundTo(result, 6);
};

export default TempConverter;