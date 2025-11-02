// === GARBAGE COLLECTION ===
let user = {
    name: "User 1"
};
let admin = user;
user = null;
// console.log(user); // null
// console.log(admin); // {name:"User 1"}

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});

// console.log(family);

// === GARBAGE COLLECTION WITH MOSH ===
