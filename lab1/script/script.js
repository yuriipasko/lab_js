
function isInteger(num) {
    return Number.isInteger(num);
}

function findPrimes(a, b) {

    a = Math.ceil(a);
    b = Math.floor(b);

    for (let i = a; i <= b; i++) {
        if (i < 2) continue; 

        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(i);
        }
    }
}
console.log( isInteger(1) ); // true
console.log ( isInteger(1.5) ); // false
console.log ( isInteger(-0.5) ); // false
console.log( isInteger("П"));
console.log(isInteger("2+12"));
console.log(isInteger(2+2))
























function isInteger(num){
  let sum = Number.isInteger(num); 
}





function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
}





let a = 4;
let b = 10;

let sum = a + b;

function isInteger(num){
  return Number.isInteger(num);
}

console.log(sum);
console.log(isInteger(sum)); // true









function findPrimaes(a,b){
  
}