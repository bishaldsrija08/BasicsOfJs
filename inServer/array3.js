
//slice, splice, and split
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Slice returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
// The original array will not be modified.
// The start and end arguments represent the index of the array.
// The original array will not be modified.
// The slice() method does not change the original array, but returns a new array.
// The slice() method can take two arguments: the start index and the end index (not included).
// If the end index is not provided, it will slice to the end of the array.

const newNumberSlicedArray = numbers.slice(2)
console.log(newNumberSlicedArray);


//splice changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements.
const newNumberSplicedArray = numbers.splice(2, 3, 10, 11);
console.log(newNumberSplicedArray); // [3, 4, 5]
console.log(numbers)

//split

// The split() method is used to split a string into an array of substrings, and returns the new array.
// The split() method takes a separator as an argument, which can be a string or a regular expression.
// If the separator is not found in the string, the split() method returns an array containing the original string.
// If the separator is an empty string, the split() method splits the string into an array

const str = "My namee is Bishal Rijal";
const strArray = str.split(" ");
console.log(strArray); // ["Hello", "World!"]
console.log(str)