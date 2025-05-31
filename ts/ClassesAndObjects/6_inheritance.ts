class Animal {
  constructor(public name: string) {}

  protected makeSound(): void {
    console.log("Some generic sound...");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): void {
    console.log("Barking");
  }

  newSound(): void {
    this.makeSound();
    console.log("New sound");
  }
}

const dog = new Dog("Angad");

dog.makeSound();

dog.newSound();
