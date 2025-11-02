// === COMBINING ARRAYS ===
const first = [1, 2, 3];
const second = [4, 6, 7];

const combined = first.concat(second);
console.log(combined);

const slc = combined.slice(2, 5);
console.log(slc);

// SPREAD OPERATION
const comb = [...first, ...second];
// console.log(comb);

// ITERATOR ARRAY

for (const number of comb) {
    console.log(number);
}

// JOIN IN ARRAY
const numbers = [1, 2, 3, 4, 5, 6, 7];
const joined = numbers.join(',') // return string
console.log(joined);

const str = "This is my first message";
const parts = str.split(" ");
console.log(parts);

console.log(parts.join("-"));

// SORTING ARRAY
const array = [43, 5, 6, 234, 345, 352, 42, 135, 32];
array.sort((a, b) => a - b);
console.log(array);

// EVERY AND SOME
const n = [1, 24, -9, -2, 3, 5, 6, 879, 98];
//  every() => check all of elements with the criteria
const allPositive = n.every(function (value) {
    return value >= 0;
})

//  some() => check at least one of element with the criteria
const atLeastOnePositive = n.some(function (value) {
    return value >= 0;
})

console.log("EVERY : ", allPositive);
console.log("SOME : ", atLeastOnePositive);

// FILTER ARRAY
const nums = [1, 2, 3, -9, -6, -6, 4, 5, 6, 7];
const filteredNumbers = nums.filter(value => value >= 0);
console.log("FILTERS : ", filteredNumbers);

// MAPPING ARRAY
const numsForMap = [1, 2, 3, -9, -6, -6, 4, 5, 6, 7];
const mapElement = numsForMap.map(v => '<li>' + v + '</li>');
console.log("MAP : ", mapElement);


// REDUCING ARRAY
const calculateArray = [12, 4, -90, -88, -9878, 35, 346547, 3, 5325, 346, 235423, 634, 434];
const calculated = numbers.reduce((acc, val) => acc + val, 0);
console.log(calculated);
