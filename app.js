// //get element
// const btnAdd = document.getElementById("add");
// const btnClear = document.getElementById("clear");
// const btnDeleteItem = document.getElementById("delete-item");
// const btnUpdateItem = document.getElementById("update-item");

// let students = [];

// btnAdd.addEventListener("click", () => {
//   const value = prompt("Enter name");
//   students.push(value);

//   console.log(students);
// });

// btnClear.addEventListener("click", () => {
//   students = [];

//   console.log(students);
// });

// btnDeleteItem.addEventListener("click", () => {
//   const index = +prompt("Index");
//   if (students.length - 1 < index) {
//     alert("Index not avaible");

//     return;
//   }

//   // const newStudents = [];

//   // for (let i = 0; i <= students.length - 1; i++) {
//   //   if (i === index) {
//   //     continue;
//   //   }

//   //   newStudents[i] = students[i];
//   // }

//   // console.log(newStudents);

//   students.splice(index, 1);

//   console.log(students);
// });
// btnUpdateItem.addEventListener("click", () => {
//   const index = +prompt("Index");
//   if (students.length - 1 < index) {
//     alert("Index not avaible");

//     return;
//   }

//   const value = prompt("value");

//   const newStudents = [];

//   for (let i = 0; i <= students.length - 1; i++) {
//     if (i === index) {
//       newStudents[i] = value;
//     } else {
//       newStudents[i] = students[i];
//     }
//   }

//   // console.log(newStudents);

//   students.splice(index, 1, value);

//   // console.log(students);
// });

// const name = "a";

// name = "B";

// console.log(name);

// const students = ["a"];

// students.push("b");

// console.log(students);

const person = {
  name: "MindX",
  age: 18,
  address: "HN",
  gender: "male",
};

console.log(person.mat);
