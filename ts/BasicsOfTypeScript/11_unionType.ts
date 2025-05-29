/*
💥The TypeScript union has the ability to combine one or two different types of data (i.e., number, string, float, double, etc). It is the most powerful way to express a variable with multiple types. Use pipe ('|') symbol to combine two or more data types to achieve Union type.
*/

// 1️⃣ Example
let value: number | string;

value = 1990;

console.log(`Numeric value of the value is ${value}`);

// op: Numeric value of the value is 1990

console.log();

value = "Learn TypeScript";

console.log(`String value of value is ${value}`);

// op: String value of value is Learn TypeScript

console.log();

// 2️⃣ Example
function displayType(geek: string | number) {
  if (typeof geek === "string") console.log("Geek is string");
  else if (typeof geek === "number") console.log("Geek is number");
}

displayType(404); // Geek is number

displayType("Harsh"); // Geek is string
