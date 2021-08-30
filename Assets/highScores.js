//declaring variables


//declaring selector variables
var goBack = document.querySelector("#goBack");
var clearHighScores = document.querySelector("#clearHighScores")
var highScores = document.querySelector("#highScores");

//Event Listeners for two buttons on High Score page
goBack.addEventListener("click", function () {
    window.location.replace("../index.html");

});

clearHighScores.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

var topScores = localStorage.getItem("topScores");
topScores = JSON.parse(topScores);


//lists new top score to high score list
if(topScores !== null) {
    for (var i = 0; i < topScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = topScores[i].initials + " " + topScores[i].score;
        highScores.appendChild(createLi);
        
    }
};


// //code for sorting by number in an array
// .sort(function(a, b){return b-a});
//add classes to added li tomorrow morning. or add to Ul somehow. Need to change list type to numbered.