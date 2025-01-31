import { TransferUnits } from "../types";
import { transferRates } from "../Utils/conversionRates";
import { roundTo } from "../Utils/utilities";

export const DataTransferConverter = (unit1: TransferUnits, unit2: TransferUnits, value: number): number => {
    if (unit1 === unit2) {
        return value;
    }
    const conversionRate = transferRates[unit1][unit2];
    const result = value * conversionRate;
    return roundTo(result, 6);
};