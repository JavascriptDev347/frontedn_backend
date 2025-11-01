// === CONSTRUCTOR, OPERATOR "NEW" ===
function User(name) {
    this.name = name;
    this.admin = false;
}

let user = new User("JAVASCRIPT");
console.log(user);