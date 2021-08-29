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
        choices:  ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"

    },
    {
        question: "The condition in an if / else statement is enclosed within ______.",
        choices: ["quotes", "curly braces", "parentheses", "square brackets"],
        answer: "brackets"

    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"

    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["quotes", "curly braces", "parentheses", "commas"],
        answer: "parenthesis"

    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "console.log", "for loops"],
        answer: "console.log"

    }];

var createUl = document.createElement("ul"); //creates ul for questions

var timerInterval = 0;
//Timer will start and display time.
timer.addEventListener("click", function(){
    if (timerInterval === 0) {
        timerInterval = setInterval(function() {
            secondsLeft--;
            currentTime.textContent = "Time: "+ secondsLeft;
        
            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                finished();
                currentTime.textContent = "Game Over!"
            };
        }, 1000);    
    };
    render(questionIndex);
});

//Questions and answers rendered on page
function render(questionsIndex) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";

    //creating for loop to access array questions
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionsIndex].questions;
        questionsBox.textContent - userQuestion;
    }

}   
