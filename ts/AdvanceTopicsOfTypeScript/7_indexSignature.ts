/*
💥 In TypeScript, an index signature allows you to define types for objects with dynamic property names—where you don’t know all the keys ahead of time, but you know the type of the values.
*/

interface Fruit {
  [key: string]: string;
}

const fruitArray: Fruit = {
  apple: "red fruit",
  banana: "yellow fruit",
};

console.log(fruitArray["apple"]); // red fruit
