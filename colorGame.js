var numSquares = 6;
var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");






easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //for loop to take advantage of the fact that colors only has 3 items
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //for loop to take advantage of the fact that colors only has 3 items
    for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
})



resetButton.addEventListener("click", function() {
    //generate all new colors
    colors = generateRandomColors(numSquares);

    //pick a new random color from array
    pickedColor = pickColor();
    
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    
    //change colors of squares on page
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#232323";
})

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
            resetButton.textContent = "Play again?";
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

function pickColor() {
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