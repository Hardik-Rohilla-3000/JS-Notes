// API - Application Programming Interface 

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data......");
    let response = await fetch(URL);
    console.log(response);  // JSON format
    let data = await response.json();
    console.log(data);
    factPara.innerText = data[0].text;
};
btn.addEventListener("click",getFacts);


// Understanding Terms 

// AJAX - is asynchronous JS and XML
// JSON - is JavaScript Object Notation
