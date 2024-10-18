// const link = document.querySelector("section");
// const para =  document.createElement("p");
// para.textContent = "We hope you enjoyed your ride!";
// link.appendChild(para);
// const text = document.createTextNode("— the premier source for web development knowledge.",);
// const linkPara = document.querySelector("p");
// // linkPara.appendChild(text);
// link.appendChild(text);
// para.setAttribute("style", "color:blue");
// para.style.backgroundColor ="yellow";
// para.style.padding = "10px";
// para.style.width = "250px";
// para.style.textAlign ="center";


const mainBody = document.querySelector("body");
const mainDivForShoppingList = document.createElement("div");
mainBody.appendChild(mainDivForShoppingList);
const headerShoppingList = document.createElement("h1");
headerShoppingList.textContent = "My Shopping list";
mainDivForShoppingList.appendChild(headerShoppingList);
const inputShoppingItem = document.createElement("input");
mainDivForShoppingList.appendChild(inputShoppingItem);
const addItemButton = document.createElement("button");
addItemButton.textContent = "Add Item";
mainDivForShoppingList.appendChild(addItemButton);
addItemButton.addEventListener("click",addShoppingItem);

function addShoppingItem() {
    
}

// document.createElement("p").textContent = inputShoppingItem.value);
