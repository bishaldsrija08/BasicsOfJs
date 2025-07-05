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

// console.log(even)

const books = [
    {
        title: "Mahabir pun",
        author: "Mahabir pun",
        year: 2023
    },
    {
        title: "Think like a monnk",
        author: "Jay Shetty",
        year: 2020
    },
    {
        title: "Book3",
        author: "Author3",
        year: 2021
    },
    {
        title: "Book4",
        author: "Author4",
        year: 2000
    },
    {
        title: "book5",
        author: "Mahabir pun",
        year: 1990
    },
    {
        title: "Book6",
        author: "Jay Shetty",
        year: 1999
    },
    {
        title: "Book7",
        author: "Author3",
        year: 2001
    },
    {
        title: "Book8",
        author: "Author4",
        year: 2002
    }
]

const latestBook = books.filter(function (book) {
    return book.author === "Mahabir pun"
})

// console.log(latestBook)


const files = ["app.js", "index.html", "script.js", "style.css", "apple.c"]

const jsFile = files.filter(function (file) {
    return file.endsWith(".js")
})

// console.log(jsFile)


const data = [10, null, 0, "Bishal", undefined, null, 50]

const realData = data.filter(function (item) {
    return item !== null && item !== undefined
})

// console.log(realData)

// Reduce
const someNums = [1, 2, 3, 4, 5, 6]
const resultAdd = someNums.reduce(function (a, ci) {
    return a + ci
}, 0)

// console.log(resultAdd)

const cartItems = [
    {
        name: "Product A",
        quantity: 2,
        price: 2
    },
    {
        name: "Product B",
        quantity: 5,
        price: 5
    },
    {
        name: "Product C",
        quantity: 4,
        price: 200
    },
]

const grandTotal = cartItems.reduce(function (total, curProduct) {
    total.toalQty += curProduct.quantity
    total.totalPrice += curProduct.price * curProduct.quantity
    return total

}, { toalQty: 0, totalPrice: 0 })

// console.log(grandTotal)


const people = [
    {
        name: "Manish", age: 22
    },
    {
        name: "Bob", age: 20
    },
    {
        name: "Pranjal", age: 25
    },
    {
        name: "Pranjal", age: 22
    }
]

const groupedAge = people.reduce(function (acc, perosn) {
    const age = perosn.age
    if (!acc.age) {
        acc.age = []
    }
    acc.age.push(perosn)
    return acc
}, {})

console.log(groupedAge)