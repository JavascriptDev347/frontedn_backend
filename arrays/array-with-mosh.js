// === ARRAYS ===
const numbers = [1, 2];

// ADD NEW ELEMENTS: END
numbers.push(5, 6);
console.log("PUSH ", numbers);

// BEGINNING
numbers.unshift(10);
console.log("UNSHIFT ", numbers);

// MIDDLE
numbers.splice(2, 0, 34, 56);
console.log("SPLICE ", numbers);

// FINDING ELEMENT PRIMITIVE TYPE
console.log("INDEX ", numbers.indexOf(2)); // if exist return index, if no return -1;
console.log("LASTINDEX ", numbers.lastIndexOf(0));
console.log("INCLUDE ", numbers.includes(90))

// FINDING  ELEMENT REFERENCE TYPE
const courses = [
    {
        id: 1,
        name: "Java",
        author: "John"
    },
    {
        id: 2,
        name: "Javascript",
        author: "Mike"
    },
    {
        id: 3,
        name: "C# learning",
        author: "Tyson"
    }, {
        id: 4,
        name: "Golang",
        author: "Simon"
    }
];

// console.log(courses.includes({id: 1, name: "Java"})) // false
console.log(courses.find((course) => course.name === "Java")); // find element and return it
console.log(courses.findIndex((course) => course.name === "Java")); // find element and return this element index


// DELETING ELEMENT FROM ARRAY
const elements = [1, 2, 4, 5, 6, 7, 8, 9, 10];

// END
const last = elements.pop();
console.log("PUSH ", last);

// BEGINNING
const first = elements.shift();

console.log(elements)
// MIDDLE
elements.splice(3, 2)
console.log(elements);

// EMPTYING ARRAY
let arrays = ['a', 'b', 'c', 'd', 'e', 'f'];
// arrays = []; // The downside of using this in this case is that if another array
// copies from this array, the value of the first array will be [ ], but the value
// of the second one will not be [ ].

// arrays.length = 0; // GOOD method
// arrays.splice(0,numbers.length); // good
console.log("ARRAYS "  , arrays);
