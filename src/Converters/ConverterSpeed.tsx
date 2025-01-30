import { speedRates } from "../Utils/conversionRates";
import { SpeedUnits } from "../types";
import { roundTo } from "../Utils/utilities";

const SpeedConverter = (unit1: SpeedUnits, unit2: SpeedUnits, value: number): number => {
    if (unit1 === unit2) {
        return value;
    }
    const conversionRate = speedRates[unit1][unit2];
    const result = value * conversionRate;
    return roundTo(result, 6);
};

export default SpeedConverter;