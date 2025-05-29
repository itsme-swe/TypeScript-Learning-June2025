// 1️⃣ Regular functions
function calSum(a: number, b: number): number {
  return a + b;
}

let finalResult = calSum(10, 10);

console.log(finalResult); // 20

// 2️⃣ Function Expression ⇒ Storing function to variable
const divideVal = function (a: number, b: number): number {
  return a / b;
};

console.log(divideVal(10, 5)); // 2

// 3️⃣ Arrow function
const displayMsgBody = (msg: string): string => {
  return `Hello Guest! ${msg}`;
};

console.log(displayMsgBody("Adam")); // Hello Guest! Adam

// 4️⃣ Using Rest operator in function --- (...) allows you to accept multiple arguments as an array.
function totalSumVal(...num: number[]): number {
  return num.reduce((acc, curr) => acc + curr, 0);
}

let sumOfArr = totalSumVal(2, 4, 6, 8, 10);

console.log(sumOfArr); // 30

console.log();

// 💥 Using Rest Operator on string array
function greetEveryOne(msg: string, ...names: string[]): void {
  names.forEach((val) => {
    console.log(`${msg}, ${val}`);
  });
}

greetEveryOne("Good Morning!", "Harsh", "Juhu", "Vasu", "Gaurav");
/*
Good Morning!, Harsh
Good Morning!, Juhu 
Good Morning!, Vasu
Good Morning!, Gaurav
*/
