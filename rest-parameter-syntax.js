/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call, outpout : 6 
const sumAll = (a,b,c) => a+b+c;
let sum = sumAll(1,2,3);
console.log ("Sum1: ",sum);

// Extra arguments are ignored, output : 6

let sum2 = sumAll(1,2,3,4,5,6);
console.log ("Sum2: ",sum2);

// Function using ...rest, output : 21, the extra number need a loop

const sumRest = (a,b,c,...rest) => {
    let sum = a+b+c
    for (let i of rest) { // of, to take the number
        sum += i;
    }
    return sum;
}

let sum3 = sumRest (1,2,3,4,5,6)
console.log ("Sum3: ", sum3 );