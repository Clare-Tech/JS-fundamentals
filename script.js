"use strict"

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

const calcAverage = (score1,score2, score3) => {
    return (score1+score2+score3)/3
}
let scoreDolphins = calcAverage(44, 23, 71)
let scoreKoalas = calcAverage(65,54,49)
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(AvgDolphins, avgKoalas){
    if(AvgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${AvgDolphins} vs. ${avgKoalas})`)
    }else if(avgKoalas >= 2 * AvgDolphins){
        console.log(`Koalas wins🏆 (${avgKoalas} vs. ${AvgDolphins})`)
    }else{
        console.log("No winner")
    }
}
checkWinner(scoreDolphins, scoreKoalas)
checkWinner(574, 111)

scoreDolphins = calcAverage(85, 54, 41)
scoreKoalas = calcAverage(23,34,27)

checkWinner(scoreDolphins, scoreKoalas)