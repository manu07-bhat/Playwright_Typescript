let arr = ["1", 21, 4, "till"];
console.log(arr);
console.log(typeof arr);
console.log(arr[2]);
console.log(arr[10]);
console.log(typeof arr[0]);
console.log(arr.length);
console.log(arr[arr.length - 2]);

console.log("=====================");

arr.push(100); //adds last
console.log(arr);

arr.unshift("first"); //adds first
console.log(arr);

arr.pop(); //deletes the last
console.log(arr);

arr.shift(); //deletes the first
console.log(arr);

arr.splice(1, 2); //start & end
console.log(arr);

arr.splice(1, 5);
console.log(arr);

let arr1 = [10, 20, 30, "til", true];
let arr2 = ["java", 20, false];

arr1.push(arr2);

console.log(arr1);
console.log("-----------------------------------------------------------");

let arr3 = ["1", 21, 4, "till"];

let obj1 = {
  name: "jack",
  lang: "JS",
};
arr3.push(obj1);
arr3.push(100);
arr3.push(arr2);
console.log(arr3);
console.log(arr3[4]["name"]);
console.log(arr3[4].lang);

console.log("========================");

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}
