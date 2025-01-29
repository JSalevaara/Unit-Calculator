import { LengthUnits } from '../types';
import { AreaUnits } from '../types';
import { SpeedUnits } from '../types';
import { TempUnits } from '../types';

export const lengthRates: { [key in LengthUnits]: { [key in LengthUnits]: number } } = {
    meter: {
        meter: 1,
        kilometer: 0.001,
        centimeter: 100,
        millimeter: 1000,
        mile: 0.000621371,
        yard: 1.09361,
        foot: 3.28084,
        inch: 39.3701
    },
    kilometer: {
        meter: 1000,
        kilometer: 1,
        centimeter: 100000,
        millimeter: 1000000,
        mile: 0.621371,
        yard: 1093.61,
        foot: 3280.84,
        inch: 39370.1
    },
    centimeter: {
        meter: 0.01,
        kilometer: 0.00001,
        centimeter: 1,
        millimeter: 10,
        mile: 0.0000062137,
        yard: 0.0109361,
        foot: 0.0328084,
        inch: 0.393701
    },
    millimeter: {
        meter: 0.001,
        kilometer: 0.000001,
        centimeter: 0.1,
        millimeter: 1,
        mile: 0.000000621371,
        yard: 0.00109361,
        foot: 0.00328084,
        inch: 0.0393701
    },
    mile: {
        meter: 1609.34,
        kilometer: 1.60934,
        centimeter: 160934,
        millimeter: 1609340,
        mile: 1,
        yard: 1760,
        foot: 5280,
        inch: 63360
    },
    yard: {
        meter: 0.9144,
        kilometer: 0.0009144,
        centimeter: 91.44,
        millimeter: 914.4,
        mile: 0.000568182,
        yard: 1,
        foot: 3,
        inch: 36
    },
    foot: {
        meter: 0.3048,
        kilometer: 0.0003048,
        centimeter: 30.48,
        millimeter: 304.8,
        mile: 0.000189394,
        yard: 0.333333,
        foot: 1,
        inch: 12
    },
    inch: {
        meter: 0.0254,
        kilometer: 0.0000254,
        centimeter: 2.54,
        millimeter: 25.4,
        mile: 0.0000157828,
        yard: 0.0277778,
        foot: 0.0833333,
        inch: 1
    }
};

export const areaRates: { [key in AreaUnits]: { [key in AreaUnits]: number}} = {
    "square meter": {
        "square meter": 1,
        "square kilometer": 0.000001,
        "square centimeter": 10000,
        "square millimeter": 1000000,
        "square mile": 0.000000386102,
        "square yard": 1.19599,
        "square foot": 10.7639,
        "square inch": 1550,
        "hectare": 0.0001,
        "acre": 0.000247105
    },
    "square kilometer": {
        "square meter": 1000000,
        "square kilometer": 1,
        "square centimeter": 10000000000,
        "square millimeter": 1000000000000,
        "square mile": 0.386102,
        "square yard": 1195990,
        "square foot": 10763900,
        "square inch": 1550000000,
        "hectare": 100,
        "acre": 247.105
    },
    "square centimeter": {
        "square meter": 0.0001,
        "square kilometer": 0.0000000001,
        "square centimeter": 1,
        "square millimeter": 100,
        "square mile": 0.0000000000386102,
        "square yard": 0.000119599,
        "square foot": 0.00107639,
        "square inch": 0.155,
        "hectare": 0.00000001,
        "acre": 0.0000000247105
    },
    "square millimeter": {
        "square meter": 0.000001,
        "square kilometer": 0.000000000001,
        "square centimeter": 0.01,
        "square millimeter": 1,
        "square mile": 0.000000000000386102,
        "square yard": 0.00000119599,
        "square foot": 0.0000107639,
        "square inch": 0.00155,
        "hectare": 0.0000000001,
        "acre": 0.000000000247105
    },
    "square mile": {
        "square meter": 2589990,
        "square kilometer": 2.58999,
        "square centimeter": 25899900000,
        "square millimeter": 2589990000000,
        "square mile": 1,
        "square yard": 3097600,
        "square foot": 27878400,
        "square inch": 4014489600,
        "hectare": 258.999,
        "acre": 640
    },
    "square yard": {
        "square meter": 0.836127,
        "square kilometer": 0.000000836127,
        "square centimeter": 8361.27,
        "square millimeter": 836127,
        "square mile": 0.000000322831,
        "square yard": 1,
        "square foot": 9,
        "square inch": 1296,
        "hectare": 0.0000836127,
        "acre": 0.000206612
    },
    "square foot": {
        "square meter": 0.092903,
        "square kilometer": 0.000000092903,
        "square centimeter": 929.03,
        "square millimeter": 92903,
        "square mile": 0.0000000358701,
        "square yard": 0.111111,
        "square foot": 1,
        "square inch": 144,
        "hectare": 0.0000092903,
        "acre": 0.0000229568
    },
    "square inch": {
        "square meter": 0.00064516,
        "square kilometer": 0.00000000064516,
        "square centimeter": 6.4516,
        "square millimeter": 645.16,
        "square mile": 0.000000000249097,
        "square yard": 0.000771605,
        "square foot": 0.00694444,
        "square inch": 1,
        "hectare": 0.000000064516,
        "acre": 0.00000015942
    },
    "hectare": {
        "square meter": 10000,
        "square kilometer": 0.01,
        "square centimeter": 100000000,
        "square millimeter": 10000000000,
        "square mile": 0.00386102,
        "square yard": 11959.9,
        "square foot": 107639,
        "square inch": 15500000,
        "hectare": 1,
        "acre": 2.47105
    },
    "acre": {
        "square meter": 4046.86,
        "square kilometer": 0.00404686,
        "square centimeter": 40468600,
        "square millimeter": 4046860000,
        "square mile": 0.0015625,
        "square yard": 4840,
        "square foot": 43560,
        "square inch": 6272640,
        "hectare": 0.404686,
        "acre": 1
    }
};

export const speedRates: { [key in SpeedUnits]: { [key in SpeedUnits]: number}} = {
    "meters per second": {
        "meters per second": 1,
        "kilometers per hour": 3.6,
        "miles per hour": 2.23694,
        "feet per second": 3.28084,
        "knots": 1.94384
    },
    "kilometers per hour": {
        "meters per second": 0.277778,
        "kilometers per hour": 1,
        "miles per hour": 0.621371,
        "feet per second": 0.911344,
        "knots": 0.539957
    },
    "miles per hour": {
        "meters per second": 0.44704,
        "kilometers per hour": 1.60934,
        "miles per hour": 1,
        "feet per second": 1.46667,
        "knots": 0.868976
    },
    "feet per second": {
        "meters per second": 0.3048,
        "kilometers per hour": 1.09728,
        "miles per hour": 0.681818,
        "feet per second": 1,
        "knots": 0.592484
    },
    "knots": {
        "meters per second": 0.514444,
        "kilometers per hour": 1.852,
        "miles per hour": 1.15078,
        "feet per second": 1.68781,
        "knots": 1
    }
};

export const tempRates: { [key in TempUnits]: { [key in TempUnits]: (value: number) => number}} = {
    "celcius": {
        "celcius": value => value,
        "kelvin": value => value + 273.15,
        "fahrenheit": value => (value * 9/5) + 32
    },
    "kelvin": {
        "celcius": value => value - 273.15,
        "kelvin": value => value,
        "fahrenheit": value => (value - 273.15) * 9/5 + 32
    },
    "fahrenheit": {
        "celcius": value => (value - 32) * 5/9,
        "kelvin": value => (value - 32) * 5/9 + 273.15,
        "fahrenheit": value => value
    }
};