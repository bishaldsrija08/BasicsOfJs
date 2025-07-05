
//if statement example
const isRaining = false
if (isRaining) {
    console.log("It's raining, take an umbrella!");
}

// If-else example
const temperature = 30;
if (temperature >= 25) {
    console.log("It's warm outside, wear light clothing.");
}else {
    console.log("It's cool outside, wear a jacket.");
}

// Ternary operator example
// This is a shorthand way to write an if-else statement.
// It evaluates a condition and returns one of two values based on the result.

temperature>30? console.log("It's hot outside, stay hydrated.") : console.log("It's not too hot, enjoy your day.");

//short circuit evaluation example
// This example uses logical AND (&&) and OR (||) operators to evaluate conditions.
// It demonstrates how these operators can be used to return values based on conditions.
const isSunny = false;
const result = isSunny && "It's a sunny day!" || "It's cloudy today.";
console.log(result);


let isLoggedIn = false;
const userState = isLoggedIn && "User is logged in" || "User is logged out";
console.log(userState);

//Nullish coalescing operator example
// This operator returns the right-hand operand when the left-hand operand is null or undefined.
//// It is useful for providing default values.


const userName = 22;
const displayName = userName ?? "Guest";
console.log(displayName);