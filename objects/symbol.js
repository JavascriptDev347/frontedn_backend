// === SYMBOL ===
// A “symbol” represents a unique identifier.
let id = Symbol("id");
let id2 = Symbol("id");
console.log(id === id2);
console.log(id.toString());

let user = {
    name:"John",
}
let id3 = Symbol("id");
user[id3] = "Hello world"
console.log(user[id3]);
