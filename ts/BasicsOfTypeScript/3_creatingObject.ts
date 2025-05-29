let obj: object = {
  name: "Harsh",
  age: 32,
  isLoggedIn: true,
  lastLoggedIn: "Monday",
};

obj = { ...obj, dept: "Backend" };

console.log(obj);

let obj1: { name: string; age: number; isLoggedIn: boolean } = {
  name: "Mukul",
  age: 32,
  isLoggedIn: false,
};
