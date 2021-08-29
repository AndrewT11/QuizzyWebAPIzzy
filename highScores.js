//declaring variables


//declaring selector variables
var goBack = ducoment.querySelector("#goBack");
var clearHighScores = document.querySelector("#clearHighScores")
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

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

//lists new top score to high score list
if(topScores !== null) {
    for (var i = 0; i < topScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = topScores[i].initials + " " + alllScores[i].score;
        highScores.appendChild(createLi);
    }
};
