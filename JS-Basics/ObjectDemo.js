let obj1 = {};
console.log(typeof obj1);

let obj2 = {
  name: "jack",
  address: 12,
  12: "22",
  status: false,
};
console.log(typeof obj2);

console.log(obj2);

console.log(obj2.name);
console.log(obj2["name"]);

obj2.salary = 100;
console.log(obj2.salary);
console.log(obj2);

delete obj2.salary;
delete obj2; //does not delete the object
console.log(obj2);

console.log("--------------------------------------");

let obj3 = {
  Lang: "Kannada",
  state: "karnataka",
};
obj2.fulladdress = obj3;

console.log(obj2);

console.log("-----------00----------");

let arr1 = ["jack", "jill", "tom"];
obj2.family = arr1;

console.log(obj2);

console.log(obj2.fulladdress.Lang);
console.log(obj2.family[1]);

console.log(obj2[12][0]);

obj2.function1 = function () {
  console.log("hello hi ");
};

console.log(obj2);
console.log(obj2.function1);
obj2.function1();
