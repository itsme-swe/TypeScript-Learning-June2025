/*
💥 The "keyof" operator in TypeScript is a type operator used to extract the keys of a given object type as a union of string (or string literal) types
*/

interface SedanCar {
  carName: string;
  color: string;
  email: string;
}

type SedanCarKeysOnly = keyof SedanCar;

let keys: SedanCarKeysOnly = "carName";

console.log(keys);
