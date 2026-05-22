let fn = "jill";
console.log(typeof fn);
console.log(fn);
let ln = new String("hill");
console.log(typeof ln);
console.log(ln);

console.log(fn.length);
console.log(ln.charAt(1));

let gn = " jack & Jill ";
console.log(gn.split(" "));

console.log(gn.replace("&", "and"));
console.log(gn.trim());

let msg = "Total is 200 INR";
console.log(typeof msg);
let msg2 = msg.split(" ")[2];
let money = parseInt(msg2);
console.log(typeof money);
console.log(money);

if (money == 200) {
  console.log("pass");
} else {
  console.log("fail");
}

let m1 = "Final amount is '199' EUR";
console.log(m1);

let m2 = `Final amount is '200' EUR`;
console.log(m2);
let m3 = `Final amount is "200" EUR`;
console.log(m3);

let m4 = "Final \t\t\t\t\tamount is '999 ' amount";
console.log(m4);
let m5 = `Final 
amount 
'300' 
USD`;
console.log(m5);

let x = 40;
let m7 = `Final \t\t\t\t\tamount is ${x} amount`;
console.log(m7);
