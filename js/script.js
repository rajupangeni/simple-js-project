var quiz = {
	"name":"Super Hero Name Quiz",
	"description":"How many super heroes can you name?",
	"question":"What is the real name of ",
	"questions": [
		{ "question": "Superman", "answer": "Clarke Kent" },
		{ "question": "Batman", "answer": "Bruce Wayne" },
		{ "question": "Wonder Woman", "answer": "Dianna Prince" }
	]
};

/* identify different element and store value in variable */
	var $question = document.getElementById("question");
	var $feedback = document.getElementById("feedback");
	var $score = document.getElementById("score");
	var $start = document.getElementById("start");

	var score = 0;
	var answer,i;

/* Updates the initial score and throughout the game play */
function play(){
	/* function to ask question */
	for( i = 0; i < quiz.questions.length; i++ ){

		question = quiz.questions[i].question;
		ask(question);
		//check(question,answer);
	}
	gameOver(score);
}

function ask(question) {
	update( $question, quiz.question+question );
	answer = prompt("Enter your answer");

}

/* function to check answer and update score */
function check(question,answer) {
	if(answer === quiz.questions[i].answer){
		update($feedback,"Correct!","right");
		// increase score by 1
		score++;
		update($score,score);
	} else {
	update($feedback,"Wrong!","wrong");
	}
}


function gameOver(score){
	// inform the player that the game has finished and tell them how many points they have scored
	update($question,"You Scored " + score + " points");
}

/* The following function helps to update the question,answer,and score as well */
function update(element,content,klass){
	var p =  document.createElement("p");
	p.textContent = content;
	element.appendChild(p);

	if(klass){
		p.className=klass;
	}
}

document.addEventListener("DOMContentLoaded", function(event){
	update($score,score);
	$start.addEventListener('click',function(){ play() },false);
 });