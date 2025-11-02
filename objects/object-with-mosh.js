// === FACTORY FUNCTION ===
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("draw")
        }
    }
}

// const circle = createCircle(1000);
// console.log(circle)

// === CONSTRUCTOR FUNCTION ===
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw")
    }
}

// const circle = new Circle(100);
// console.log(circle);


let circle = {
    radius: 5,
    draw() {
        console.log("draw")
    },
    isVisible: null,
    isPossible: undefined
}

for (const circleKey in circle) {
    // console.log(circle[circleKey])
}

for (const circleElement of Object.keys(circle)) {
    // console.log(circleElement)
}

for (const entry of Object.entries(circle)) {
    // console.log(entry)
}

// === CLONING OBJECT ===
// const another = {};

// for (const key in circle)
//     another[key] = circle[key];
// console.log(another);

const another = Object.assign({
    color: "red"
}, circle);
// console.log(another);

const another1 = {...circle};

// console.log(another1);

