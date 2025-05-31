/*
1️⃣ public (by default) ⇨ A public member can be accessed anywhere.

2️⃣ protected ⇨ Members are only visible to subclasses of the class they’re declared in. 

3️⃣ private ⇨ private is like protected, but doesn’t allow access to the member even from subclasses
*/

class Car_SUV {
  make: string;
  private model: string;  // We cannot access this property outside of the class
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getModelAndYear(): string {
    return `Model: ${this.model}, Year: ${this.year}.`;
  }
}

const newCar1 = new Car_SUV("LandRover", "Defender Octa", 2025);

console.log(newCar1.getModelAndYear()); // Model: Defender Octa, Year: 2025.
