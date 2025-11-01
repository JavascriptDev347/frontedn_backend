// === OBJECT METHOD ===
let user = {
    name: "Russel",
    age: 23,
    sayBye() {
        console.log("Good Bye " + this.name);
    }
};

user.sayHello = function () {
    console.log("Say Hello " + this.name); // this called the user object
}

user.sayHello();
user.sayBye();

// Arrow functions have no “this”
let admin = {
    name: "Administrator",
    age: 23,
    sayHi() {
        let arrow = () => {
            console.log(this.name)
        }
        arrow();
    }
}

admin.sayHi();