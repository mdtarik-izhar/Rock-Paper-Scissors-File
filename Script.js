// console.dir(document.body.firstChild);

// let div = document.querySelector("div");
// console.dir(div); 
// let heading = document.querySelector("h1");

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from apna college student";

// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for (div of divs) {
//     div.innerText = `new unique value ${idx}`;
//     idx++; 
// }
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";


// let div = document.querySelector("div");
// console.log(div);

// let id = document.querySelector("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.visibility = "hidden";

// div.style.fontsize = "26px";

// div.innerText = "Hello!";

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me!";
// console.log(newBtn);

// let p = document.querySelector("div");
// p.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, i am new!</i>";

// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();
// newHeading.remove();

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";

// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";

// document.querySelector("body").prepend(newBtn);

//Qs2
// let para = document.querySelector("p");

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientx, evt.clienty);
// }

// btn1.addEventListener("click", (evt) => {
//     console.log("button1 was clicked");
//     console.log(evt);
// })

// let div = document.querySelector("div");
 
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        body.classList.add("dark"); 
        body.classList.remove("light"); 
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark"); 
    }
    console.log(currMode);
});