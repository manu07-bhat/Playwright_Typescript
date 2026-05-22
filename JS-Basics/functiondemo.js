function hello() {
  console.log("heelo");
  console.log(typeof hello);
  //   return 2;
}
// hello();
console.log(hello());

console.log("1--------------------------------------");

function names(fname, lname) {
  return console.log(fname + " " + lname);
  console.log(fname + " " + lname); //this line won't run due to return statement
}
// console.log(names("jack", "jill"));

names("jack", "jill");
// names();//no parameter passed

console.log("--------------------------------------");

let myfc = function f1() {
  console.log("f1 function");
};
myfc();

//function inside the object

let obj1 = {
  name: "jack",
  f3: function () {
    console.log("hi this is f3 function");
  },
};
obj1.f3();

obj1.f4 = function () {
  console.log("33");

  return 3;
};

console.log(obj1.f4());
console.log("--------------------------------------");

let arr = [
  2,
  function () {
    console.log("array");
  },
];
arr[1]();

console.log("--------------------------------------");

let z = () => {
  console.log("Arraow function");
};

let myaddress = (house, street) =>
  console.log(`${house} ${street} in banglore`);
myaddress("jojo", "slikboard");
