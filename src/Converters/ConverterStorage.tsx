import { storageRates } from "../Utils/conversionRates";
import { StorageUnits } from "../types";
import { roundTo } from "../Utils/utilities";

export const StorageConverter = (unit1: StorageUnits, unit2: StorageUnits, value: number): number => {
    if (unit1 === unit2) {
        return value;
    }
    const conversionRate = storageRates[unit1][unit2];
    const result = value * conversionRate;
    return roundTo(result, 6);
};
