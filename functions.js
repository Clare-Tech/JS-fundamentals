"use strict"

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

const flight = "LH234"
const jonas = {
    name:"Clare Tech",
    passport:1234567890
}

const checkin = function (flightNum, passenger){
    flightNum = "LH999"
    passenger.name = "Mr." + passenger.name
    if(passenger.passenger === 1234567890){
        alert("checked in")
    }else{
        alert("Wrong passport")
    }
}

checkin(flight, jonas)
console.log(flight);

const greet = ()=>console.log("Hello Clare!");
const btn = document.createElement("button")
btn.textContent="Click ME"
document.body.appendChild(btn)
btn.addEventListener("click", greet)

// FUNCTIONS are first-class citizens
// we can store function in variable or properties
// we can pass function as an argument to other function
// return functions from functions
// call methods on function