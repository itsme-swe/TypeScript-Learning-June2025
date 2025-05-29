class CarNew {
  modelNewName: string;
  color: string[];

  //🔸 Parameterized constructor
  constructor(model: string, colors: string[]) {
    this.modelNewName = model;
    this.color = colors;
  }
}

const car1 = new CarNew("Defender", ["Black", "Golden White"]);

console.log(car1); // Car { modelName: 'Defender', color: [ 'Black', 'Golden White' ] }
