// Important topics to cover:



function sayHello(callback) { // This is a higher order function
    console.log("hello")
    callback()
}

//call back function is a function that is passed as an argument to another function.
function sayGoodBye() { // This is a callback function
    console.log("Good Bye")
}

// sayHello(sayGoodBye)


//Higher order function is a function that takes another function as an argument or returns a function as a result.\


const fruits = ["apple", "banana", "orange", "mango", "grape"];
//forEach is a higher order function that takes a callback function as an argument

fruits.forEach(function (fruit) {
    // console.log(fruit)
})

const numbers = [1, 2, 3, 4, 5];
const squuaredNumbers = []; // This is an empty array to store the squared numbers
numbers.forEach(function (number) {
    squuaredNumbers.push(number ** 2)
})
// console.log(squuaredNumbers)
// console.log(numbers)


//map is a higher order function that takes a callback function as an argument and returns a new array

const squareNumber = numbers.map(function (number) {
    return number ** 2
})
// console.log(squareNumber)

const users = [
    { name: "John", lName: "hamal", age: 25 },
    { name: "Jane", lName: "dhamal", age: 30 },
    { name: "Jack", lName: "kamal", age: 35 },
    { name: "Jill", lName: "ramal", age: 40 }
]

const fullName = users.map(function (user) {
    return {
        ...user, // This is the spread operator that copies all properties of the user object
        fullName: user.name + " " + user.lName
    }
})

// console.log(fullName)


const numbers2 = [1, 2, 3, 4, 5];
const namesss = ['A', 'B', 'C', 'D']

const arobj = numbers2.map(function (number) {
    return {
        number,
        name: "A"
    }

})

// console.log(arobj)

//filter

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const even = nums.filter(function (num) {
    return num % 2 === 0
})

console.log(even)