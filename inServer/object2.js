const kHoYo = {
    instituteName: "Digital Bishal",
    coursePrice: 1000,
    locatoion: "Chitwan",
    courseDuration: "3 months",
    courseName: "Full Stack Development",
    courseType: "Online",
    courseDescription: "Learn full stack development with hands-on projects and real-world applications"
}
Object.freeze(kHoYo); // Freezing the object to prevent modifications

console.log(Object.keys(kHoYo))
console.log(Object.values(kHoYo))
kHoYo.courseLevel = "Beginner to Advanced";
console.log(kHoYo)