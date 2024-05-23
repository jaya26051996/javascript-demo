let modBtn = document.querySelector("#toggleButton");
let currntMode ="light"

modBtn.addEventListener("click", () =>{
    // console.log("changed coller");
    if(currntMode === "light"){
        document.body.style.backgroundColor = "black";
        // document.querySelector("body").style.backgroundColor = "black"
        currntMode ="dark"
    }else{
        document.body.style.backgroundColor = "white";
        // document.querySelector("body").style.backgroundColor = "white"
        currntMode ="light"
    }
    console.log(currntMode);
})



// Finding HTML Elements

// document.getElementById(id)	Find an element by element id
// document.getElementsByTagName(name)	Find elements by tag name
// document.getElementsByClassName(name)	Find elements by class name

// document.getElementById("content").innerHTML = "Hello World!";
// document.getElementById("content").style.color = "blue";


// document.createElement(element)	Create an HTML element
// document.removeChild(element)	Remove an HTML element 
// document.appendChild(element)	Add an HTML element
// document.replaceChild(new, old)	Replace an HTML element
// document.write(text)	Write into the HTML output stream


// let webUser = prompt("Please create a username", "enter your name");

// if (webUser != null) {
// 	document.getElementById("root").innerHTML = "Hello " + webUser + "! How are you today?";
// }

// if (webUser) {  
// 	alert('HI');
// }
// else {
// 	alert('Username Denied') ; 
// }


