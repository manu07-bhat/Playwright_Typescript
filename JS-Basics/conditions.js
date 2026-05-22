let browser = "chr";
if (browser.includes("firefox")) {
  console.log("firefox");
} else if (browser.includes("chrome")) {
  console.log("chrome");
} else if (browser.includes("edge")) {
  console.log("edge");
} else {
  console.log("browser not listed");
}

let day = new Date().getDay();
console.log(day);

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid date");
    break;
}
