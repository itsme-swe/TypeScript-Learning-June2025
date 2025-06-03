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

function logger(target: any, ctx: ClassDecoratorContext) {
  console.log("Logger decorator");
  console.log(target);
  console.log(ctx);
}

@logger
class NewPerson {
  name: string = "Harsh";

  greet(): void {
    console.log(`Hi I am ${this.name}`);
  }
}
