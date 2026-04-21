// same like c

function myFunction()
{
    console.log("Fun Demo");
}

// a,b are local variables they have block scope (means scope of block)
function add(a,b)
{
    sum = a+b;
    return sum;
}

myFunction();
let addition = add(21,11);
console.log(addition);

function sub(a,b)
{
    return a-b;
}
function mult(a,b)
{
    return a*b;
}

console.log("Arrow function");
/*
arrow function 
variable to store = (parametrs) => {
    work
}*/

arrowfun = (a,b)=>{
    console.log(a,b);
    return a*b;
}

let mul = arrowfun(5,6);
console.log(mul);

// arrow fun without parameters
const display = () =>{
    console.log("Hello!");
}
console.log(display);
display(); 

//watch shraddha khapra js laylist function video from 30:00 timimg
