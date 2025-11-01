// === OBJECTS ===
let user = {
    name: "Russel",
    age: 24
};

user["liked birds"] = true;
console.log(user);
console.log(user["liked birds"]);

// these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3
};
console.log(obj.for + obj.let + obj.return);