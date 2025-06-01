/*
💥 ypeScript's literal types allow developers to specify exact values for variables, function parameters, or properties, enhancing type safety by ensuring variables can only hold predefined values.
*/

// 1️⃣ String Literal Type

type Direction = "up" | "down" | "left" | "right";

let moveLeft: Direction = "left";

let moveRight: Direction = "right";

// The Direction type can only be one of the specified string literals: "Up", "Down", "Left", or "Right".

// Assigning any value outside this set results in a compile-time error.

// 2️⃣ Numeric Literal Types

type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceRoll {
  return (Math.floor(Math.random() * 6) + 1) as DiceRoll;
}

let output = rollDice();

console.log(output);
