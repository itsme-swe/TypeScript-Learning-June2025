/*
💥 Type assertion in TypeScript tells the compiler "trust me, I know what I'm doing" — you're essentially manually telling TypeScript the type of a value when the compiler can’t infer it correctly.
*/

let someVal: any = "Hello World";

// 1️⃣ as syntax (preferred in JSX or TSX):
let strLength: number = (someVal as string).length;

console.log(strLength); // 11

// 2️⃣ Angle-bracket syntax
let arrLength: number = (<string>someVal).length;

console.log(arrLength); // 11
