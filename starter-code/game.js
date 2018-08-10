var circle1 = document.getElementById("circle1");
circle1.mouseover = function () {
    this.style.backgroundColor = "lightblue";
};

circle1.addEventListener("mouseover", circle1.mouseover);


var circle2 = document.getElementById("circle2");
circle2.click = function () {
    this.style.backgroundColor = "blue";
    this.style.marginLeft = "15em";
};

circle2.addEventListener("click", circle2.click);

var circle3 = document.getElementById("circle3");
circle3.mouseenter = function () {
    this.style.backgroundColor = "cyan";
    this.style.marginLeft = "30em";
};

circle3.addEventListener("mouseenter", circle3.mouseenter);

var button = document.querySelector("button");

beginGame = function () {
    alert("I don't know how to get this start button to work. But click and mouse over the circles!");
}

button.addEventListener("click", beginGame);

var circle1 = document.getElementById("circle1");
circle1.click = function () {
    this.style.marginLeft = "45em";
};

circle1.addEventListener("click", circle1.click);

