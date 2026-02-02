// Objects

// singleton:  using constructor
// Object.create()

// object literals
// const jsUser = {
//   name: "Ritesh",
//   age:21,
//   location: "Ghaziabad",
//   isLoggedIn: false,
//   lastLogin:["Monday"],
//   "full name": "Ritesh Patel"  //we can't access it using dot so we have to access it using []
// }

// console.log(jsUser.age)  // 21
// // console.log(jsUser[age])  // wrong
// console.log(jsUser["age"])   // 21
// console.log(jsUser["full name"]);   // Ritesh Patel

// Interview question: define a symbol and add it to object key
// const mySymbol = Symbol("key1")

// const jsUser = {
//   name: "Ritesh",
//   age: 21,
//   location: "Ghaziabad",
//   isLoggedIn: false,
//   lastLogin: ["Monday"],
//   "full name": "Ritesh Patel", //we can't access it using dot so we have to access it using []
//   [mySymbol]: "key1"  // symbol are used as []
// };

// console.log(jsUser["mySymbol"])   //wrong
// console.log(jsUser[mySymbol])   // key1

// // To change value

// jsUser.age = 22
// console.log(jsUser.age) // 22
// // To freeze means koi usko value ko change na kr sake

// Object.freeze(jsUser)
// jsUser.age = 23
// console.log(jsUser)
// {
//   name: 'Ritesh',
//   age: 22,
//   location: 'Ghaziabad',
//   isLoggedIn: false,
//   lastLogin: [ 'Monday' ],
//   'full name': 'Ritesh Patel',
//   [Symbol(key1)]: 'key1'
// }

// jsUser.greetings = function(){
//   console.log("Hello Ritesh")
// }

// console.log(jsUser.greetings)   // [Function (anonymous)] It means abhi function return back means abhi function execute nhi hua hai uska reference aaya hai
// console.log(jsUser.greetings())   // Hello Ritesh

// jsUser.greetings2 = function(){
//   console.log(`Hello User, ${this.name}`); // Hello User, Ritesh since hamare pass bahut object ho shakte hai so jsUser ham use kr rhe hai so isko refer krne ke liye this use kr rhe hai
// }

// console.log(jsUser.greetings2())

// declaring object using constructor
// const tinderUser = new Object()   // It is a singleton object
// tinderUser.id = "abc"
// tinderUser.name = "sam"
// tinderUser.isLoggedIn = "false"

// console.log(tinderUser)   // { id: 'abc', name: 'sam', isLoggedIn: 'false' }
// console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ]  isme sari keys aa gyi hai and isme ham loop laga kr koi kaam kr shakte hai.
// console.log(Object.entries(tinderUser))  // [ [ 'id', 'abc' ], [ 'name', 'sam' ], [ 'isLoggedIn', 'false' ] ]
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));   // true
// console.log(tinderUser.hasOwnProperty('isLoggedOut'))   // false

// // const regularUser = {
// //   email: "user@gmail.com",
// //   fullname: {
// //     userfullname:{
// //       firstname: "Ritesh",
// //       lastname: "Patel"
// //     }
// //   }
// // }

// // console.log(regularUser.fullname)  // { userfullname: { firstname: 'Ritesh', lastname: 'Patel' } }
// // console.log(regularUser.fullname.userfullname)  // { firstname: 'Ritesh', lastname: 'Patel' }
// // console.log(regularUser.fullname.userfullname.firstname)  // Ritesh

// // // optional chaining
// // console.log(regularUser.fullname?.userfullname)  // ? means if fullname exists then only proceed further

// const obj1 = {
//   1:"a",
//   2: "b"
// }

// const obj2 = {
//   3: "c",
//   4: "d"
// }

// const obj3 = {obj1, obj2}
// console.log(obj3)  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj4 = Object.assign(obj1,obj2)
// console.log(obj4)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj5 = Object.assign({}, obj1, obj2)  // it is a good practice. {} is an optional parameter, which means jitni bhi value hai sab combine ho jayegi and result yehi aayega. {} -> target and obj1, obj2 -> source
// console.log(obj5)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// // using spread operator
// const obj6 = {...obj1, ...obj2}
// console.log(obj6)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const users = [
//   {
//     id: 1,
//     email: "ritesh@gmil.com",
//   },
//   {
//     id: 2,
//     email: "ram@gmil.com",
//   },
// ];

// console.log(users[1].email);   // ram@gmil.com

// Destructuring
// const course = {
//   courseName: "JS Revision",
//   price: "900",
//   courseInstructor:"Chai aur Code"
// }

// course.courseInstructor
// course.courseName
// course.courseName

// const {courseInstructor} = course   // Instead of using course.courseInstructor many time, simple destructure it and use only courseInstructor to access it.
// console.log(courseInstructor)    // Chai aur Code

// // we can give  custom name to courseInstructor
// const { courseInstructor : inst} = course;
// console.log(inst)  // Chai aur Code

// // In react jaha bhi curly bracket dikhe to samaj jana wo destructure hai.
// const navbar=({company})=>{
// }
// navbar(company = "Ritesh")

// Function
// function add(num1, num2) {
//   // num1, num2 are called function parameters as they are in fctn defincation.
//   console.log(num1 + num2);
// }

// add(2, 3); // 5   2,3 are argument aas they are in fctn calling

// // Note
// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// const result = add(2, 3);
// console.log("result:", result); // result: undefined

// function add(num1, num2) {
//   let result = num1 + num2;
//   return result;
//   // or return num1 + num2;
//   console.log("Ritesh");
// }

// const resultnew = add(2, 3);
// console.log("result:", resultnew);   // result: 5

//  Note that result ke baad kuch bho print nhi hoga. Ritesh will not be prinbted, kyuki wo retrun ke baad likh agya hai agar ussse pahke likha jata  then print hota.

// function loginUSerMessage(username){
//   return `${username}, just logged in`
// }
// const resullt = loginUSerMessage("Ritesh")
// console.log(resullt)  // Ritesh, just logged in

// function loginUSerMessage(username) {
//   return `${username}, just logged in`; // , just logged in
// }
// const resullt1 = loginUSerMessage("");
// console.log(resullt1);  //, just logged in

// // If no arguments is passed then what will print
// function loginUSerMessage(username) {
//   return `${username}, just logged in`; // undefined, just logged in
// }
// const resullt2 = loginUSerMessage();
// console.log(resullt2);

// function loginUSerMessage(username) {
//   if(username === undefined){  // or if(!username)
//     console.log("Pls enter a username");
//     return
//   }
//   return `${username}, just logged in`; // undefined, just logged in
// }
// const resullt3 = loginUSerMessage();
// console.log(resullt3);    // Pls enter a username

// // To avoid this situation, simply use a default value

// function loginUSerMessage(username = "user") {
//   return `${username}, just logged in`; // undefined, just logged in
// }
// const resullt4 = loginUSerMessage();
// console.log(resullt4);   // user, just logged in
// const resullt5 = loginUSerMessage("Ritesh");
// console.log(resullt5);   // Ritesh, just logged in

// function calculateCartPrice(...num1){
//   return num1
// }

// console.log(calculateCartPrice(1,2,3)) // [ 1, 2, 3 ]

// To solve when multiple arguments are passed, we use rest operator, it will add those arguments to numbers.

// Note
// function calculateCartPrice(num1, num2, ...num){
//   return num
// }

// console.log(calculateCartPrice(1,2,3,4,5)) // [ 3, 4, 5 ]  1,2 num1 nad num2 me chala gya

// const user = {
//   username: "Ritesh",
//   price:99
// }

// function handleObject(anyObject){
//   console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
// }

// handleObject(user)  // Username is Ritesh and price is 99

// Directly pass object to argument
// function handleObject(anyObject) {
//   console.log(
//     `Username is ${anyObject.username} and price is ${anyObject.price}`,
//   );
// }

// handleObject( {
//   username: "Ritesh",
//   price:99
// });   // Username is Ritesh and price is 99

// passing array in function

// const mynewArr = [2,3,4,5]

// function returnvalue(getArray){
//   return getArray[2]
// }

// console.log(returnvalue(mynewArr))   // 4

// directly pass array

// function returnvalue(getArray) {
//   return getArray[2];
// }
// console.log(returnvalue([2, 3, 4, 5])); // 4

// // scopes
// if (true) {
//   // let a = 10;
//   const b = 20;
//   var c = 30;
// }

// // console.log(a)  // a is not defined
// // console.log(b)   // b is not defined
// // console.log(c)   // 4

// // Problem with var
// var c = 300;
// if (true) {
//   var c = 30;
// }

// console.log(c); // 30 we have declared 300 but 30 aa rha hai thewrefore var is avoided to use.

// // Nested scope

// function one() {
//   const usernme = "Ritesh";
//   function two() {
//     const website = "Youtube";
//     console.log(usernme);
//   }
//   console.log(website); // website is not defined
//   two();
// }

// one();

// function one() {
//   const usernme = "Ritesh";
//   function two() {
//     const website = "Youtube";
//     console.log(usernme);
//   }
//   two(); // Riteshff
// }

// one();

const addTwo = function (num) {
  // variable can also hold fctn
  return num + 2;
};

addTwo(3);

// Note:
addTwoo(3);   // show error as addTwoo is defined before initialization
const addTwoo = function (num) {
  // variable can also hold fctn
  return num + 2;
};


addTwoo(3)   // will not show  error 
function addTwoo(){
  return num+1
