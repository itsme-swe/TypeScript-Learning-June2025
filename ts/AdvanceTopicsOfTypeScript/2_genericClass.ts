// 1️⃣ Generic Classes
class Box<T> {
  content: T;

  constructor(val: T) {
    this.content = val;
  }

  getContent(): T {
    return this.content;
  }
}

const numberBox = new Box(100);

console.log(numberBox.getContent()); // 100

const stringBox = new Box("Hello");

console.log(stringBox.getContent()); // Hello

// 2️⃣ Generic Class 2

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  getStack(): T[] {
    return this.items;
  }
}

const numberStack = new Stack<number>();

numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
numberStack.push(40);

console.log(numberStack.getStack()); // [ 10, 20, 30, 40 ]

numberStack.pop();

console.log(numberStack.getStack());  // [ 10, 20, 30 ]
