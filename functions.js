"use strict"

const bookings = []
const creatBookings = function(flightNum, numPassenger=1, price=99*numPassenger){
    const booking = {
        flightNum,
        numPassenger,
        price
    }
    bookings.push(booking)
    console.log(bookings);
    
}

creatBookings("FG3445")
