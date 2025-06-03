/*
💥 TypeScript Decorators are a new and special way of declaring the classes, methods, parameters, and properties. The decorators are defined using the @expression syntax, where the expression will be a function that is to be invoked at the runtime with the information of the decorated declaration.

Decorators are just functions in a particular form which can apply to:

1️⃣ Class
2️⃣ Class Property
3️⃣ Class Method
4️⃣ Class Accessor
5️⃣ Class Method Parameter

There are five types of decorators we can use:

1️⃣ Class Decorators
2️⃣ Property Decorators
3️⃣ Method Decorators
4️⃣ Accessor Decorators
5️⃣ Parameter Decorators

*/

// 1️⃣ Class Decorator
function Logger(constructor: Function) {
  console.log(`Logging creation of class: ${constructor.name}`);
}

@Logger
class People {
  constructor(public name: string) {}
}

const newP1 = new People("Harsh");

console.log(newP1);

// 2️⃣ Method Decorator

