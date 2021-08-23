// creating an array pf question objects called questions.
// prompts created. We don't want prompts. Will have to figure this out.
var questions = [
    {
    prompt: "Which dinosaur is the king of the dinosaurs?\n(a) T-Rex\n(b) Triceratops\n(c)Steggosaurus\(d) None of the above",
    answer: "a"

},
{
    prompt: "Which dinosaur is the king of the dinosaurs?\n(a) T-Rex\n(b) Triceratops\n(c)Steggosaurus\ (d) None of the above",
    answer: "a"

},
{
    prompt: "Which dinosaur is the king of the dinosaurs?\n(a) T-Rex\n(b) Triceratops\n(c)Steggosaurus\ (d) None of the above",
    answer: "a"

},
]
var score = 0;

//Basic for loop structure for questions. Questions will stop once question = greater than question length
for(var i=0, i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt]);

    //Did they get the answer right?
    if (response == questions[i]) {
        score++;
        alert("That is correct!!!")
    } else {
        alert("Sorry, that is incorrect!")
    }
}
alert("You got " + score + "/" + questions.length);



// Add event listener to generate button
// generateBtn.addEventListener("click", startQuiz);
// Add event listener to generate button
// generateBtn.addEventListener("click", answer);
// Add event listener to generate button
// generateBtn.addEventListener("click", highScores);