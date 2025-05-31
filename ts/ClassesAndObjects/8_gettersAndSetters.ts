/*
🔸 getters ⇨ are used toi fetch the value

🔸 setters ⇨ are used to set the value
*/

class Circle {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  get radius(): number {
    return this._radius;
  }

  set radius(val: number) {
    if (val <= 0) {
      throw new Error("Radius must be positive");
    }
    this._radius = val;
  }
}

const c1 = new Circle(10);

console.log(c1.radius); // using get method to fetch the value of radius... 10

c1.radius = 20; // Now using set method to change the value of radius

console.log(c1.radius); // 20 ... Now the value is 20
