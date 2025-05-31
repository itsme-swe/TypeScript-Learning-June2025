/*
💥 Generics are a way to create components (functions, classes or interfaces) that work with different types without losing type safety.
*/

// 1️⃣ Generic function
function genericIdentity<T>(args: T): T {
  return args;
}

console.log(genericIdentity<number>(10));

console.log(genericIdentity<string>("Hi"));

console.log(genericIdentity<boolean>(true));

// 2️⃣ Generic Interface

interface KeyPair<K, V> {
  key: K;
  val: V;
}

let pair1: KeyPair<number, string> = {
  key: 1,
  val: "One",
};

let pair2: KeyPair<number, boolean> = {
  key: 1,
  val: true,
};

console.log(pair1); // { key: 1, val: 'One' }
console.log(pair2); // { key: 1, val: true }

// 3️⃣ Generic Constraints ⇒ in below example only those arguments will be passed who is having length property in it.
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log(getLength("Hello World")); // 11

console.log(getLength([2, 4, 6, 8])); // 4

