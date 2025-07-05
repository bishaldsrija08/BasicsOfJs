
// const array = [1, 2, 3, 4, 5];
var a = 1;
// console.log(a)
for (let i = 1; i <= 5; i++) {
    a = a + 2
    // console.log(a)
}

// for loop to iterate over an array
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element, " for loop");
}

//while loop to iterate over an array
let i = 0;
while (i < names.length) {
    console.log(names[i], " while");
    i++;
}

// Do-while loop to iterate over an array
let j = 0;
do {
    console.log(names[j], " do")
    j++
} while (j < names.length)


// For-of loop to iterate over an array
for (nam of names) {
    console.log(nam, " of")
}

const arr = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 },
    { name: "Eve", age: 45 }
]

for (ar of arr) {
    console.log(ar.name)
    console.log(ar.age)
}