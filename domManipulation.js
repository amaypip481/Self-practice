const container = document.querySelector("#container");
const contant = document.createElement("div");
contant.classList.add("content");
contant.textContent = "something here!"
container.appendChild(contant);

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm Red";
paragraph.setAttribute("style","color:Red");
container.appendChild(paragraph);

const headline3 = document.createElement("h3");
headline3.textContent = "I'm blue h3!";
headline3.setAttribute("style","color: blue");
container.appendChild(headline3);

const anotherDiv = document.createElement("div");
anotherDiv.setAttribute("style","border-style:solid; border-color:black; background-color:pink");
container.appendChild(anotherDiv);

const anotherHeadline1 =document.createElement("h1");
anotherHeadline1.textContent = "I am a div!";
anotherDiv.appendChild(anotherHeadline1);

const anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "ME TOO!";
anotherDiv.appendChild(anotherParagraph);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function(e){
    console.log(e.target.style.background = "blue");
});

const allButton = document.querySelectorAll("button");
allButton.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
      });    
});