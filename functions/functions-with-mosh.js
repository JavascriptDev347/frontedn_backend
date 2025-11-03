// === HOISTING ===
walk();
// fc(); // ERROR

// Function declaration
function walk() {
    console.log("WALK");
}

// Function expression
let fc = function () {
    console.log("walk 2");
}


// arguments
function sum() {
    let total = 0;
    for (const argument of arguments)
        total += argument;

    console.log(total);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// DEFAULT VALUE
function interest(principal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;
    return principal * rate / 100 * years;
}

console.log(interest(10000));


// GETTER and SETTER
const person = {
    firstName: "January",
    lastName: "Doe",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(value) {
        if (typeof value !== "string")
            throw new Error("The fullName argument must be a string");
        const parts = value.split(" ");
        if (parts.length !== 2)
            throw new Error("Enter the first and last name must be at least 2 characters");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
try {
    person.fullName = '';
} catch (err) {
    console.log("EEE " + err);
}

console.log(person);
