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
            //when time is up, game is done.
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
function render(questionIndex) {
    questionBox.innerHTML = "";
    CreateUl.innerHTML = "";

    //creating for loop to access array questions
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].question;
        var userChoices = questions[questionIndex].choices;
        questionBox.textContent - userQuestion;
        }
    //create ul and li for choices
    userChoices.forEach(function(newItem) { 
        var createLi = document.createElement("li");
        createLi.textContent = newItem;
        questionBox.appendChild(createUl);
        createUl.appendChild(createLi);
        createLi.addEventListener("click", compare());
        }
    );
};   

function compare(event) {
    var selection = event.target;

    if (selection.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
            //if answer choice correct
        if(selection.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Letsa Go! You are right!" 
        }   //if answer choice wrong, minus time.
            else {
                secondsLeft = secondsLeft - penalty;
                createDiv.textContent = "SMH. SHAKING MY DAMN HEAD."
            }
    }

    questionIndex++; //on to next question.

    // question count vs total questions. stop game or move to next question
    if (questionIndex >= questions.length) {
            finished();
            createDiv.textContent = "No more." + score + "/" + questions.length + ". See you at the crossroads. So you won't be lonely."
    } 
        else {
        render(questionIndex);
    }
        questionBox.appendChild(createDiv);

//Gme finished. Questionbox and timer cleared
function finished() {
    questionBox.innerHTML = "";
    currenTime.innerHTML = "";

    //announcing game over
    var createH1 =document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Game over!"

    questionBox.appendChild(createH1);
    }
    var createP =document.createElement("p");
    createH1.setAttribute("id", "createP");

    questionBox.appendChild(createP);

    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = documente.createElement("p");
        clearInterval(timeInterval);
        createP2.textContent = "Final Score: " + score;

        questionBox.appendChild(createP2);
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
    var createButton = document.createElement("submitButton");
    createButton = setAttribute("id", "submitButton");
    createButton = setAttribute("type", "submit");
    createButton.textContent = "Submit"; 
    questionBox.appendChild(createButton);

    //creating Event for button push
    createButton.addEventListener("click", function() {
        var initials = createInput.value;

        var finalScore = {
            initials: initials,
            score:  score
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
            window.location.replace("highScores.html")
    })    

};
