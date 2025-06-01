/*
💥 The methods to use type guards in TypeScript:
1️⃣ typeof

2️⃣ instanceof

3️⃣ custom type guard
*/

// 1️⃣ typeof
function printID(id: string | number) {
  if (typeof id === "string") {
    console.log(`id is string: ${id}`);
  } else {
    console.log(`id is number: ${id}`);
  }
}

printID("MegaMart"); // id is string: MegaMart
printID(8505060811); // id is number: 8505060811

// instanceof
class Dog1 {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog1 | Cat) {
  if (animal instanceof Dog1) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const labra = new Dog1();

makeSound(labra); // Woof!
