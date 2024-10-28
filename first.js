// const profile = {
//    username: "@Mdtarik",
//    isFollow: false,
//    followers: 123,
//    following: 123,
// };

// console.log(profile);
// console.log(typeof profile["username"]);

/* this is a code that prints
hello world on our console window */
// console.log("hello world");

// Arithmetic Operators
// let a = 5;
// let b = 2;

// console.log("a =", a, " & b =", b);
// console.log("a+b =", a + b);
// console.log("a-b =", a - b);
// console.log("a*b =", a * b);
// console.log("a/b =", a / b);
// console.log("a%b =", a % b);
// console.log("a**b =", a ** b);

// unary Operator
// let a = 5;
// let b = 2;

// console.log("a =", a, " & b =", b);
//a = a + 1;
//a = a - 1;
//console.log("++a =", ++a);
// console.log("--a =", --a);
// console.log("a =",a);

//Assignment operator 
// let a = 5;
// let b = 2;

//a += 4; 
// a **= 4;
// console.log("a =",a);

//Comparison Operators
// let a = 5;
// let b = 3;

// console.log("5>3",a>b);

//Logical Operators
// let a = 5;
// let b = 3;

// let cond1 = a > b;
// let cond2 = a == 6;
// console.log("cond1 || cond2 =", cond1 || cond2);

//Conditional Statements

// let mode = "dark";
// let color;

// if(mode === "dark") {
//     color = "black";
// }
// if(mode === "light") {
//     color = "white"

// }

//console.log(color);

// let age = 18;
// if(age >= 18) {
//     console.log("you can vote");
// }
// if (age < 18) {
//     console.log("you CANNOT vote");
// }

// let mode = "light";
// let color;

// if(mode === "dark") {
//     color = "black";
// } else {
//     color = "white";
// }
// console.log(color);

// let age = 16;

// if (age >= 18) {
//     console.log("vote");
// } else {
//     console.log("not vote");
// }

//odd or even
// let num = 10;

// if (num % 2 === 0) {
//     console.log(num, "is even");
// } else {
//     console.log(num, "is odd");
// }

// let mode = "dark";
// let color;

// if(mode === "dark") {
//     color = "black";
// } else if (mode === "blue") {
//     color = "blue";
// } else if(mode === "pink") {
//     color = "pink";
// } else {
//     color = "white";
// }

// console.log(color);
// if (mode === "dark") console.log(mode);

// let age = 25;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

//alert("hello");

// let name = prompt("helllo");
// console.log(name);

// let num = prompt("enter a number:");
// if (num % 5 === 0) {
//     console.log(num, "is multiple of 5");
// } else {
//     console.log(num, "is NOT a multiple of 5");
// }

//Practice Qs2 - JS Program
// let score = 75;
// let grade;

// if(score >= 90 && score <= 100) {
//     grade = "A";
// } else if(score >= 70 && score <= 89) {
//     grade = "B";
// } else if(score >= 60 && score <= 69) {
//     grade = "C";
// } else if(score >= 50 && score <= 59) {
//     grade = "D";
// } else if(score >= 0 && score <= 49) {
//     grade = "F";
// }

// console.log("according to your scores, your grade was : ",grade);

// print 1 to 5
// for (let count = 1; count <=5; count++) {
// console.log("apna college") ;
// }

//calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <=5; i++) {
//     sum = sum + i;
// }
// console.log("sum = ", sum);
// console.log("loop has ended");

//loop
//print 1 to 5
// for (let i=1; i<=5; i++) {
//     console.log("i = ", i);
// }


//while loop
// let i =1;
// while (i <= 5) {
//     console.log("i=", i);
//     i++;
// }

//do while loop
// let i = 20;
// do {
//     console.log("md tarik");
//     i++;
// } while (i <= 10);

//for-of loop
// let str = "apnacollege";
// let size = 0;
// for(let i of str) {
//     console.log("i=", i);
//     size++;
// }
// console.log("string size = ", size);

//for-in loop
// let student = {
//     name: "Md Tarik",
//     age: 21,
//     cgpa: 8.0,
//     isPass: true,
// };
// for (let key in student) {
//     console.log("key=",key, "value=", student[key]);
// }

//practice Qs1
// for (let num = 0; num <= 100; num++) {
//     if(num%2 === 0) {
//     console.log("num =", num);
//   }  
// }

//Strings
// let str = "APnaCollege";
// let str2 = "shradha";
// console.log(str[9]);

//Template Literals
// let specialString = 'This is a template literal';
// console.log(specialString);

// let obj = {
//     item: "pen",
//     price: 10,
// };
// console.log("the cost of", obj.item, "is", obj.price, "rupees");

// let str = "apnaCollege";
// let newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);

//Str trim method
// let str = "   Apna College  JS   ";
// console.log(str.trim());

//str slice method
// let str = "hello";
// console.log(str.slice(1));

//str concat method
// let str1 = "apna";
// let str2 = "college";

// let res = str2.concat(str1);
// console.log(res);

// let str = "ILoveJS";
// str[0] = "S";
// console.log(str);

//practice Qs1
// let fullName = prompt("enter your fullname without spaces");

// let username = "@" + fullName + fullName.length;
// console.log(username);

// let marks = [97, 82, 75, 64, 36];
// console.log(marks);
// console.log(marks.length);

// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman"];
// console.log(heroes[0]);
// console.log(heroes[1]);

//let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman"];
//for loop
// for(let i=0; i<heroes.length; i++) {
//     console.log(heroes[i]);
// }

//for of
// for(let hero of heroes) {
//     console.log(hero);
// }


//practice Qs1
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(let val of marks) {
//     sum = sum + val;
// }
//     let avg = sum / marks.length;
//     console.log('avg marks of the class = ${avg}');

// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for(let val of items) {
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

// let items = [250, 645, 300, 900, 50];
// for(let i=0; i<items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);

// let fooditems = ["potato", "apple", "litchi", "tomato"];
// let marks = [97, 86, 54, 36];
// console.log(fooditems);
// console.log(fooditems.toString());
// console.log(fooditems);

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];
//  let heroes = marvelHeroes.concat(dcHeroes);
//  console.log(heroes);

//slice method
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1,3));

//splice method
//let arr = [1,2,3,4,5,6,7];
//arr.splice(2,2,101,102); 

//Add Element
//arr.splice(2,0,101);

//Delete Element
//arr.splice(3,1);

//Replace Element
//arr.splice(3,1,101);

// let companies = ["Bloomberg", "Microsoft", "uber", "Google", "IBM", "Netflix"];
// companies.shift();
// companies.splice(2,1,"Ola");
// companies.push("Amazon");

// function myFunction() {
//     console.log("Welcome to apna college!");
//     console.log("we are learning JS :");
// }
// myFunction();

// function myFunction(msg) {
//     //parameter -> input
//     console.log(msg * n);
// }
// myFunction("I Love JS", 100);

//Function -> 2 numbers, sum
// function sum(x, y) {
//     s = x + y;
//     console.log("before return");
//     return s;
//     console.log("after return");
// }

// let val = sum(3, 4);
// console.log(val);

//sum function
// function sum(a, b) {
//     return a + b;
// }

// const arrowSum = (a, b) => {
//     console.log(a + b);
// };

// //multiplication function
// function mul(a, b) {
//     return a * b;
// }

// const arrowMul = (a, b) => {
//     console.log(a*b);
// }
// const printHello = () => console.log("hello");

// function countVowels(str) {
//    for (const char of str) {
//     console.log(char);
//    }
// }

//practice Qs1
// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if(char === "a" || char === "e" || char ==="i" || char ==="o" || char ==="u") {
//            count++; 
//         }
//     }
//     return count; 
// }

//practice Qs2
// const countVow = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if(char === "a" || char === "e" || char ==="i" || char ==="o" || char ==="u") {
//            count++; 
//         }
//     }
//     return count; 
// }

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val) {
//     console.log(val);
// });

// let arr = ["pune", "delhi", "mumbai"];
// arr.forEach((val, idx) => {
//     console.log(val.toUpperCase(), idx);
// });

// practice Qs1
// let nums = [2, 3, 4, 5, 6];
// nums.forEach((num) => {
//     console.log(num*num);
// })

// let nums = [67,52,39];
// let newArr = nums.map((val) => {
//     console.log(val);
// });
// console.log(newArr);
// let calcSquare = (num) => {
//     console.log(num * num);
// };

// let arr = [1,2,3,4,5,6,7];
// let evenArr = arr.filter((val) => {
//     return val % 2 ===0;
// });
// console.log(evenArr);

// let arr = [5,6,2,1,3];
// const output = arr.reduce((prev, curr) => {
//     return prev + curr;
// });
// console.log(output);

// practice Qs1
// let marks = [97, 64, 32, 49, 99, 96, 89];
// let toppers = marks.filter((val) => {
//     return val > 90;
// });
// console.log(toppers);

// practice Qs2
// let n = prompt("enter a number : ");
// let arr = [];
// for(let i = 1; i <= n; i++) {
//     arr[i-1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// }); console.log("sum =",sum);

// let factorial = arr.reduce((res,curr) => {
//     return res * curr;
// });

