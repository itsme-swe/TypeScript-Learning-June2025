// 💥 Define a function that accepts a user object with (name, age, email) and returnb a formatted string

interface UserData {
  name: string;
  age: number;
  email: string;
}

// 🔸 Passing interface to function
function formatUser(user: UserData): string {
  return `The username of user is ${user?.name}, age of user is ${user?.age} and the mailling id is ${user.email}.`;
}

const userAlpha: UserData = {
  name: "Harsh",
  age: 32,
  email: "harsh@gmail.com",
};

console.log(formatUser(userAlpha)); // The username of user is Harsh, age of user is 32 and the mailling id is harsh@gmail.com.

console.log();

const userMax: UserData = {
  name: "Mukul",
  age: 32,
  email: "mk@gmail.com",
};

console.log(formatUser(userMax)); // The username of user is Mukul, age of user is 32 and the mailling id is mk@gmail.com.
