//declaring variables and var selectors
var score = 0;
var secondsLeft = 70;
var timerInterval = 0;
var penalty = 10;
var questionIndex = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#timeStart");
var questionBox = document.querySelector("#questionBox");
var createUl = document.createElement("ul");

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
        answer: "parentheses"

    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"

    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["quotes", "curly braces", "parentheses", "commas"],
        answer: "quotes"

    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "console.log", "for loops"],
        answer: "console.log"

    }
];

//Timer will start and display time.
timer.addEventListener("click", function () {
    if (timerInterval === 0) {
        timerInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;
            //when time is up, game is done.
            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                finish();
                currentTime.textContent = "Time out";
            }
        }, 1000);
    }
    generate(questionIndex);
});

//Clear Data. Questions and answers generated on page
     //creating for loop to access array questions and answers
        //create ul and li for choices
function generate(questionIndex) {
    questionBox.innerHTML = "";
    createUl.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].question;
        var userChoices = questions[questionIndex].choices;
        questionBox.textContent = userQuestion;
    }
    userChoices.forEach(function (newItem) {
        var createLi = document.createElement("li");
        createLi.textContent = newItem;
        questionBox.appendChild(createUl);
        createUl.appendChild(createLi);
        createLi.addEventListener("click", (compare));
    });
};
//begin comparing answers by creating 
function compare(event) {
    var selection = event.target;

    if (selection.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv"); 
        if (selection.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! Answer:  " + questions[questionIndex].answer;
        } 
            else {
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Incorrect. Correct Answer:  " + questions[questionIndex].answer;
        }

    }

    questionIndex++; //on to next question.

    // question count vs total questions. stop game or move to next question
    if (questionIndex >= questions.length) {
        finish();
        createDiv.textContent =  score + "/" + questions.length + " were correct";
    } 
        else {
        generate(questionIndex);
    }
    questionBox.appendChild(createDiv);

};
//Game finish. Questionbox and timer cleared
function finish() {
    questionBox.innerHTML = "";
    currentTime.innerHTML = "";

    //announcing game over
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Game over!"

    questionBox.appendChild(createH1);

    var finalScoreP = document.createElement("p");
    finalScoreP.setAttribute("id", "finalScoreP");

    questionBox.appendChild(finalScoreP);

    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP = document.createElement("p");
        clearInterval(timerInterval);
        finalScoreP.textContent = "Your final score is: " + timeRemaining;

        questionBox.appendChild(createP);
    }

    //Entering initials and submitting high score to high score list.
    //creating label for input box
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent("Enter initials here: ");
    questionBox.appendChild(createLabel);

    //creating input box of high scores
    var createInput = document.createElement("input");
    createInput = setAttribute("id", "createInput");
    createInput = setAttribute("type", "text");
    createInput.textContent = "";
    questionBox.appendChild(createInput);

    //creating submit button
    var createButton = document.createElement("button");
    createButton = setAttribute("id", "submitButton");
    createButton = setAttribute("type", "submit");
    createButton.textContent = "Submit"; 
    questionBox.appendChild(createButton);

    //creating Event for button push
    createButton.addEventListener("click", function() {
        var initials = createInput.value;

        var finalScore = {
            initials: initials,
            score:  timeRemaining
        };
        // storing and retrieving topScores from localStorage. Place into highScores.html 
        var topScores = localStorage.getItem("topScores");
        //if there are no topScores created yet, a new array is created for the topScores
        if (topScores === null) {
            topScores = [];
        }
            else {
                topScores = JSON.parse(topScores);
            }
            //add new high score to high score list
            topScores.push(finalScore);
            var setScore = JSON.stringify(topScores);
            localStorage.setItem("topScores", setScore);
            //Move to highScores page
            window.location.replace("highScores.html");
    });    
};
