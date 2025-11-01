// === Function Declaration ===
function showMessage() {
    // == Local variables ==
    let message = "Hello World!";
    console.log("declaration function !!!" + message); // result: declaration function !!! Hello World!
}

// console.log(message); // ERROR => ReferenceError: message is not defined
showMessage();

// == Outer variable ==
let name = "John";

function showName() {
    name = "Bob"; // name changed from John to Bob
    console.log(name); // Result: Bob
}

// showName();
// console.log(name) // Result: Bob

// console.log(name); //  Result: John
// showName(); // Result: Bob

// isPrime
function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        return isPrime(n);
    }
}

function isPrime(n) {
    for (let i = 2; i < n / 2; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(showPrimes(17));