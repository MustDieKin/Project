"use strict";


// if (4 == 9){
//     console.log('OK!');
// } else {
//     console.log('error');
// }


// const num = 50;
// if (num < 49){
//     console.log("Error");
// } else if (num > 100){
//     console.log("Many");
// } else {
//     console.log("Ok");
// }


// (num === 50) ? console.log("Ok") : console.log("Error");

const num = 51;
switch (num){
    case 49: 
        console.log('Not');
        break;
    case 100:
        console.log('Not');
        break;
    case 50:
        console.log('Yes');
        break; 
    default:
        console.log('NONONO');        
}


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
