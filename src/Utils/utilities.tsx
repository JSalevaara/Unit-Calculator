export const roundTo = (number: number, places: number): number => {
    const factor = Math.pow(10, places);
    return Math.round(number * factor) / factor;
};