const name1 = "Bishal";
const name2 = "Utsab";
const name3 = "Ankit";

const names = [name1, name2, name3];
names[3] = "Sanjay"; // Adding a new name to the array
names.push("hello"); // Adding another name to the end of the array
names.pop(); // Removing the last element from the array
names.unshift("New Name"); // Adding a new name at the beginning of the array
names.shift(); // Removing the first element from the array
console.log(names.length)
