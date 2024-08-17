"use strict";

// const bookings = []
// const creatBookings = function(flightNum, numPassenger=1, price=99*numPassenger){
//     const booking = {
//         flightNum,
//         numPassenger,
//         price
//     }
//     bookings.push(booking)
//     console.log(bookings);

// }

// creatBookings("FG3445")

// const flight = "LH234"
// const jonas = {
//     name:"Clare Tech",
//     passport:1234567890
// }

// const checkin = function (flightNum, passenger){
//     flightNum = "LH999"
//     passenger.name = "Mr." + passenger.name
//     if(passenger.passenger === 1234567890){
//         alert("checked in")
//     }else{
//         alert("Wrong passport")
//     }
// }

// checkin(flight, jonas)
// console.log(flight);

// const greet = ()=>console.log("Hello Clare!");
// const btn = document.createElement("button")
// btn.textContent="Click ME"
// document.body.appendChild(btn)
// btn.addEventListener("click", greet)

// FUNCTIONS are first-class citizens
// we can store function in variable or properties
// we can pass function as an argument to other function
// return functions from functions
// call methods on function

// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase()
//     // return str.toLowerCase().replaceAll(" ", "")
// }
// const upperFirstWord = function(str){
//     const [first, ...others] = str.split(" ")
//     return [first.toUpperCase(), ...others].join(" ")
// }

// higher order function
// const transformer = function(str, callback){
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${callback(str)}`);

//     console.log(`Transformed by: ${callback.name}`);

// }

// transformer("Javascript is the best!", upperFirstWord)
// transformer("Javascript is the best", oneWord)

// functions returning functions
// const greet = function(greeting){
//     return function(name){
//         console.log(`Hello ${name}, good ${greeting}`);

//     }
// }

// const greet =(greeting)=>{
//     return (name)=>{
//         console.log(`Hello ${name}, good ${greeting}`);

//     }
// }
// const greetHerHey = greet("morning")
// greetHerHey("Clare")
// greet("evening")("Steven")

// const arg = []
// const createHelloWorld = function() {
//     return (...args) => console.log(`Hello World ${args}`);

// };
// createHelloWorld()(arg)

const lufthansa = {
  airline: "Lufthansa",
  iatacode: "LH",
  bookings: [],
  book: function (flightNum, name) {
    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });

    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode} ${flightNum}`
    );
  },
};

console.log(lufthansa.book("234", "Clare"));
console.log(lufthansa.book("678", "John Smith"));
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iatacode: "EW",
  bookings: [],
};
const swissArline = {
  airline: "Swiss Arlines",
  iatacode: "LX",
  bookings: [],
};

const bookNew = lufthansa.book;
// does not work
// bookNew(23,"Sarah Williams")
// the call method
bookNew.call(eurowings, 23, "sarah williams");
console.log(eurowings);

bookNew.call(lufthansa, 326, "Mary Cooper");
console.log(lufthansa);

bookNew.call(swissArline, 940, "Debby Ray");
console.log(swissArline);

// apply method
const flightData = [583, "George Cooper"]
// bookNew.apply(swissArline, flightData)
bookNew.call(swissArline, ...flightData)
console.log(swissArline);


// bind
const bookEW= bookNew.bind(eurowings)
const bookLH = bookNew.bind(lufthansa)
const bookLX = bookNew.bind(swissArline)
const bookEW23 = bookNew.bind(eurowings,23)

bookEW(778, "Williams Adam")
bookEW23("Clare Tech")

const result = lufthansa.bookings

let text = "<ul>"
for(const res of result){
  for(const [key, value] of Object.entries(res)){
    text += `<li>${key}: ${value}</li>`
  }
}
text += "</ul>"
document.getElementById("demo").innerHTML=text

// use case for bind
// with event listeners
lufthansa.planes = 300
lufthansa.buyPlanes = function(){
  this.planes++
}
console.log(lufthansa);




