import { EnergyUnits } from "../types";
import { energyRates } from "../Utils/conversionRates";
import { roundTo } from "../Utils/utilities";

export const EnergyConverter = (unit1: EnergyUnits, unit2: EnergyUnits, value: number): number => {
    if (unit1 === unit2) {
        return value;
    }
    const conversionRate = energyRates[unit1][unit2];
    const result = value * conversionRate;
    return roundTo(result, 6);
};