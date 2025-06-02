// 6️⃣ Record <Keys, Types> constructs an object type whose property keys are of type K and values are of type T. It's useful when you want to define a fixed set of keys with specific value types.

type DogName = "angad" | "tuffy" | "max";

interface DogInfo {
  age: number;
  breed: string;
}

const dogs: Record<DogName, DogInfo> = {
  angad: { age: 3, breed: "rotwieler" },
  tuffy: { age: 7, breed: "labra" },
  max: { age: 5, breed: "german" },
};

console.log(dogs.max); // { age: 5, breed: 'german' }

dogs.angad.age = 6;

console.log(dogs.angad); // { age: 6, breed: 'rotwieler' }
