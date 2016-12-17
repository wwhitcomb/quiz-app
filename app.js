var state = {
	questions: []
}

var totalCorrect = 0;
var totalCount = 0;

function Question(){
	this.text = '';
	this.number = '';
	this.answers = [];
	this.correctAnswerIndex = 0;
	this.isCurrentlyDisplayed = false;
	this.img;
}

var ques1 = new Question();
ques1.text = 'Who served as Ant-Man?';
ques1.number = '1';
ques1.answers.push('Wade Wilson'); //0
ques1.answers.push('Henry Pym'); //1 
ques1.answers.push('Scott Summers'); //2
ques1.answers.push('Nick Fury'); //3
ques1.correctAnswerIndex = 1;
ques1.isCurrentlyDisplayed = true;
ques1.img = 'imgs/ant-man.jpg';
//http://www.w3schools.com/jsref/jsref_indexof_array.asp
//ques1.correctAnswerIndex = ques1.answers.indexOf('Henry Pym');

var ques2 = new Question();
ques2.text = 'What is Peter Parkers middle name?';
ques2.number = '2';
ques2.answers.push('Benjamin'); //0
ques2.answers.push('William'); //1 
ques2.answers.push('Joseph'); //2
ques2.answers.push('Henry'); //3
ques2.correctAnswerIndex = 0;
ques2.isCurrentlyDisplayed = false;
ques2.img = 'imgs/peter-parker.jpg';

var ques3 = new Question();
ques3.text = 'Which Villian possesed the Infinity Gems?';
ques3.number = '3';
ques3.answers.push('Galactus'); //0
ques3.answers.push('Magneto'); //1 
ques3.answers.push('Hobgoblin'); //2
ques3.answers.push('Thanos'); //3
ques3.correctAnswerIndex = 3;
ques3.isCurrentlyDisplayed = false;
ques3.img = 'imgs/thanos.jpg';

var ques4 = new Question();
ques4.text = 'The Fantastic Four have headquarters in what building?';
ques4.number = '4';
ques4.answers.push('Xavier Institute'); //0
ques4.answers.push('Baxter Building'); //1 
ques4.answers.push('Stark Tower'); //2
ques4.answers.push('Fantastic Headquarters'); //3
ques4.correctAnswerIndex = 1;
ques4.isCurrentlyDisplayed = false;
ques4.img = 'imgs/baxter-building.jpg';

var ques5 = new Question();
ques5.text = 'Peter Parker takes pictures for:';
ques5.number = '5';
ques5.answers.push('The Rolling Stone'); //0
ques5.answers.push('The Daily Planet'); //1 
ques5.answers.push('The Daily Bugle'); //2
ques5.answers.push('The New York Times'); //3
ques5.correctAnswerIndex = 2;
ques5.isCurrentlyDisplayed = false;
ques5.img = 'imgs/daily-bugle.jpg';

var ques6 = new Question();
ques6.text = 'Captain America was frozen in which war?';
ques6.number = '6';
ques6.answers.push('WWI'); //0
ques6.answers.push('Cold War'); //1 
ques6.answers.push('WWII'); //2
ques6.answers.push('Korean War'); //3
ques6.correctAnswerIndex = 2;
ques6.isCurrentlyDisplayed = false;
ques6.img = 'imgs/captain-america.jpg';

var ques7 = new Question();
ques7.text = 'Deadpool Joined the Weapon X program because:';
ques7.number = '7';
ques7.answers.push('He was forced to'); //0
ques7.answers.push('He wanted to fight for justice'); //1 
ques7.answers.push('He had incurable cancer'); //2
ques7.answers.push('He thought it would be fun'); //3
ques7.correctAnswerIndex = 2;
ques7.isCurrentlyDisplayed = false;
ques7.img = 'imgs/deadpool.jpg';

var ques8 = new Question();
ques8.text = 'Edwin Jarvis is the butler to:';
ques8.number = '8';
ques8.answers.push('Bruce Wayne'); //0
ques8.answers.push('Brian Braddock'); //1 
ques8.answers.push('Charles Xavier'); //2
ques8.answers.push('Tony Stark'); //3
ques8.correctAnswerIndex = 3;
ques8.isCurrentlyDisplayed = false;
ques8.img = 'imgs/jarvis.jpg';

var ques9 = new Question();
ques9.text = 'How many rings of power does the Mandarin possess?';
ques9.number = '9';
ques9.answers.push('2'); //0
ques9.answers.push('10'); //1 
ques9.answers.push('5'); //2
ques9.answers.push('7'); //3
ques9.correctAnswerIndex = 1;
ques9.isCurrentlyDisplayed = false;
ques9.img = 'imgs/mandarin.jpg';

var ques10 = new Question();
ques10.text = 'In "Civil War", Captain America fought against":';
ques10.number = '10';
ques10.answers.push('Iron Man'); //0
ques10.answers.push('Nick Fury'); //1 
ques10.answers.push('Frank Castle'); //2
ques10.answers.push('Johnny Storm'); //3
ques10.correctAnswerIndex = 0;
ques10.isCurrentlyDisplayed = false;
ques10.img = 'imgs/civil-war.jpg';

state.questions.push(ques1);
state.questions.push(ques2);
state.questions.push(ques3);
state.questions.push(ques4);
state.questions.push(ques5);
state.questions.push(ques6);
state.questions.push(ques7);
state.questions.push(ques8);
state.questions.push(ques9);
state.questions.push(ques10);

//application functionality

//loops through the state.questions and displays the Question text and answers for the 
//question that has isCurrentlyDisplayed set to true
function RerenderQuestions(state, element) {
	for (var i = 0; i < state.questions.length; i++) {
		if (state.questions[i].isCurrentlyDisplayed === true) {
			var questionsHTML = 
				'<section class="questions-section">' + 
				'<h2>' + 'Question ' + '<span class="question-number">' + state.questions[i].number + '</span>' + ' out of 10' + '</h2>' +
				'<h3 class="actual-question">' + state.questions[i].text + '</h3>' + '<div class="form-div">' +
				'<form action="">' + 
					'<input type="radio" name="ans" value="0" id="answer1">' + '<span class="ans1">' + state.questions[i].answers[0] + '</span>'  + '<br>' +
					'<input type="radio" name="ans" value="1" id="answer2">' + '<span class="ans2">' + state.questions[i].answers[1] + '</span>'  + '<br>' +
					'<input type="radio" name="ans" value="2" id="answer3">' + '<span class="ans3">' + state.questions[i].answers[2] + '</span>'  + '<br>' +
					'<input type="radio" name="ans" value="3" id="answer4">' + '<span class="ans4">' + state.questions[i].answers[3] + '</span>'  + '<br>' +
				'</form>' + '</div>' +
				'<button class="check-answer">' + 'Check Your Answer' + '</button>' +
				'<h3>' + 'Your Current score: ' + '<span class="current-score">' + totalCorrect + '</span>' + ' out of 10' + '</h3>' +
				'</section>';
			element.html(questionsHTML);
			
//			question.text(state.questions[i].text);
//			number.text(state.questions[i].number);
//			ans1.text(state.questions[i].answers[0]);
//			ans2.text(state.questions[i].answers[1]);
//			ans3.text(state.questions[i].answers[2]);
//			ans4.text(state.questions[i].answers[3]);
//			total.text(totalCorrect);
//			break;
		}
	}
}

function RerenderMessage(img, message, element) {
	var messageHTML = '<section class="display-message">' + 
			'<img src=' + img + '>' +
			'<h3 class="message">' + message + '</h3>' +
			'<button class="next-button">' + 'Continue' + '</button>' +
			'<button class="final-button hide">' + 'Get Final Score' + '</button>' +
		'</section>';
	element.html(messageHTML);
}

function RerenderFinalMessage(totalCorrect, element) {
	var finalHTML = 
	'<section class="final-display">' + 
		'<h2 class="final-score">' + 'You got ' + totalCorrect + ' out of 10 correct!' + '</h2>' +
		'<button class="restart-button">' + 'Click Here to Play Again!' + '</button>' +
	'</section>';
	element.html(finalHTML);
}

//loops through the state.questions and sets the currently displayed isCurrentlyDisplayed
//to false and set the next question's to true
// i.e state.questions[i].isCurrentlyDisplayed = false    then
// state.questions[i + 1].isCurrentlyDisplayed = true
//this is done inside of your loop and you are looking for the currently displayed question    
//"if (state.questions[i].isCurrentlyDisplayed)"
function nextQuestion(state) {
	for (var i = 0; i < state.questions.length; i++) {
		if (state.questions[i].isCurrentlyDisplayed === true) {
			state.questions[i].isCurrentlyDisplayed = false;
			state.questions[i + 1].isCurrentlyDisplayed = true;
			break;
		}
	}
}

function checkAns(guess, element) {
	for (var i = 0; i < state.questions.length; i++) {
		if (state.questions[i].isCurrentlyDisplayed === true) {
			if (state.questions[i].correctAnswerIndex === parseInt(guess)) {
				RerenderMessage(state.questions[i].img,"You Got It Right!", element);
				totalCorrect += 1;
				break;
			} else {
				var ansNum = state.questions[i].correctAnswerIndex;
				var wrongAns = 'You got it wrong! The correct answer was ' + state.questions[i].answers[ansNum];
				RerenderMessage(state.questions[i].img, wrongAns, element);
			}
		}
	}
}

function checkFinal(nextButton, finalButton) {
	for (var i = 0; i < 10; i++) {		
		if (totalCount === 9) {
			nextButton.addClass('hide');
			finalButton.removeClass('hide');
			break;
		} else {
			totalCount++;
			break;
		}
	}
}
		 
		 
$( document ).ready(function() {
	$('button.start-button').on('click', function () {
		$('.start').remove();
		RerenderQuestions(state, $('main.main-content'));
	});
	
	$('main').on('click', 'button.check-answer', function (event) {
		guess = $('input[name=ans]:checked').val();
		checkAns(guess, $('main.main-content'));
		checkFinal($('button.next-button'), $('button.final-button'));
		
		
	});
	
	$('main').on('click', 'button.next-button', function () {
		nextQuestion(state);
		RerenderQuestions(state, $('main.main-content'));
		$('input[type=radio]').prop('checked', function () {
			return this.getAttribute('checked') == 'checked';
		});
	});
	
	$('main').on('click', 'button.final-button', function () {
		RerenderFinalMessage(totalCorrect, $('main.main-content'));
	});
	
	$('main').on('click', 'button.restart-button', function () {
		totalCorrect = 0;
		totalCount = 0;
		state.questions[9].isCurrentlyDisplayed = false;
		state.questions[0].isCurrentlyDisplayed = true;
		RerenderQuestions(state, $('main.main-content'));
	});
});	 
		 
		 
		 
		 






