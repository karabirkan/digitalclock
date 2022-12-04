// elements

const container = document.createElement("div");
const header = document.createElement("h1");
const outPut = document.createElement("p");




// append child

document.body.appendChild(container);
container.appendChild(header);
container.appendChild(outPut);





// attributes
header.innerHTML = "Digital Clock";
container.setAttribute("class", "container");
header.setAttribute("id", "header");
outPut.setAttribute("id", "outPut");







// clock function


setInterval(clock, 1000);
function clock(){

const currentClock = new Date()

const hours = currentClock.getHours();
const minutes = currentClock.getMinutes();
const seconds = currentClock.getSeconds();



outPut.textContent = `${hours}:${minutes}:${seconds}`


}