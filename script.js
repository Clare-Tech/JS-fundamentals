"use strict";

// function logger(){
//     console.log("This is a logger");
// }
// logger()

// function foodProcessor(apple, mango){
//     console.log(apple, mango);
//     let juice = `There are ${apple <1?"no":apple} apple and ${mango < 1 ? "no" : mango} mangoes`
//     return juice
// }
// let appleJuice = foodProcessor(5,2)
// console.log(appleJuice);

// let date = new Date()
// console.log(declaration(1990));
// function declaration(year){
//     return date.getFullYear()- year
// }

// const expression=(age)=>{
//     return date.getFullYear() - age
// }
// let result = expression(1999);
// console.log(result);

// const retirementAge = (birthYear, firstName) => {
//     const retire = 2024 - birthYear
//     const due = 65 - retire
//     return `${firstName} retires in ${due} years`
// }
// document.getElementById("demo").innerHTML=retirementAge(1998, "Jane");

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (AvgDolphins, avgKoalas) {
//   if (AvgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${AvgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * AvgDolphins) {
//     console.log(`Koalas wins🏆 (${avgKoalas} vs. ${AvgDolphins})`);
//   } else {
//     console.log("No winner");
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(574, 111);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins, scoreKoalas);

// let date = new Date();
// const calcAges = function (birthYear) {
//   return 2045 - birthYear;
// };

// const dob = [1998, 1990, 1976, 1980, 1967];
// // console.log(calcAges(dob));
// document.getElementById("demo").innerHTML=calcAges(dob)

// loop
// for loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`This is repetition ${rep}`);
// }

// const person = ["Jonas", "Schmedtmann", 2037-1991, "Teacher", ["Michael", "peter", "Steven"], true];
// let types = []
// let text = "<ul><h1>Person </h1>"

// for(let i = 0; i<person.length; i++){
//   text += `<li>${person[i]} </li>`
//   console.log(person[i]);
//   types.push(typeof person[i])
// }
// text += "</ul>"
// console.log(types);
// document.getElementById("demo").innerHTML = text
// document.getElementById("demo1").innerHTML = types

// calculate the currunt age of the followings and store in a separate array
// const years = [1991, 2007, 1969, 2020];
// // let text = "";
// const newArray = [];
// let currentAge = new Date().getFullYear();
// for (let i = 0; i <= years.length; i++) {
//   newArray.push(`${currentAge - years[i]}`)
// }
// document.getElementById("demo").innerHTML = newArray;
// looping backward
// const person = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "Teacher",
//   ["Michael", "peter", "Steven"],
//   true,
// ];
// for(let i = person.length -1;i>=0;i--){
//   console.log(person[i]);
// }

// creating a loop inside a loop
for(let exercise = 1; exercise < 4; exercise++){
  console.log(`------starting exercise ${exercise}`);
  for(let rep = 1; rep<6;rep++){
    console.log(`repping exercise ${rep}`);
  }
}
