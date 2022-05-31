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

// var userInput1 = +prompt("Enter a your First Number");
// var userInput2 = +prompt("Enter a your Second Number");
// var opreations = prompt("Enter an operator do you want to perfome (+,-,*,/,%");

// if (opreations === "+") {
//     alert("Addition of " + userInput1 + " and " + userInput2 + " is " + (userInput1 + userInput2) )
// }
// else if (opreations === "-") {
//     alert("Subtraction of " + userInput1 + " and " + userInput2 + " is " + (userInput1 - userInput2) )
// }
// else if (opreations === "*") {
//     alert("Multiplication of " + userInput1 + " and " + userInput2 + " is " + (userInput1 * userInput2) )
// }
// else if (opreations === "/") {
//     alert("Division of " + userInput1 + " and " + userInput2 + " is " + (userInput1 / userInput2) )
// }
// else if (opreations === "%") {
//     alert("Percentage of " + userInput1 + " and " + userInput2 + " is " + (userInput1 % userInput2) )
// }
// else {
//         alert("Invalid Opreation")
//       }



// ===============================================================================

// // // chap 12-13 Q1

// var userInput = prompt("Enter a Character i.e. : a-z,A-Z,0-9")
//     var asciiCode = userInput.charCodeAt(0);

 
//     if (asciiCode >= 65 && asciiCode <= 90) {
//         alert(userInput +  " \nThis is a uppercase letter")
//     }
//     else if (asciiCode >= 97 && asciiCode <= 122) {
//         alert(userInput + " \nThis is a Lowercase letter")
//     }
//     else if (asciiCode >= 48 && asciiCode <= 57) {
//         alert(userInput + " \nThis is a number")
//     }
//     else {
//         alert("Invalid Opreation")
//     }



// ===============================================================================

// // // chap 12-13 Q2

// var UserNumber1 = +prompt("Enter your number 1 ")
//     var UserNumber2 = +prompt("Enter your number 2 ")

//     if (UserNumber1 > UserNumber2) {
//         alert(UserNumber1 + " \nis greater than\n" + UserNumber2)
//     }
//     else {
//         alert(UserNumber2 + " \nis greater than\n" + UserNumber1)
//     }


// ===============================================================================

// // // chap 12-13 Q3


// var numberInput = +prompt("Enter your number : ")

// if (numberInput > 0) {
//     alert("Your Input Number is\nPositive Number ")
// }
// else if (numberInput < 0) {
//     alert("Your Input Number is\nNegative Number")
// }
// else if (numberInput === 0) {
//     alert("Your Input Number is\nZero")
// }
// else {
//     alert("Invalid Opreation")
// }



// ===============================================================================

// // // chap 12-13 Q4

// var character = prompt("Enter a Vowel Character (a-z, A-z)");

//     if ((character == "a") || (character == "A") || (character == "e") || (character == "E") || (character == "i") || (character == "I") || (character == "O") || (character == "o") || (character == "u") || (character == "U")) {
//         alert("TRUE \nThis is vowel character")
//     }
//     else {
//         alert("FALSE \nThis is not a vowel character")
//     }



// ===============================================================================

// // // chap 12-13 Q5

// var correctPassword = "waseemqasim";
//     var InputPassword = prompt("Guess a Correct Password");
//     if (InputPassword === correctPassword) {
//         alert("Congratulations ! \nYou Enter a Correct Password \nThank You !")
//     }
//     else if (InputPassword == "") {
//         alert("Please Enter Your \nCorrect Password")
//     }
//     else {
//         alert("Please Enter Correct Password")
//     }



// ===============================================================================

// // // chap 12-13 Q6

// var greeting;
//     var hour = 13;
//     if (hour < 18) {
//         greeting = "HAVE A GOOD DAY";
//         alert(greeting)
//     }
//     else {
//         greeting = "HAVE A GOOD EVENING";
//         alert(greeting)
//     }



// ===============================================================================

// // // chap 12-13 Q7


    // var userInput = +prompt("Enter a time in 24 hours clock format like: 1900 = 7pm.")
    // if(userInput>=0000 && userInput<1200 ){
    
    //     alert("Good Morning !")
    // }
    // else if (userInput>=1200 && userInput<1700){
    //     alert("Good Afternoon !")
    // }
    // else if (userInput>=1700 && userInput<2100){
    //     alert("Good Evening!")
    // }
    // else if (userInput>=2100 && userInput<2359){
    //     alert("Good Night !")
    // }
    // else{
    //     alert("Invalid time format")
    // }



// ===============================================================================

// // // chap 14-16 Q1

// var cities = [];
//     alert("var cities = [ ] ;")



// ===============================================================================

// // // chap 14-16 Q2

// arrayList = new Array()
//     alert(" arrayList = new Array()")




// ===============================================================================

// // // chap 14-16 Q3

// var stringArray = ["Karachi", "\nIslamabad", "\nMultan"];
// alert (stringArray)





// ===============================================================================

// // // chap 14-16 Q4

// var numberArray = [1, 2, 4, 5, 6, 66, 67];
// alert (numberArray)




// ===============================================================================

// // // chap 14-16 Q5

// var boolArray = [true, true, false, false];
// alert (boolArray)




// ===============================================================================

// // // chap 14-16 Q6

// var mixArray = ["Karachi", "Lahore", "Islambad", 1, 2, 4, 5, 6, 66, 67,true, true, false, false];
// alert (mixArray)




// ===============================================================================

// // // chap 14-16 Q7

// var qualificationsInPak = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]

//     document.write("<h1>Qualification</h1><br>")
//     document.write(`<h2>1) ${qualificationsInPak[0]}</h2>`)
//     document.write(`<h2>2) ${qualificationsInPak[1]}</h2>`)
//     document.write(`<h2>3) ${qualificationsInPak[2]}</h2>`)
//     document.write(`<h2>4) ${qualificationsInPak[3]}</h2>`)
//     document.write(`<h2>5) ${qualificationsInPak[4]}</h2>`)
//     document.write(`<h2>6) ${qualificationsInPak[5]}</h2>`)
//     document.write(`<h2>7) ${qualificationsInPak[6]}</h2>`)
//     document.write(`<h2>8) ${qualificationsInPak[7]}</h2>`)




// ===============================================================================

// // // chap 14-16 Q8


// var stdNames = ["Sadiq", "bilal", "Dany"];
//     var stdScroes = [450, 340, 380];

//     var perofStd1 = stdScroes[0] / 500 * 100;
//     var perofStd2 = stdScroes[1] / 500 * 100;
//     var perofStd3 = stdScroes[2] / 500 * 100;

//     document.write(`Score of  ${stdNames[0]} is ${stdScroes[0]}. Percentage ${perofStd1}% <br> `)
//     document.write(`Score of  ${stdNames[1]} is ${stdScroes[1]}. Percentage ${perofStd2}% <br> `)
//     document.write(`Score of  ${stdNames[2]} is ${stdScroes[2]}. Percentage ${perofStd3}% <br> `)




// ===============================================================================

// // // chap 14-16 Q9

// var colors = ["RED", "GREEN", "BLUE"];
//     document.write(colors);



// ===============================================================================

// // // chap 14-16 Q9a


    // var colorInput = prompt("RED \nGREEN  \nBLUE \nEnter a color name which do you want to add in the start.");
    // var colors = ["RED", "GREEN", "BLUE"];
    // var Addedcolor = colors.unshift(colorInput);
    // document.write(colors);



// ===============================================================================

// // // chap 14-16 Q9b

// var colorInput = prompt("RED \nGREEN  \nBLUE \nEnter a color name which do you want to add in the end.");
//     var colors = ["RED", "GREEN", "BLUE"];
//     var Addedcolor = colors.push(colorInput);
//     document.write(colors);




// ===============================================================================

// // // chap 14-16 Q9c


    // var colorInput1 = prompt("RED \nGREEN  \nBLUE \nEnter a color name which do you want to add in the start.");
    // var colorInput2 = prompt("RED \nGREEN  \nBLUE \nEnter a color name which do you want to add in the start.");
    // var colors = ["RED", "GREEN", "BLUE"];
    // var Addedcolor = colors.unshift(colorInput1 , colorInput2);
    // document.write(colors);
    



// ===============================================================================

// // // chap 14-16 Q9d


    // var colorInput = prompt("RED \nGREEN  \nBLUE \nEnter a color name which do you want to delete in the start.");
    // var colors = ["RED", "GREEN", "BLUE"];
    // var Addedcolor = colors.shift(colorInput);
    // document.write(colors);




// ===============================================================================

// // // chap 14-16 Q9e

// var colorInput = prompt("RED \nGREEN  \nBLUE \nEnter a color name which do you want to delete in the end.");
//     var colors = ["RED", "GREEN", "BLUE"];
//     var Addedcolor = colors.pop(colorInput);
//     document.write(colors);
    




// ===============================================================================

// // // chap 14-16 Q9f


// var colors = ["RED", "GREEN", "BLUE"];
//     var deleteIndex = +prompt("At which index do you want to delete color?")
//     var colorDelete = +prompt("which color do you want to delete on that index?")
//     colors.splice(deleteIndex, colorDelete);
//     document.write(colors + "<br/>");



