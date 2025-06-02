/*
💥 Utility types in TypeScript are built-in types that simplify common type transformations. They allow you to manipulate, extract, or build upon existing types without repeating yourself. Think of them as type-level functions that help you write cleaner, DRY, and scalable code.
*/

// 1️⃣ Partial <Type> constructs a type with all properties of the provided type T set to optional. It's useful when we want to create a new type where all properties can be present but aren't required.
interface UserRecord {
  name: string;
  age: number;
  email: string;
}

const updateUser = (user: Partial<UserRecord>) => {
  console.log(user);
};

updateUser({ name: "Harsh" });

// 2️⃣ Required <Type> onstructs a type where all properties of the provided type T are set to required. This is useful when we want to ensure that all properties must be present.
type UserOne = Required<UserRecord>;

let userHarsh: UserOne = {
  name: "Harsh",
  age: 32,
  email: "harsh@gmail.com",
};

console.log(userHarsh);

// 3️⃣ Readonly <Type> constructs a type where all properties of the provided type T are marked as readonly. It's beneficial for ensuring immutability.
type UserReadproperties = Readonly<UserRecord>;

let userMukul: UserReadproperties = {
  name: "Mukul",
  age: 32,
  email: "mk@gmail.com",
};

// userMukul.age = 33 ⇨ This will give us error bcoz we are trying to change the property of Readonly utility type

// 4️⃣ Pick <Types, Keys> constructs a type by picking the set of properties specified by the keys K from the type T. It's useful when we want to create a new type by selecting only a few properties from an existing type.
type UserInfo = Pick<UserRecord, "name" | "email">;

const userVasu: UserInfo = {
  name: "Vandana Mehra",
  email: "vasu@gmail.com",
};

// 5️⃣ Omit <Type> Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals). The opposite of Pick.
type UserWithoutEmail = Omit<UserRecord, "email">;

const userOmitInfo: UserWithoutEmail = {
  name: "Juhi",
  age: 31,
};
