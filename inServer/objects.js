const kHoYo = {
    instituteName: "Digital Bishal",
    coursePrice: 1000,
    locatoion: "Chitwan",
    courseDuration: "3 months",
    courseName: "Full Stack Development",
    courseType: "Online",
    courseDescription: "Learn full stack development with hands-on projects and real-world applications"
}

console.log(kHoYo); // Output: Digital Bishal

// Accessing a property that does not exist
console.log(kHoYo.nonExistentProperty); // Output: undefined

// Adding a new property
kHoYo.courseLevel = "Beginner to Advanced";

console.log(kHoYo); // Output: { instituteName: 'Digital Bishal', coursePrice: 1000, locatoion: 'Chitwan', courseDuration: '3 months', courseName: 'Full Stack Development', courseType: 'Online', courseDescription: 'Learn full stack development with hands-on projects and real-world applications', courseLevel: 'Beginner to Advanced' }

// Deleting a property
delete kHoYo.courseType;

console.log(kHoYo);


const perosn = {
    name: "Bishal Rijal",
    age: 25,
    address: "Chitwan, Nepal"
}

for(let key in perosn){
    console.log(key, perosn[key])
}