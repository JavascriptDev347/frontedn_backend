// === STRING CONVERSION ===
let value = true;
console.log(typeof value); // boolean

value = String(value);
console.log(typeof value); // string

// === NUMBER CONVERSION ===
let str = "1234";
console.log(typeof str); //string

str = Number(str);
console.log(typeof str); // number

// === BOOLEAN CONVERSION ===
let b = Boolean(1); // true
let b2 = Boolean(0); // false
console.log(typeof b);
console.log(typeof b2);

let b3 = Boolean("Salom dunyo"); //true
let b4 = Boolean(""); //false
console.log(typeof b3);
console.log(typeof b4);
