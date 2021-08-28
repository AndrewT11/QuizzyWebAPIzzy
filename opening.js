//declaring variables

var score = 0;
var secondsLeft = 50;
var incorrect = 10;

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

timer.addEventListener("click", function(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        currentTime.textContent = "Time: " + secondsLeft;
    }
});