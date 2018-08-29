var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of picked square
        var clickedColor = this.style.background;

        //compare color to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correctomundo Buddy!";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        }
        else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors (color) {
    for(var i = 0; i < squares.length; i++) {
        //change each color to match given square
        squares[i].style.background = color;
 }
}

function pickedColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //add num random colors to array
    for(var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255
    var red = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var green = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var blue = Math.floor(Math.random() * 256);
    //interpolate these 3 variables into an rgb string
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}