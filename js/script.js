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
 	var $form = document.getElementById("answer");
 	var score = 0;
 	var answer,i;

function chooseQuestion(i) {
	var question = quiz.questions[i].question;	
	ask(question);
}


function hide(element) {
	element.style.display = "none";
}

function show(element) {
	element.style.display = "block";
}

hide($form);
 
 /* Updates the initial score and throughout the game play */
 function play(){

 	hide($start);
	show($form);
	var i = 0;
	chooseQuestion(i);
 	$form.addEventListener('submit', function(event) {
		event.preventDefault();
		check($form[0].value);
	}, false);
 	/* function to ask question */
 	
  	gameOver(score);
  }
 
 function ask(question) {

 	update( $question, quiz.question+question );
	$form[0].value = "";
	$form[0].focus(); 
 }
 
 /* function to check answer and update score */
 function check(answer) {
 	if(answer === quiz.questions[i].answer){
 		update($feedback,"Correct!","right");
 		// increase score by 1
 		score++;
 		update($score,score);
 	} else {
 		update($feedback,"Wrong!","wrong");
 	}

 	i++;
	if(i === quiz.questions.length) {
		gameOver();
	} else {
		chooseQuestion();
	}
 }
 
 
 function gameOver(score){
 	// inform the player that the game has finished and tell them how many points they have scored
 	update($question,"You Scored " + score + " points");
 	hide($form);
	show($start);
 }
  
  /* The following function helps to update the question,answer,and score as well */
  function update(element,content,klass){
 	var p = element.firstChild || document.createElement("p");
  	p.textContent = content;
  	element.appendChild(p);
  	if(klass){
  		p.className=klass;
  	}
  }
  
  document.addEventListener("DOMContentLoaded", function(event){
  	$start.addEventListener('click',function(){ play() },false);
 	update($score,score);
   });