/* A type alias in TypeScript is a way to create a new name for an existing type (primitive, union, object, function, etc.).*/

type userId = string;

let id: userId = "a1012";

console.log(typeof id); // string

//💥 union type aliasis
type arg = string | number;

function msg(val: arg) {
  console.log(val);
}

msg(101);
