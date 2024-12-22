// Sync in JS
// synchronous -> synchronous means the code runs in a particular sequence of instructions given in the program .
// Each instruction wait for the previous instruction to complete its execution

// asynchronous -> due to synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the UI.
// asynchronous code execution allows to execute next instructions immediately and doesn't block the flow  

// console.log("one");
// console.log("two");
// setTimeout(() =>{
//     console.log("Hello World");
// },4000);   // from this function we can set the function when it will execute (in ms); 
// console.log("three");
// console.log("four");  //these two lines will not wait for setTimeout function to complete 



// Callbacks - a callback is a function passed as an argument to another function 
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2,sum);


// if we want to get data one after the another then we can do this;
// function getData(dataId,getNextData){ //2s
//     setTimeout(() => {
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }
// getData(1,() =>{  // this situation can lead to callback hell
//     getNextData(2);
// });



// Promises - promise is for "eventual" completion of task. it is an object in js. it is a solution to callback hell 

// let promise = new Promise((resolve,reject) =>{
//     console.log("i am a promise");
//     reject("some error occured");
//     resolve("success");
// });

// example of promises 
// function getData(dataId ,getNextData){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// };

// .then and .catch

// const getPromise = () =>{
//     return new Promise((resolve,reject) =>{
//         console.log("i am a promise");
//         resolve("success");
//     });
// };

// let promise = getPromise();
// promise.then((res) =>{     // this function will be called when promise is fulfilled
//     console.log("promise fulfilled",res);  // this will print the fulfilled msg written in the resolve function of promise
// });
// promise.catch((err) =>{    // this function will be called when promise is rejected
//     console.log("rejected",err);  //this will print the error which is written in the reject function of promise
// });

// Promise Chain

// function asyncFunc1(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             console.log("data1");
//             resolve("success");
//         },4000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             console.log("data2");
//             resolve("success");
//         },4000);
//     });
// }
// console.log("fetching data1.......");
// asyncFunc1().then((res)=>{
//     console.log("fetching data2.......");
//     asyncFunc2().then((res)=>{});
// });

// now how we can do the call back hell situation in promise chain 

// function getData(dataId){ //2s
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("success");
//         }, 3000);
//     });
// };

// getData(1).then((res) =>{
//     console.log(res);
//     getData(2).then((res) =>{
//         console.log(res);
//     });
// });
// below is the actual example of promise chaining
// console.log("getting data 1.......");
// getData(1)
//     .then((res) =>{
//         console.log("getting data 2.......");
//         return getData(2);
//     })
//     .then((res) =>{
//         console.log("getting data 3.......");
//         return getData(3);
//     })
//     .then((res) =>{
//         console.log(res);
//     });



// Async and await 

// async function hello(){   // async function always returns a promise    
//     console.log("hello");
// }

// function api(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             console.log("weather data");
//             resolve(200);
//         },2000);
//     });
// }

// async function getWeatherData(){
//     await api(); //1st  await keyword can only be used in a async function and it stops the surrounding tasks in a function until the promise is settled
//     await api(); //2nd
// }

// Now how we can use this concept in our get data example 
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//         },2000);
//     });
// }

// async function getAllData(){
//     await getData(1);
//     await getData(2);
// }



// IIFE - Immediately invoked function expression
// IIFE is a function that is called immediately as soon as it is defined

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//         },2000);
//     });
// }

// (async function (){    // Now this is an IIFE it call automatically
//     await getData(1);
//     await getData(2);
// })();