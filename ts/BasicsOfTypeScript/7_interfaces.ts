interface User {
  userName: string;
  email: string;
}

const user1: User = {
  userName: "Harsh",
  email: "harsh@gmail.com",
};

console.log(user1.userName); // Harsh

console.log();

interface Car {
  carName: string;
  color: string[];
  manfYear?: number; // ? stands for optional, if donot pass value to the property than TS will not throw an error
}

const skoda: Car = {
  carName: "Slavia",
  color: ["Red", "Black", "Green"],
  manfYear: 2025,
};

const bmw: Car = {
  carName: "XC00",
  color: ["black", "grey"],
};

skoda.color.push("Blue");

console.log(skoda.color); // [ 'Red', 'Black', 'Green', 'Blue' ] 💥 Here I can only mutate color property only, not to the carName bcoz it is readonly property.
