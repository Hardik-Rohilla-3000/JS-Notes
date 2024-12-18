// alert("Hello");

// console.log();   --> prints the exact thing in console 
// console.dir();   --> prints the properties and methods of special objects(document) 



// how to see html code 
// console.dir(document.body);
// console.log(document.body);



// to change the css
// document.body.style.background = "green";



// to change the html 
// document.body.childNodes[3].innerText = "abcd";



// DOM Manipulation

// Selecting with id
// let heading = document.getElementById("heading");        //return null if no such id is found
// console.dir(heading);

// selecting with class 
// let heading = document.getElementsByClassName("heading");    //return empty html collection if now such class is found
// console.dir(heading);   

// selecting with tags 
// let paras = document.getElementsByTagName("p");
// console.dir(paras);

// query selector   (returns node list)
// let firstEl = document.querySelector("p");   // 1st element 
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p");  // all elements
// console.dir(allEl);

// properties

// tagName: returns tag for elements nodes 
// firstChild: returns the node of first child of parent node
// lastChild: returns the node of last child of parent node
// innerText: returns the text content of the element and all its children
// innerHTML: returns the plain text of HTML contents in the element and all its children
// textContent: returns textual content even for hidden elements



// Question 
// Create a h2 element with text "hello javascript". appent "from apna college students" to this text using js

// let heading = document.querySelector("h2");
// heading.innerText+=" from apna college students";


// Question
// create 3 divs with common class name "box". access them and add some unique text to each of them;

// let boxes = document.querySelectorAll(".box");
// console.dir(boxes);
// boxes[0].innerText = "box 1";
// boxes[1].innerText = "box 2";
// boxes[2].innerText = "box 3";



// attributes

// getAttribute: to get the attribute value 
// let div = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);

// setAttribute: to set the attribute value 
// let para = document.querySelector("p");
// para.setAttribute("class","newClass");



// Style 

// let div = document.querySelector("div");
// div.style.backgroundColor="green";



// insert elements 

// let newBtn = document.createElement("button");
// newBtn.innerText = "Cick Me!";

// node.append()   // adds at the end of the node(inside)

// let div = document.querySelector("div");
// div.append(newBtn);

// node.prepend()  // adds at the start of the node(inside);

// let div = document.querySelector("div");
// div.prepend(newBtn);

// node.before() // adds before the node(outside);

// let div = document.querySelector("div");
// div.before(newBtn);

// node.after()  // adds after the node(outside);

// let div = document.querySelector("div");
// div.after(newBtn);



// delete elements 

// let para = document.querySelector("p");
// para.remove();



// Question
// create a new button element. Give it a text "Click Me!",background color of red and text color of white
// insert the button as first element inside the body tag

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";
// document.querySelector("body").prepend(newBtn);



// Question
// create a <p> tag in html give it a class and some styling. 
// now create a new class in css and try to append this class to the <p> element.
// did you notice how you overwrite the class name when you add a new one?
// solve this problem using classList

let para = document.querySelector("p");
para.classList.add("newClass");