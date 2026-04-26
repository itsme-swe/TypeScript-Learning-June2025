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

console.log(obj1);

//🌟 Creating Object using interface --- we use interface to define data types for object

interface StudentInterface {
  name: string;
  rollNo: number;
  subject: string;
  isPresent: boolean;
}

const App = () => {
  const student: StudentInterface = {
    name: "Harsh",
    rollNo: 105,
    subject: "CS",
    isPresent: true,
  };
  console.log(student);
};

App();

// { name: 'Harsh', rollNo: 105, subject: 'CS', isPresent: true }
