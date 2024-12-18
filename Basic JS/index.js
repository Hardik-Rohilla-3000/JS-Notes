// Question

// Create a const object called product to store information about it

// const product = 
// {
//     name: "Parker",
//     rating: 4,
//     offer: 5,
//     price: 270
// }
// console.log(product["name"]);
// console.log(product.name);


// Question
// create a const object called profile to store information about it

// const profile={
//     name: "Sharddha Khapra",
//     isFollow: false,
//     posts: 196,
//     followers: 569000,
//     following: 4
// }



// Question
//get user to input a number and check whether it is multiple of 5

// let num = prompt("Enter a number");

// if(num%5==0)
// {
//     console.log("The number is a multiple of 5");
// }
// else{
//     console.log("The number is not a multiple of 5");
// }



// Question
// Calculate sum from 1 to n (n entered by user)

// let num = prompt("Enter the number");
// let sum = 0
// for(let count = 1; count<=num; count++){
//     sum = sum+count;
// }
// console.log(sum);


// for-of-loop  (used for strings and arrays)  for arrays generally use this loop

// let str = "JavaScript";
// let size = 0;
// for(let i of str){
//     console.log("i= ",i);
//     size++;
// }
// console.log("Size of string = ",size);

// for in loop (used for objects and arrays)
 
// let student = {
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa: 7.2,
//     isPass: true
// }
// for(let key in student){
//     console.log("Key =",key,"value=",student[key]);
// }



// Question
// print all even numbers from 1-100

// for(let i = 0; i<=100; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }



// Question
//make a game in which user will guess the random number

// let gameNum = 25;
// let userNum = prompt("Enter The Game Number");

// while(userNum!=gameNum){
//     userNum = prompt("You guessed it wrong. Gues Again..");
// }
// console.log("Congratulations You Guessed it right");



// Strings
// let str = "ApnaCollege";
// let str2 = "Shraddha";
// console.log(str.length); //11
// console.log(str[0])//A


//Template Literal
// let specialString = `This is a template literal ${1+2+3}`;
// console.log(specialString);

// let str = "Apna\tCollege";
// console.log(str.length) //12


//string methods
// let str = "ApnaCollege";
// let newStr = str.toUpperCase(); // this function does not change the original string so we have to save it in a new variable
// console.log(str);
// console.log(newStr);

//str.trim() //removes whitespaces start and end
//str.slice(start,end)  starting index is inclusive and ending index is exclusive and also optional

// let str1 = "Apna";
// let str2 = "College";
// let res = str1.concat(str2) //ApnaCollege

// let str = "Hello";
// console.log(str.replace("H","y")); //yello
// let str = "hello";
// console.log(str.replace("lo","p")); //help
// let str = "hellolololo";
// console.log(str.replaceAll("lo",p)); //helpppp;

// let str = "ILoveJS";
// console.log(str.charAt(0)); //I


// Question
// Prompt the user to enter their full name. generate a username for them based on the input .
// Start username with @ followed by their full name and ending with full namelength

// let fullName = prompt("Enter Your Full Name");
// let userName = "@"+fullName+fullName.length;
// console.log(userName);



// Arrays

// let marks = [87,72,75,35,46];
// console.log(marks);  
// console.log(marks.length);  //property
// marks[0] = 66;  //we can change the original array but not strings as stirngs are immutable

// let heroes = ["ironman","thor","hulk","shaktiman","spiderman","antman"];
// console.log(heroes);

// for(let idx = 0; idx<heroes.length; idx++){
//     console.log(heroes[idx]);
// }

// for(let i of heroes){
//     console.log(i);
// }

// let cities = ["delhi", "hyderabad","pune","jaipur","mumbai"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }


// Question

// for a given array with marks of students [85,97,44,37,76,60]
// find the average marks of the entire class

// let marks = [85,97,44,37,76,60];
// let total = 0;
// for(let score in marks){
//     total += marks[score];
// }
// console.log("Average marks of the entire class:- ",total/marks.length);


// Question

// for a given array of prices of 5 items [250,645,300,900,50]
// all items have an offer of 10% on them. change the array to store the final price after applying offer

// let prices = [250,645,300,900,50];
// for(let i = 0; i<prices.length; i++){
//     let offer = prices[i]*0.1;
//     prices[i] -=offer;
// }
// console.log(prices);


// Arrays Methods

// let foodItems = ["potato", "apple", "litchi", "tomato"];
// foodItems.push("chips");  // returns the new length of the array || we can also add multiple items || and adds to the original array 
// console.log(foodItems);

// let foodItems = ["potato", "apple", "litchi", "tomato"];
// let deletedItem = foodItems.pop();  // delete the end value from the original array and return the deleted value
// console.log(foodItems);
// console.log(deletedItem);

// let foodItems = ["potato", "apple", "litchi", "tomato"];
// console.log(foodItems);
// console.log(foodItems.toString());   // does not the change the original array 
// console.log(foodItems);

// let marveHeroes = ["thor","spiderman","ironman"];
// let dcHeroes = ["superman","batman"];
// let indianHeroes = ["shaktiman","krrish"]
// let heroes = marveHeroes.concat(dcHeroes,indianHeroes); // does not change the original arrays but returns a new array
// console.log(heroes);

// let marveHeroes = ["thor","spiderman","ironman"];
// marveHeroes.unshift("antman") // similar to push but for start
// console.log(marveHeroes);

// let marveHeroes = ["thor","spiderman","ironman"];
// let val = marveHeroes.shift(); // similar to pop for start
// console.log(marveHeroes);
// console.log(val);

// let marveHeroes = ["thor","spiderman","ironman","antman","dr.strange"];
// console.log(marveHeroes.slice(1,3))  // spiderman,ironman || does not change the original array

// let arr = [1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);  // returns and deleted item and change the original array
// console.log(arr); //[1,2,101,102,5,6,7]

// let arr = [1,2,3,4,5,6,7];
// arr.splice(2,0,101); // add an element at index 2
// console.log(arr);

// let arr = [1,2,3,4,5,6,7];
// arr.splice(3,1);  // delete an element at index 3
// console.log(arr)

// let arr = [1,2,3,4,5,6,7];
// arr.splice(3,1,101); // replace an element at index 3
// console.log(arr);

// let arr = [1,2,3,4,5,6,7];
// arr.splice(3);  // now it will function as slice
// console.log(arr);


// Question
// create an array to store companies ["Boomberg","microsoft","uber","google","ibm","netflix"]
// a remove the first company from the array
// b remove uber and add ola in its place 
// c add amazon at the end

// let companies = ["Boomberg","microsoft","uber","google","ibm","netflix"];
// companies.shift();
// console.log(companies);
// companies.splice(1,1,"ola");  1 will come instead of 2 because index will change because of shift()
// console.log(companies);
// companies.push("amazon");
// console.log(companies);


// Function

// function myFunction(){
//     console.log("Apna College");
//     console.log("We are learning JS");
// }
// myFunction();

// function myFunction(msg){
//     // parameter  -->  Input
//     console.log(msg);
// }
// myFunction("I Love Js");   // argument

// functiono 2 numbers sum
// function sum(num1,num2){
//     // local variables ----> scope
//     console.log(num1+num2);
// }
// sum(56742,789456123);

// functiono 2 numbers sum and return
// function sum(num1,num2){
//     total = num1+num2;
//     return total;
// }
// let val = sum(4,3);
// console.log(val);


// Arrow Function

// const arrowSum = (a,b) =>{
//     console.log(a+b);
// };
// arrowSum(3,4);


// Question

// create a function using the "function" keyword which takes the string as a input and returns the number of vowels in the string;
// function countVowels(str){
//     let vowels = 0;
//     for(const char of str){
//         if(char == "a" || "e" || "o" || "u" || "i"){
//             vowels++;
//         }
//     }
//     console.log(vowels);
// }

// countVowels("aeiou");

// repeat the same task with arrow function

// const countVowels = (str) =>{
//     let vowels = 0;
//     for(const char of str){
//         if(char == "a" || "e" || "o" || "u" || "i"){
//             vowels++;
//         }
//     }
//     return vowels;
// }


// for each method for arrays

// let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val){   // value at each index
//     console.log(val);
// });

// generally we use arrow function as a call back funtion
// let arr = [1,2,3,4,5];
// arr.forEach((val) => {
//     console.log(val);
// });

// let arr = ["delhi","pune","mumbai"];
// arr.forEach((val) => {
//     console.log(val.toUpperCase());
// })

// let arr = ["delhi","pune","mumbai"];
// arr.forEach((val,idx,arr) => {  // the parameters are optional
//     console.log(val.toUpperCase(),idx,arr);
// })


// Question

// for a given array of numbers print the square of each value using the foreach loop 

// let arr = [1,2,3,4,5];
// arr.forEach((val) => {
//     console.log(`Square of ${val} = ${val*val}`)
// });

// method 2
// let arr = [1,2,3,4,5];
// let calSquare = (num) =>{
//     console.log(`Square of ${num} = ${num*num}`);
// };
// arr.forEach(calSquare);


// map method for arrays   (same as forEach method but returns a new array)

// let nums = [67,52,39];
// let newArr = nums.map((val) => {
//     return val*val;
// });
// console.log(newArr);


// filter method for arrays  (gives a new array of element that give true for a condition/filter)

// let arr = [1,2,3,4,5,6,7];
// let evenArr = arr.filter((val) => {
//     return val%2==0;
// });
// console.log(evenArr);


// reduce method for arrays    (perform some operations and reduces the array to a single value and returns that single value but does not change the original array)

// let arr = [1,2,3,4];
// const output = arr.reduce((prev,current) => {
//     return prev+current;
// });
// console.log(output);  //10

// let arr = [5,6,2,1,3];
// const output = arr.reduce((prev,curr) => {
//     return prev>curr?prev:curr;
// });
// console.log(output);   //6


// Question

// we are given a array of marks of student filter out the marks of student that scored 90+
// let marks = [45,67,89,92,94,45,97,100];
// let goodMarks = marks.filter((val) => {
//     return val>90;
// });
// console.log(goodMarks);

// Question

// take a number n as input from the user. create an array of numbers from 1 to n.
// use the reduce method to calculate the sum of all numbers in the array
// use the reduce method to calculate the product of all numbers in the array

// let n = prompt("Enter Your Number");
// let numArr = [];
// for(let i = 1; i<=n; i++){
//     numArr.push(i);
// }
// console.log(numArr);
// let sum = numArr.reduce((prev,curr) => {
//     return prev+curr;
// });
// console.log(`Sum of your array:- ${sum}`);
// let product = numArr.reduce((prev,curr) => {
//     return prev*curr;
// });
// console.log(`Product of your arary: ${product}`);