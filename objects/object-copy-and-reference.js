// === OBJECT REFERENCES AND COPYING ===
let user = {
    name: "John"
}

// When an object variable is copied, the reference is copied, but the object itself is not duplicated.
let admin = user; // copy the reference

admin.name = "Russel";

console.log(admin.name); // Result: Russel
console.log(user.name); // Result: Russel
console.log(user === admin); // Result: true

let a = {};
let b = {};
console.log(a === b); // Result: false

// === CLONING AND MERGING ===
let clone = {};
for (const cloneKey in user) {
    clone[cloneKey] = user[cloneKey];
}

clone.name = "Rustambek";
console.log(clone.name);
console.log(user.name);
console.log(clone === user); //false

// ===  OBJECT.ASSIGN ===
let permissions1 = {canView: true};
let permissions2 = {canEdit: true};

Object.assign(user, permissions1, permissions2);
console.log(user);

// structured clone for nested clone
