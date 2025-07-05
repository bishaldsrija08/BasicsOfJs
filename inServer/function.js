
// Regular function declaration
function add(a,b){  //a,b are parameters
    console.log (a+b);
}

add(1,2) // arguments are 1 and 2


//named function expression
const add2 = function (a,b){  //a,b are parameters
    console.log (a+b);
}

add(3,4) // arguments are 3 and 4


// Arrow function
const subtract = (a,b)=>{
    console.log(a+b)
    console.log(a-b)
}
// subtract(5,6) // arguments are 5 and 6

//anonymous function
(
    ()=>{
        console.log("I am an anonymous function")
    }
)()

//function to calculate square of a number
const square = (a) => 
    a * a; // NO need to use return keyword in arrow functions with single expression as well as no need for curly braces

console.log(square(9)) // returns 25