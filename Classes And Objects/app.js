// const student = {                     // creating an object
//     fullName: "Sharaddha Khapra",     // these two are properties also known as state
//     marks: 94.4,
//     printMarks: function (){          // this is a method also known as behaviour
//         console.log(this.marks);      // student.marks
//     }
// }
// JS objects have a special property called prototype (it is itself an object)


// const employee = {
//     calcTax1() {        // this is better way to create a function in object
//         console.log("tax rate is 10%");
//     },
//     // calcTax2: function(){
//     //     console.log("tax rate is 10%");
//     // }
// };

// const karanArjun = {
//     salary: 50000
// };
// karanArjun.__proto__ = employee;   //this way we can set the employee object as the prototype for karanArjun;
                                   // prototype --> refrence to an object


// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     }
// };
// const karanArjun = {
//     salary: 50000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     }
// };
// karanArjun.__proto__ = employee;   // if object and prototype have same method,object's method will be used



// Classes

// class ToyotaCar{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand = brand;   // this.brand will property of that particular object and other two brand used here are the arguments of the function setBrand()
//     }
// }

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar();
// lexus.setBrand("lexus");



// Constructor   // this is special funtion created in a object when created from classes and is automatically executed when the object is created we can either manually create a constructor or it will automatically creatd

// class ToyotaCar{
//     constructor(brand,mileage) {
//         console.log("creating new object");
//         this.brand = brand;
//         this.brand = mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }

// let fortuner = new ToyotaCar("fortuner",10);
// let lexus = new ToyotaCar("lexus",12);



// Inheritance 
// inheritance is passing down properties and methods from parent class to child class 

// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class Child extends Parent{

// }
// let obj = new Child();

// class Person{
//     constructor(){
//         this.species = "homo sapiens";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person{
//     work(){     // if child and parent have same method, child's method will be used [method overriding]
//         console.log("solve problems, build something");
//     }
// }



// super keyword 
// the super keyword is used to call the constructor of its parent class to access the parent's properties and methods 

// class Person{
//     constructor(name){
//         this.species = "homo sapiens";
//         this.name = name;
//     }
//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer extends Person{
//     constructor(branch){
//         super();        // to invoke parent class constructor
//         this.branch = branch;
//     }
//     work(){     
//         console.log("solve problems, build something");
//     }
// }
// class Engineer extends Person{
//     constructor(name){
//         super(name);        // to give this value to parent class constructor;
//     }
//     work(){  
//         super.eat();        // to access the method of parent class   
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("Hardik");



// Question
// you are creating a website for your college. create a class user with 2 prop,name and email. it also has a method called viewData() that allows user to view website data

// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData() {
//         console.log("data");
//     }
// }

// let stud1 = new User("shraddha","123@gmail.com");
// let stud2 = new User("hardik","abc@gmail.com");



// Question
// create a new class admin which inherits from user. add a new method called edit data that allows it edit website data

// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData() {
//         console.log("data");
//     }
// }
// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         console.log("data changed");
//     }
// }
// let stud1 = new User("shraddha","123@gmail.com");
// let stud2 = new User("hardik","abc@gmail.com");
// let admin1 = new admin1("admin","admin@gmail.com");



// Error Handling 

// let a = 5;
// let b = 10;
// console.log("a = ",a);
// console.log("b = ",b);
// console.log(a + b);
// console.log(a + b);
// try{
//     console.log(a + c);
// }
// catch(err){
//     console.log(err);
// }
// console.log(a + b);
// console.log(a + b);
// console.log(a + b);
// console.log(a + b);