/*
💥 Function overloading in TypeScript allows you to define multiple function signatures with the same name but different parameter types or return types.
*/

function getLength(val: string): number;

function getLength(val: any[]): number;

function getLength(val: any): number {
  return val.length;
}

console.log(getLength("Defender")); // 8

console.log(getLength(["Volvo", "BMW", "Nexa"])); // 3
