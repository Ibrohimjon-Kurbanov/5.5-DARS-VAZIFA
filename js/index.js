// Majburiy masalalar

// 1-masala

// function capitalize(arg) {
//   let str = arg.toLowerCase().split(" ");

//   for (let i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }

//   return str.join(" ");
// }

// console.log(capitalize("ibrohimjon kurbanov"));

// 2-masala

// function reverceStr(arg) {
//   return arg.split("").reverse().join("");
// }

// console.log(reverceStr("salom"));

// 3-masala

// function average(arg) {
//   let sum = 0;
//   let len = arg.length;

//   for (let i = 0; i < arg.length; i++) {
//     sum += arg[i];
//   }

//   return sum / len;
// }

// let arr = [10, 20, 30, 40, 50];

// console.log(average(arr));

// 4-masala

// function lengthStr(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     res.push(arg[i].length);
//   }
//   return res;
// }

// let arr = ["salom", "dunyo"];

// console.log(lengthStr(arr));

// 5-masala

// function oodNumbers(arg) {
//   let res = [];

//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] % 2 == 1) {
//       res.push(arg[i]);
//     }
//   }
//   return res;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(oodNumbers(arr));

// 6-masala

// function mergeObjects(obj1, obj2) {
//   let res = {};

//   for (const key in obj1) {
//     res[key] = obj1[key];
//   }

//   for (const key in obj2) {
//     res[key] = obj2[key];
//   }

//   return res;
// }

// let object1 = { name: "John", age: 25 };
// let object2 = { weight: 70, job: "developer" };

// console.log(mergeObjects(object1, object2));

// 7-masala

// function removeSpace(arg) {
//   return arg.trim();
// }

// let str = prompt("Nimadir kiriting:");

// console.log(removeSpace(str));

// 8-masala

// let obj = {
//   name: "John",
//   age: 29,
//   job: "developer",
//   weight: 67,
// };

// function objToArr(arg) {
//   let res = [];
//   for (const key in arg) {
//     res.push(arg[key]);
//   }
//   return res;
// }

// console.log(objToArr(obj));

// 9-masala

// let numbers = [9, 22, 3, 4, 10];

// function minAndMax(arg) {
//   let min = arg[0];
//   let max = arg[0];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] < min) {
//       min = arg[i];
//     }
//     if (arg[i] > max) {
//       max = arg[i];
//     }
//   }

//   return { min: min, max: max };
// }

// console.log(minAndMax(numbers));

// 10-masala

// function countVowels(arg) {
//   let vowels = "auioeAUIOE";
//   let count = 0;

//   for (const str of arg) {
//     if (vowels.includes(str)) {
//       count++;
//     }
//   }
//   return count;
// }

// let str = "assalomu alaykum";

// console.log(countVowels(str));

// 11-masala

// function greet(arg) {
//   return arg.map(function (value) {
//     return value + 2;
//   });
// }

// let arr = [1, 2, 3, 4, 5];

// console.log(greet(arr));

// 12-masala

// function maxLengthString(arg) {
//   let max = "";
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i].length > max.length) {
//       max = arg[i];
//     }
//   }
//   return max;
// }

// let arr = ["hello", "world", "javascript"];

// console.log(maxLengthString(arr));

// 13-masala

// function average(arg) {
//   let sum = 0;
//   let len = arg.length;

//   for (let i = 0; i < arg.length; i++) {
//     sum += arg[i];
//   }

//   let averageRes = sum / len;

//   let res = [];

//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] > averageRes) {
//       res.push(arg[i]);
//     }
//   }

//   return res;
// }

// let arr = [10, 20, 30, 40, 50];

// console.log(average(arr));

// 14-masala

// function remove(arg) {
//   return arg.length > 1 ? arg.slice(1, -1) : arg;
// }

// console.log(remove("djavascriptw"));

// 15-masala

// function sumKV(arg) {
//   let sum = 0;
//   for (let i = 0; i < arg.length; i++) {
//     sum += arg[i] ** 2;
//   }
//   return sum;
// }

// let arr = [1, 2, 3, 4];
// console.log(sumKV(arr));

// 16-masala

// function reverseArr(arg) {
//   let res = [];
//   for (let i = arg.length - 1; i >= 0; i--) {
//     res.push(arg[i].split("").reverse().join(""));
//   }
//   return res;
// }

// let arr = ["salom", "dunyo"];

// console.log(reverseArr(arr));

// 17-masala

// function capitalize(arg) {
//   return arg.toUpperCase();
// }

// console.log(capitalize("salom dunyo"));

// 18-masala

// function greet(user, age = 18) {
//   return user.filter((user) => user.age > age);
// }

// let users = [
//   { name: "John", age: 21 },
//   { name: "David", age: 18 },
//   { name: "Alex", age: 25 },
// ];

// console.log(greet(users));

// 19-masala

// function filterEl(arg, el) {
//   let count = 0;
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] == el) {
//       count++;
//     }
//   }
//   return count;
// }

// let arr = [1, 2, 3, 4, 5, 3, 6, 7, 3];
// let el = 3;
// console.log(filterEl(arr, el));

// 20-masala

// function greet(str1, str2) {
//   let res = "";

//   for (let i = 0; i < str1.length; i++) {
//     if (str2.includes(str1[i]) && !res.includes(str1[i])) {
//       res += str1[i];
//     }
//   }
//   return res;
// }

// console.log(greet("hello", "world"));

// Ixtiyoriy masalalar

// 2-masala

// function greet(arg1, arg2) {
//   return arg1.filter(function (value) {
//     return arg2.includes(value);
//   });
// }

// let arr1 = [1, 2, 3, 4, 5, 7];
// let arr2 = [6, 7, 2, 8, 4];

// console.log(greet(arr1, arr2));

// 3-masala

// function greet(arg) {
//   return arg.sort(function (a, b) {
//     return a.age - b.age;
//   });
// }

// let students = [
//   { name: "Jasur", age: 23 },
//   { name: "Asad", age: 19 },
//   { name: "Bexruz", age: 20 },
// ];

// console.log(greet(students));

// 4-masala

// function greet(arg) {
//   let res = {};

//   for (const key in arg) {
//     if (typeof arg[key] == "number") {
//       res[key] = arg[key] * 2;
//     } else [(res[key] = arg[key])];
//   }
//   return res;
// }
// let obj = {
//   name: "John",
//   age: 20,
//   weight: 65,
//   height: 170,
//   job: "developer",
// };

// console.log(greet(obj));

// 5-masala

// function greet(arg) {
//   let res = [];
//   let sum = 0;

//   for (let i = 0; i < arg.length; i++) {
//     if (!res.includes(arr[i])) {
//       res.push(arg[i]);
//       sum += arg[i];
//     }
//   }
//   return sum;
// }

// let arr = [2, 2, 3, 4, 4, 5, 6];

// console.log(greet(arr));
