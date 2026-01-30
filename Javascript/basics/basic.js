// 1️⃣
const accountId = 123456;
let accountEmail = "riteshpatel1884@gmail.com";
var accountPassword = "123456";
accountCity = "Ghaziabad";    // In js, a variable can be declared like this but is not a good practice and is risky too.
let accountState = "Uttar Pradesh";

accountEmail = "riteshpatel1884@outlook.com";
accountPassword = "24255";
console.table([accountId, accountEmail, accountPassword, accountCity])

// forget that var exists due to issue in block and functional scope, now modern javascript uses const and let only.



//2️⃣ Datatypes in javascript
"use strict";   // It is used to write secure javascript code. Treats all JS code as newer version.

alert("Hello")  // we are using nodejs not browser so there is different method to use alert

let name = "Ritesh";   // Can be in single nad double quotes
let age = 21;
let isLoggedIn = false;  // true or false

// null => It is a standalone value
// undefined=> It means value is not assigned yet.
// symbol=> It is used for uniqueness
// object=> key value pairs

console.log(typeof "Ritesh");  // string
console.log(typeof null);   // type of null is object
console.log(typeof undefined);   // type of undefined is undefined




// 3️⃣
let score = 33
console.log(typeof score)  // number


let valueInNumber = Number(score)
console.log(typeof valueInNumber)   //  number


let scorenew = "33abc"
let scorenewInNumber = Number(scorenew)
console.log(typeof scorenewInNumber)    // number
console.log(scorenewInNumber)   // NAN 
// Number("33abc") tries to convert the entire string into a number. Because "33abc" is not a valid numeric string, 
// the conversion fails. When conversion fails, JavaScript returns NaN. NaN still has the type number


let nullValue = null
let nullValueInNumber = Number(nullValue)
console.log(nullValueInNumber )   // 0


let booleanValue = true
let booleanValueInNumber = Number(booleanValue)
console.log(booleanValueInNumber )   // 1 for true and 0 for false


let numberValue = 1
let numberValueInNumber = Boolean(numberValue)
console.log(numberValueInNumber )   // 1 for true and 0 for false




// 4️⃣
let value = 3;
let negValue = -value;
console.log(negValue);   //-3


let str1 = "hello";
let srt2 = "Ritesh"
let str3 = str1 + srt2;
console.log(str3)  // helloRitesh
console.log("1" + 2)   // 12
console.log(1 + "2")  // 12
console.log(("1" + "2"))  // 12
console.log("1" + 2  + 2)   //122
console.log(1 + 2 + "2")   // 1+2+"2" = 3+"2" = 32


let num1, num2, num3
num1 = num2 = num3 = 2+2 // not a good practice 
// Recommended way 1:
let num1 = 2 + 2
let num2 = 2 + 2
let num3 = 2 + 2

// Recommended way 2:
const value = 2 + 2
let num1 = value
let num2 = value
let num3 = value


let gameCounter = 100
gameCounter++;   // postfix: Use the current value first, then increment by 1
console.log(gameCounter);
++gameCounter;   // prefix

// Ex of Postfix:
let temp = gameCounter   // 100
gameCounter++  // 101
console.log(temp)   // 100 (returned value)
console.log(gameCounter); // 101

// Ex of Prefix:
let gameCounter = 100
gameCounter++;      // 101
console.log(gameCounter); // 101
++gameCounter;      // 102

 
console.log(2>1);   //true
console.log(2>=1);   //true
console.log(2<=1);   //false
console.log(2==1);   //false
console.log(2!=1);   //true


console.log("2">1)    //true -> js automatically converts string 2 to number 2
console.log("02">1)   //true

console.log(null>0)   //false  
console.log(null==0)   //false
console.log(null>=0)   //true 
 
console.log(undefined==0)   //false
console.log(undefined>=0)   //false
console.log(undefined>0)   //false


// 5️⃣ strict checking
console.log("2" === 2)   // false -> now it will check datatype also



// 6️⃣ Datatypes => changes copy me hote hai original me nhi
// 1. Primitive 
   // a. String
   // b. Number
   // c. Boolean
   // d. null
   // e. undefined
   // f. symbol
const id = Symbol("123")    // return type is symbol
const anotherId = Symbol("123")  
console.log(id)    // Symbol(123)
console.log(anotherId)   // Symbol(123)
console.log(id===anotherId)   //false. Value is same but the return value is not same
   // g. bigint
let bigNumber = 328098250283048235n  

// Non-Primitive/ Reference Datatype
    // a. arrays
const heros = ["Ritesh", "Patel", "Ghaziabad", "Uttar Pradesh"]
    // b. Objects
let obj = {
  name: "Ritesh",
  age: 21
}
    // c. functions
const fctn = function (){
  console.log("Hello Ritesh")
}

// Js is dynamically typed language. This means that the type of a variable is determined at runtime based on the value it holds, 
// rather than being explicitly declared and enforced at compile time. 




// 7️⃣
Stack memory are used in primitve datatype and heap memory are used in non primitive datatypes
Jab bhi stack memory use hoti hai ,to jo bhi vairable declare kiya hai, uski copy milta hai and jab bhi heap ke andar koi variable 
defiend hoti hai then uska reference milta hai, jo bhi changes hoga original value me change hoga.

let myXName = "Ritesh Patel"
let anotherName = myXName
console.log(anotherName)  // Ritesh Patel

anotherName = "Raj Singh";
console.log(myXName)     // Ritesh Patel
console.log(anotherName)   // Raj Singh
// anotherName ke andar myXName ki value nhi di jati, actuall me uski copy di jati hai so thats why origianl(myXName) ki value bhi bhi Ritesh Patel hai

// non primitive
let user = {
  email:"userxyz.com",
  upi:"user@ybl"
}

let user2 = user   // user ka user as a reference user 2 me jaa rhi hai so agar user2 me chanegs oga to wo user me bhi changes hoga
user2.email = "user2@xyz.com"
console.log(user)    //{ email: 'user2@xyz.com', upi: 'user@ybl' }
console.log(user2)   //{ email: 'user2@xyz.com', upi: 'user@ybl' }

// 8️⃣ Strings
const name = "Ritesh";
const repoCount = 50;

console.log(name + repoCount + "value"); // not recommend to write like this
console.log(`Hello, my name is ${name} with ${repoCount} repoCount`); // Hello, my name is Ritesh with 50 repoCount

const getName = new String("Ritesh"); // it is an object.
console.log(getName);   // String {'Ritesh'}
// 0 : "R"
// 1 : "i"
// 2 : "t"
// 3 : "e"
// 4 : "s"
// 5 : "h"

console.log(getName[0]); // R
console.log(getName.__proto__);
console.log(getName.toUpperCase()); // RITESH
console.log(getName.charAt(2)); // t
console.log(getName.indexOf("t")); // 2
// see all methods at mdm docs.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const newString = getName.substring(0, 4);
console.log(newString);   // Rite from  index 0 to 3

const newStringOne = "    Ritesh   " 
console.log(newStringOne);   // "    Ritesh   "
console.log(newStringOne.trim())   //Ritesh

const url = "https://ritesh.com/ritesh%20patel";
console.log(url.replace('%20', '-'))   // https://ritesh.com/ritesh-patel

url.includes('ritesh')  // is ritesh present in the array or not.  // true

// How to convert - into array like ritesh-patel-btech
// so ritesh in one array, patel in other and btech in other array
const nameArray = "ritesh-patel-6thSem";
console.log(nameArray.split('-'));  // [ 'ritesh', 'patel', '6thSem' ]


// 9️⃣
const score = 400;  // js ne explicitely isko Number define kr diya, so in many cases we need to define it as number implicitly
const balance = new Number(100)
console.log(score)   // 400
console.log(balance)  //[Number: 100]

console.log(balance.toString())  // 100
console.log(typeof (balance.toString()))   //string it is like "100"
console.log(balance.toFixed(2))  // 100.00   Two 0 will be added after point

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3))   //23.9

const other_Number = 123.8966
console.log(other_Number.toPrecision(3))  // 124

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //1,000,000
console.log(hundreds.toLocaleString("en-IN")) // 10,00,000

 
//1️⃣0️⃣ Math library
console.log(Math)    // It is an object with some properties. Object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.3))  // 4
console.log(Math.round(4.6));  // 5
console.log(Math.ceil(4.2))  // 5 means jara si bhi 4 se jada hui to 5 kr dena
console.log(Math.floor(4.3)) // 4
console.log(Math.floor(4.9)) // 4
console.log(Math.min(3,4,5,6))    // 3
console.log(Math.max(3, 4, 5, 6));  //6
console.log(Math.random())  // Value will always be in between 0 and 1

//To get numbers in a predefined range
const min = 10
const max = 20
console.log(Math.random() * (max - min + 1 + min));   // 6.530648944579829
// max - min + 1 => It may get max-min = 0 so +1 kr diya

console.log(Math.floor(Math.random() * (max - min + 1)));  // we are getting 2,3,6 type also but we want min 10 then add + min.
console.log(Math.floor(Math.random() * (max - min + 1))+min); // now it will always give number>=10



// 1️⃣1️⃣ Date are calculated in milliseconds. It is object in JS

let myDate = new Date()
console.log(myDate)  // 2026-01-29T17:14:36.021Z
console.log(myDate.toString())   //Thu Jan 29 2026 22:45:03 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())   // Thu Jan 29 2026
console.log(myDate.toLocaleString())  // 29/1/2026, 10:46:15 pm

let myCreatedDate = new Date(2023, 0, 23, 5, 3)
 // day: 23
 // hours: 5
 // minutes: 3
console.log(myCreatedDate);  // 2023-01-22T18:30:00.000Z
console.log(myCreatedDate.toLocaleString())  // 23/1/2023, 5:03:00 am
//Note Month start with 0 in js so Jan starts with 0

let mytimeStamp = Date.now()
console.log(mytimeStamp)
console.log(myCreatedDate.getTime());  // 1674430380000
console.log(Date.now()) // milliseconds
console.log(Date.now()/1000)   // 1769707313.721
console.log(Math.floor(Date.now() / 1000));  // 1769707339

let new_Date = new Date()
console.log(new_Date.getDate())   // 29
console.log(new_Date.getDay());   // 4
console.log(new_Date.getFullYear())   // 2026
console.log(new_Date.getUTCHours())   // 17

new_Date.toLocaleString('default',{
  weekday:"long",
  day:"numeric",
})


