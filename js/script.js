document.addEventListener("DOMContentLoaded", function(event){
/* identify different element and store value in variable */
var $question = document.getElementById("question");
var $feedback = document.getElementById("feedback");
var $score = document.getElementById("score");
var $start = document.getElementById("start");

var score = 0;

update($score,score);

/* The following function helps to update the question,answer,and score as well */
function update(element,content,klass){
	var p = element.firstChild || document.createElement("p");
	p.textContent = content;
	element.appendChild(p);
	if(klass){
		p.className=klass;
	}
}

/* this is an object containing information for the game  */

quiz = {
	"name":"Super Hero Name Quiz",
	"description":"How many super heroes can you name?",
	"question":"What is the real name of ",
	"questions": [
		{ "question": "Superman", "answer": "Clarke Kent" },
		{ "question": "Batman", "answer": "Bruce Wayne" },
		{ "question": "Wonder Woman", "answer": "Dianna Prince" }
	]
}

$start.addEventListener('click',function(){ play(quiz) },false);



/* Updates the initial score and hroughout the game play */
function play(quiz){
	for(var i=0, question, answer, max=quiz.questions.length; i<max;i++) {

		question = quiz.questions[i].question; // change is made here
		ask(question);
		check(answer);
	}

	gameOver();
}



/* function to ask question */
function ask(question) {
	update($question,quiz.question+question);
	var answer=prompt("Enter your answer");
}

/* function to check answer and update score */
function check(answer) {
		if(answer === quiz.questions[i].answer){ // quiz[i][1] is the ith answer	
		update($feedback,"Correct!","right");
		// increase score by 1
		score++;
		update($score,score);
		} else {
		update($feedback,"Wrong!","wrong");
	}
}

function gameOver(){
	// inform the player that the game has finished and tell them how many points they have scored
	update($question,"You Scored " + score + " points");
}

 });