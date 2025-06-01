// 💥 Using literal types in function

function printStatus(status: "Delivered" | "Preparing" | "Cancelled"): void {
  console.log(`Current status of your order is ${status}`);
}

printStatus("Preparing"); // Current status of your order is Preparing

printStatus("Delivered"); // Current status of your order is Delivered

// 💥 Using literal inside interface

interface ButtonConfig {
  size: "small" | "medium" | "large";
  color: "red" | "green" | "blue";
}

let btn: ButtonConfig = {
  size: "medium",
  color: "red",
};

console.log(btn); // { size: 'medium', color: 'red' }
