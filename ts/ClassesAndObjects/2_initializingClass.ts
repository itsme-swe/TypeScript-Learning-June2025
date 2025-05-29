// 1️⃣ Method 1 ⇨ Initialize at declaration
class newPoint {
  x: number = 0;
  y: number = 0;
}

const np1 = new newPoint();

np1.x = 20;
np1.y = 30;

console.log(np1.y); // 30

console.log();

// 2️⃣ Method 2 ⇨ Using constructor

class newPoint1 {
  x: number;
  y: number;

  // non-parameterized constructor
  constructor() {
    this.x = 0;
    this.y = 0;
  }
}

const np2 = new newPoint1();

np2.x = 50;
np2.y = 10;

console.log(np2.x); // 50
