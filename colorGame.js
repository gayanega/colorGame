var numSquares = 6;
var colors = [];
var pickedColor;


var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode buttons event listeners
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            //removes the mode from both before adding selected
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //ternary operator (same as an if/else statement)
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
            })
    }

    //square listeners
    for(var i = 0; i < squares.length; i++) {
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
    reset();
}

function reset() {
      //generate all new colors
      colors = generateRandomColors(numSquares);
      //pick a new random color from array
      pickedColor = pickColor();
      //change color display to match picked color
      colorDisplay.textContent = pickedColor;
      //makes "Play again?" button display "New Colors" when reset
      resetButton.textContent = "New Colors";
      /*makes span empty so you don't see "Correct!"
      when you reset it*/
      messageDisplay.textContent = "";
      //change colors of squares on page
      for(var i = 0; i < squares.length; i++) {
          if(colors[i]) {
              squares[i].style.display = "block";
              squares[i].style.background = colors[i];
          }
          else{
              squares[i].style.display = "none";
          }
          squares[i].style.background = colors[i];
      }
      h1.style.background = "steelblue";  
}



resetButton.addEventListener("click", function() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //makes "Play again?" button display "New Colors" when reset
    this.textContent = "New Colors";
    /*makes span empty so you don't see "Correct!"
    when you reset it*/
    messageDisplay.textContent = "";
    //change colors of squares on page
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
})


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