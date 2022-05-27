// // chap 9-11 Q1

// var city = prompt ("Ënter a city name");
// if (city === "karachi"){
//     alert ("welcome the city of light")
// }
// else {
//     alert ("invalid city try again")
// }

// ===============================================================================

// // chap 9-11 Q2
// var gender = prompt ("Enter a Gender Male or Female");
// if (gender === "male"){
//     alert ("Good Morning Sir")
// }
// else {
//     alert ("Good Morning Ma’am")
// }

// ===============================================================================

// // chap 9-11 Q3
// var signal = prompt ("Enter a Signal Color RED ,GREEN , YELLOW");
// if (signal === "red"){
// document.write("Must Stop");
// }

// else if (signal === "yellow") {
//     document.write("Ready to move");
// }
// else if (signal === "green") {
//     document.write("Move Now");
// }
// else  {
//     document.write("Invalid Color");
// }

// ===============================================================================

// // chap 9-11 Q4

// var fuel = prompt ("Ënter a fuel quantity");
// if (fuel   <= 0.25) {
//     alert ("Please refill the fuel in your car")
// }
// else {
//     alert ("Your Car tank is full enjoy the trip")
// }

// ===============================================================================

// // // chap 9-11 Q5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// ===============================================================================

// // // chap 9-11 Q6

// var sub1 = +prompt("Enter your ENGLISH paper No");
// var sub2 = +prompt("Enter your URDU paper No");
// var sub3 = +prompt("Enter your MATH paper No");
// var totalmarks = +prompt("Enter Total Marks");

// var percentage = ((sub1 + sub2 + sub3) / totalmarks) * 100;

// document.write("<h2>MARK SHEET</h2>");
// document.write("Total Marks " + totalmarks);
// document.write("<br>");
// document.write("Mark Obtained " + (sub1 + sub2 + sub3));
// document.write("<br>");

// if (percentage >= 80) {
//   document.write("percentage " + percentage + "%");
//   document.write("<br/>");
//   document.write("Grade A-one ");
//   document.write("<br/>");
//   document.write("Remarks Excellent");
// }
// else if (percentage >= 70 && percentage <= 80) {
//   document.write("percentage " + percentage + "%");
//   document.write("<br/>");
//   document.write("Grade A ");
//   document.write("<br/>");
//   document.write("Remarks Good");
// }
// else if (percentage >= 60 && percentage <= 70) {
//   document.write("percentage " + percentage + "%");
//   document.write("<br/>");
//   document.write("Grade B ");
//   document.write("<br/>");
//   document.write("Remarks Good");
// }
// else {
//   document.write("percentage " + percentage + "%");
//   document.write("<br/>");
//   document.write("Grade Fail ");
//   document.write("<br/>");
//   document.write("Remarks Sorry");
// }

// ===============================================================================

// // // chap 9-11 Q7

// var number = +prompt("Guess the secret number from 1 to 10) ");

// if (number === 7) {
//   alert("Bingo Correct Answer")
//   }
//   else if (number === 6) {
//     alert("Close enough to the correct answer")
//   }
//   else if (number === 8) {
//     alert("Close enough to the correct answer")
//   }
//   else if (number >= 8) {
//     alert("Kindly enter the correct number")
//   }
//   else {
//     alert("Kindly enter the correct number")
//   }

// ===============================================================================

// // // chap 9-11 Q8

// var userInput = +prompt("Enter your Number");

// var divd = 3;

// if (userInput % divd === 0) {
//   alert("Number is divisible by 3");
// } else {
//   alert("Number not is divisible by 3");
// }

// ===============================================================================

// // // chap 9-11 Q9

// var userInput = +prompt("Enter your Number");

// var divd = 2;

// if (userInput % divd === 0) {
//   alert("Number is Even");
// } else {
//   alert("Number is Odd");
// }

// ===============================================================================

// // // chap 9-11 Q10

// var weather = +prompt("Enter a Weather Tempreature");

// if (weather >= 40) {
//     alert("It is too hot outside")
//     }
//     else if (weather >= 30) {
//       alert("The Weather today is Normal")
//     }
//     else if (weather >= 20 ) {
//       alert("Today’s Weather is Pleasant")
//     }
//     else if (weather >= 10) {
//       alert("Today’s weather is so Pleasant")
//     }
//     else {
//       alert("OMG! Today’s weather is so Cool")
//     }

// ===============================================================================

// // // chap 9-11 Q11

var userInput1 = +prompt("Enter a your First Number");
var userInput2 = +prompt("Enter a your Second Number");
var opreations = prompt("Enter an operator do you want to perfome (+,-,*,/,%");

if (opreations === "+") {
    alert("Addition of " + userInput1 + " and " + userInput2 + " is " + (userInput1 + userInput2) )
}
else if (opreations === "-") {
    alert("Subtraction of " + userInput1 + " and " + userInput2 + " is " + (userInput1 - userInput2) )
}
else if (opreations === "*") {
    alert("Multiplication of " + userInput1 + " and " + userInput2 + " is " + (userInput1 * userInput2) )
}
else if (opreations === "/") {
    alert("Division of " + userInput1 + " and " + userInput2 + " is " + (userInput1 / userInput2) )
}
else if (opreations === "%") {
    alert("Percentage of " + userInput1 + " and " + userInput2 + " is " + (userInput1 % userInput2) )
}
else {
        alert("Invalid Opreation")
      }
