import { volumeRates } from "../Utils/conversionRates";
import { VolumeUnits } from "../types";
import { roundTo } from "../Utils/utilities";

const VolumeCalculator = (unit1: VolumeUnits, unit2: VolumeUnits, value: number): number => {
    if (unit1 === unit2) {
        return value;
    }
    const conversionRate = volumeRates[unit1][unit2];
    const result = value * conversionRate;
    return roundTo(result, 6);
};

export default VolumeCalculator;