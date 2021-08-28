//declaring variables


//declaring selector variables
var currenTime = document.querySelector("#currenTime");

var question = document.querySelector("#question");

var goBack = ducoment.querySelector("#goBack");

var clearHighScores = document.querySelector("chearhighScores")

var highScores = document.querySelector("#highScores");

//Event Listeners for two buttons on High Score page
goBack.addEventListener("click", function () {
    window.location.replace("opening.html");
console.log()
});

clearHighScores.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
