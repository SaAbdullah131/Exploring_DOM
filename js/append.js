
//1. where to add 
const placesList = document.getElementById("places-list");
// 2.what to be added
const nwLi = document.createElement('li');
nwLi.innerText = "PaharToliBon";

//3.  add the child
placesList.appendChild(nwLi);

// 1.where to add .

const mainContainer = document.getElementById("main-content");

// what to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My Food List";
section.appendChild(h1);

const ul = document.createElement("li");

const li1 = document.createElement("li");
li1.innerText = "Biryani";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "Borhani";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerText = "Salad";
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section)
// set innerHTML Directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h1>My Dress Section</h2>
<ul>
    <li>T-shirt</li>
    <li>Laungi</li>
    <li>Sando Gangi</li>
</ul>    
`
document.getElementById("fruits-title").style.fontSize = "30px";
mainContainer.appendChild(sectionDress);