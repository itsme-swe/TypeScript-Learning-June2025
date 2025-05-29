class Point {
  x!: number;
  y!: number;
} 

// 💥 Here using definite assignment assertion (!) ⇨ This tells TypeScript: “Trust me, I will assign these later.” Without this TS gives us error msg.

const p1 = new Point();

p1.x = 2;
p1.y = 5;

console.log(p1.x);  // 2
