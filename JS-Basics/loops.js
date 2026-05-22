// let n = 10;
// for (let i = 0; i < n; i++) {
//   console.log(i);
//   //   print(i);
// }

// for (i = 20; i > 0; i--) {
//   console.log(i);
// }

let arr1 = [1, 2, 4, 56, 6, "jack", 9];

for (i = 0; i <= arr1.length - 1; i++) {
  console.log(arr1[i]);
}

arr1.forEach((ele) => {
  console.log(ele);
});

for (let myarr in arr1) {
  console.log(myarr);
}

console.log("-----------------------------");

let s1 = "manoj";
let count = 0;
for (x of s1) {
  count++;
  console.log(x);
}
console.log(count);
console.log("-----------------------------");

let sum = 6;
while (sum < 15) {
  console.log("sum value " + sum);
  if (sum === 10) {
    sum++;
    continue;
  }
  sum++;
}

console.log("-------------------------------------------");

let y = 10;
do {
  console.log("value", y);
  y++;
} while (y <= 20);
   