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





