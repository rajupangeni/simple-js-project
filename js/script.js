	alert("hello");
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

	var score = 0;

	for(var i=0, question, answer, max=quiz.questions.length; i<max;i++) {
		question = quiz.questions[i].question; // change is made here
		answer = ask(question);
		check(answer);
	}
	gameOver();
	
	function ask(question) {
		return prompt(quiz.question+question); // quiz[i][0] is the ith questions
	}

	function check(answer) {
		if(answer === quiz.question[i].answer){ // quiz[i][1] is the ith answer	
			alert("Correct!");
			// increase score by 1
			score++;
			} else {
			alert("Wrong!");
		}
	}

	function gameOver(){
		// inform the player that the game has finished and tell them how many points they have scored
		alert("Game Over, you scored " + score + " points");
	}