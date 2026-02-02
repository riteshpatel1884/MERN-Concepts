// ️1️⃣ Array 
-> JS array can be resizable means size can be increased as required.
-> When we perform a copy operation on an array, it creates a shallow copy. This means any change we make in the copied array 
   will also affect the original array(if the array contains reference types like objects or nested arrays).

const arr = [1,2,3,"Ritesh", "Patel"]
console.log(arr)

// We can also create array using new keyword.
const arr1 = new Array(1, 2, 3);
console.log(arr1)   // [ 1, 2, 3 ]






// 2️⃣ Methods of array.
arr1.push(6)
console.log(arr1)   // [ 1, 2, 3, 6 ]

arr1.unshift(7)
console.log(arr1)  // [ 7, 1, 2, 3, 6 ]  7 sabse aage add ho gya hai, but this will create a problem like if we have 1000s of values 
                                         // then we need to shift each value 1 index right.

arr1.shift()
console.log(arr1)  // [ 1, 2, 3, 6 ]  it will remove 7 from 1st index.

const arr = [0,1,2,3,4,5]
console.log(arr.includes(4)); // true

// Join: join() is not a copy method. Its main use is to convert an array into a string.
const newArr = arr.join();
console.log(arr); // [ 0, 1, 2, 3, 4, 5 ]
console.log(newArr); // 0,1,2,3,4,5  
// join ne elements ko bind kr ke string me convert kr diya hai. By default, elements are separated by a comma (,)


// slice: It extracts elements without changing original array
console.log("A", arr);   //  A  [ 0, 1, 2, 3, 4, 5 ]

const mynew1 = arr.slice(1, 3);
console.log(mynew1)   // [ 1, 2 ]    3rd index is not included
console.log("B ", arr);   // B  [ 0, 1, 2, 3, 4, 5 ]   original array remain same

// Splice: It changes/modifies the original array.
const mynew2 = arr.splice(1, 3)
console.log("C ", arr);  // C  [ 0, 4, 5 ]   original array changed
console.log(mynew2)   // [ 1, 2, 3 ]    3rd index is included (wrong explanation also say that It changes/modifies the original array)

const arr = [1, 2, 3, 4, 5]
const removed = arr.splice(1, 2)
console.log(removed) // [2, 3]
console.log(arr)     // [1, 4, 5]

// 3️⃣ Interview asked question
// slice vs splice

const heros = ["thor", "Ironman", "Spiderman"];
const dc = ["Superman", "Flash", "Batman"];

heros.push(dc)
console.log(heros)   // [ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]

// since array koi bhi data store kr leta hai so isne dc ke array ko 1 data maan kr store kr liya hai so total element 4 hi element hai but 4th element ke andar aur bhi element hai.

const all = heros.concat(dc)
console.log(all)   // [ 'thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// Merging array using spread operator (It is mostly used)
// ... means abb wo array nhi raha abb wo individual element ho gya hai.
const allNewHeros = [...heros, ...dc]
console.log(allNewHeros)  // [ 'thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// Flat(): flat() removes nesting from arrays and returns a new array.
// Syntax: array.flat(depth)
// depth → how deep you want to flatten
const anotherArray = [1,2,3,[4,5,6], 7,[6,7,[4,5]]]
const another_Array = anotherArray.flat(Infinity)
console.log(another_Array)
// [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]

array.flat(1)  // one level
array.flat(2)  // two levels
array.flat(Infinity) // fully flat


console.log(Array.isArray("Ritesh"))  //False as it is not array
console.log(Array.from("Ritesh"))   // [ 'R', 'i', 't', 'e', 's', 'h' ] It will convert to array

// Interview asked question
console.log(Array.from({name: "Ritesh"}))   // [] It will return an empty kyuki isko nhi pata hai ki keys(name) ka array banana hai ya value(Ritesh) k0

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))   // [ 100, 200, 300 ]
