import { areaRates } from "../Utils/conversionRates";
import { AreaUnits } from "../types";
import { roundTo } from "../Utils/utilities";

const AreaConverter = (unit1: AreaUnits, unit2: AreaUnits, value: number): number => {
    if (unit1 === unit2) {
        return value;
    }
    const conversionRate = areaRates[unit1][unit2];
    const result = value * conversionRate;
    return roundTo(result, 6);
};

export default AreaConverter;