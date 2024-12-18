// event handling 

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// let box = document.querySelector("div");
// box.onmouseover = () =>{
//     console.log("you are inside div");
// }



// event object 

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//     console.log(evt);    
//     console.log(evt.type);       // type of event
//     console.log(evt.target);     // on which element
//     console.log(evt.clientX, evt.clientY);    // coordinates of mouse
// }



// event listeners 

// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log("button 1 was clicked");
// })
// btn1.addEventListener("click", () =>{
//     console.log("button 1 was clicked - handler 2");
// })

// remove event listener 

// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click",(evt) => {
//     console.log("button 1 was clicked - handler 1");
// })
// btn1.addEventListener("click",(evt) => {
//     console.log("button 1 was clicked - handler 2");
// })
// const handler3 = () => {
//     console.log("button 1 was clicked - handler 3");
// }
// btn1.addEventListener("click",handler3);
// btn1.addEventListener("click",(evt) => {
//     console.log("button 1 was clicked - handler 4");
// })

// btn1.removeEventListener("click",handler3);



// Question
// create a toggle button that change the screen to dark mode when clicked & light mode when clicked again

// let modeBtn = document.querySelector("#mode");
// let currMode = "light";
// modeBtn.addEventListener("click",() => {
//     if(currMode === "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }
//     else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
// });

// method 2
// let modeBtn = document.querySelector("#mode");
// let currMode = "light";
// let body = document.querySelector("body");
// modeBtn.addEventListener("click",() => {
//     if(currMode === "light"){
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// });