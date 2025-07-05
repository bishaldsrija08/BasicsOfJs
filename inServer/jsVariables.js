//variables in javascript
//Variables can be declared using var, let, or const
//var is function scoped or globally scoped
//let is block scoped
//const is block scoped and cannot be reassigned

var a= 'hello'
a='hi'
console.log(a)
let b = "world"
b= 'everyone'
console.log(b)
const c = 45;
// c= 50; // This will throw an error because 'c' is a constant
console.log(c)

// Function scope example with var
var x = 'Hello from function';
function greet() {
    console.log(x, "inside function");
}
console.log(x, "outside function");
greet();

//global scope example with var
if (true) {
    var y = 'I am accessible outside this block';
    var z = 'I am only accessible within this block';
    console.log(y);
}