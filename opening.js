//declaring variables

var score = 0;
var secondsLeft = 60;
var penalty = 10;
var questionIndex = 0;

//declaring variable selectors
var currentTime = document.querySelector("#currentTime");
var questionBox = document.querySelector("#questionBox");
var timer = document.querySelector("#timeStart");

//creating questions array
//Question Array to be populated
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        options:  ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"

    },
    {
        question: "The condition in an if / else statement is enclosed within ______.",
        options: ["quotes", "curly braces", "parentheses", "square brackets"],
        answer: "brackets"

    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"

    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        options: ["quotes", "curly braces", "parentheses", "commas"],
        answer: "parenthesis"

    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "terminal / bash", "console.log", "for loops"],
        answer: "console.log"

    }];

var createUl = document.createElement("ul"); //creates ul for questions

var timerInterval = 0;
//Timer will start and display time.
timer.addEventListener("click", function(){
    if (timerInterval === 0) {
        timerInterval = setInterval(function() {
            secondsLeft--;
            currentTime.textContent = "Time: + secondsLeft";
        
            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                allDone();
                currentTime.textContent = "Game Over!"
            };
        }, 1000);    
    }
});