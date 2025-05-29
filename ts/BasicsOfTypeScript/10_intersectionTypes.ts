/*
 💥 An intersection type is a type that merges several kinds into one. This allows you to combine many types to create a single type with all of the properties that you require. The '&' operator is used to create the intersection type. 
*/

// 1️⃣ Example 1: Creating an intersected type : Two interfaces named student and teacher are created. Intersected type is created by using '&' between student and teacher. Intersected type contains all the properties of the two interfaces. An obj of intersection type is created and values are retrieved from it.

interface Student {
  student_id: number;
  name: string;
}

interface Teacher {
  Teacher_id: number;
  teacher_name: string;
}

//🔸 Using intersection type
type intersected_type = Student & Teacher;

const obj01: intersected_type = {
  student_id: 101,
  name: "Harsh",
  Teacher_id: 505,
  teacher_name: "Mayank Mathur",
};

console.log(obj01.Teacher_id);  // 505
console.log(obj01.name);  // Harsh
