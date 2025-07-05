const name1 = "Bishal";
const name2 = "Utsab";
const name3 = "Ankit";

const names = [name1, name2, name3];
console.log(names[2]); // Output: [ 'Bishal', 'Utsab', 'Ankit' ]


// objects insidde array

const sth = [
    {
        instituteName: "Digital Bishal",
        coursePrice: 1000,
        locatoion: "Chitwan",
        courseDuration: "3 months",
        courseName: "Full Stack Development",
        courseType: "Online",
        courseDescription: "Learn full stack development with hands-on projects and real-world applications"
    }
]

console.log(sth[0].instituteName) // Output: Digital Bishal

// Adding a new object to the array
sth.push({name: "Bishal Rijal", age: 25, location: "Chitwan"});

console.log(sth[1].age)