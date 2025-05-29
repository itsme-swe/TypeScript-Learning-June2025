// 1️⃣ Write a function to calculate the factorial of number with proper type annotation

// 💥 Using recursive function
function factorialNum(num: number): number {
  if (num == 0 || num == 1) return 1;
  return num * factorialNum(num - 1);
}

console.log(factorialNum(4)); // 4*3*2*1 = 24
