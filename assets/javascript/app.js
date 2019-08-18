$(document).ready(function() {

//event listeners
$("#display-time").hide();
$('#start').on('click', trivia.startGame);
$(document).on('click', '.option', trivia.guessChecker);

})
//trivia properties
var trivia = {
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  gameSet: 0,
  timer: 10,
  timerId: '',
  timerOn: false,
//created set of questions for the trivia game
  questions: {
    q1: "Where is Loki's sceptre ultimately located?",
    q2: "Which of the following Avengers from the comics is not in the movie?",
    q3: "Who does Captain America call Earth's best defender?"
  },
  //options of answers for the Player to choose from 
  options: {
    q1: ['Sokovia', 'Thanos', 'America'],
    q2: ['Captain America', 'The Wasp', 'Hawkeye'],
    q3: ['Spider Man', 'Hulk', 'Iron Man']
  },
  //Correct answers to the questions 
  answers: {
    q1: 'Sokovia',
    q2: 'The Wasp',
    q3: 'Iron Man'
  },

//functions to start the game
  startGame: function run() {
trivia.correct = 0;
trivia.incorrect = 0;
trivia.unanswered = 0;
clearInterval(trivia.timerId);

//game section 
$('#game').show();
$('#results').html('');
$('#timer').text(trivia.timer);

//Once the game has started, have the start button disappear and the 10 seconds appear to show to the Player 
//After player chooses an answer, move onto the next question
$('#start').hide();

$('#remaining-time').show();

trivia.nextQuestion();

},

nextQuestion : function(){
  //setting timer to 10 seconds for the Player to have per question 
  trivia.timer = 10;
  $('#timer').removeClass('last-seconds');
  $('#timer').text(trivia.timer);


  if(!trivia.timerOn){
    trivia.timerId = setInterval(trivia.timerRunning, 1000);
  }

//creating variables for the questions to be stored into and 
//indexes the current question 
var questionContent = Object.values(trivia.questions)[trivia.gameSet];
$('#question').text(questionContent);

var questionOptions = Object.values(trivia.options)[trivia.gameSet];

//for each question and the options to choose from, created a button for the Player to interact with 
$.each(questionOptions, function(index, key){
  $('#options').append($('<button class="option btn btn-info btn-lg">' + key + '</button>'));
})

},

//decrement counter, counts down the seconds for the Players to see how much time they have left to answer the question
countDown : function(){
if(trivia.timer > -1 && trivia.gameSet < Object.keys(trivia.questions).length){
  $('#timer').text(trivia.timer);
  trivia.timer--;
    if(trivia.timer === 4){
      $('#timer').addClass('last-seconds');
    }
}
    
// if the Player runs out of time and no answer was selected 
else if(trivia.timer === -1){
  trivia.unanswered++;
  trivia.result = false;
  clearInterval(trivia.timerId);
  resultId = setTimeout(trivia.guessResult, 1000);
  $('#results').html('<h3>Earth has been destroyed! The answers were' + Object.values(trivia.answers)[trivia.gameSet] +'</h3>');
}

//When all questions have been asked, the game is done, and the results of the Players' score is shown
else if(trivia.gameSet === Object.keys(trivia.questions).length){

$('#results')
.html('<h3>Thanks for playing!</h3>'+ 
'<p> Correct: ' + trivia.correct +'</p>'+
'<p>Incorrect: '+ trivia.incorrect +'</p>'+
'<p>Unanswered: '+ trivia.unanswered +'</p>'+
'<p>Save the Planet!</p>');

//hide game during the results 
$('#game').hide();

//Show start button game to play again 
$("#start").show();

}
},
//method to evaluate the options clicked 
guessChecker: function() {
  var resultId;
  
  var currentAnswer = Object.values(trivia.answers)[trivia.gameSet];
//created buttons for answers chosen. green means correct, red means incorrect 
  if($(this).text() === currentAnswer) {

    $(this).addClass('btn-warning"').removeClass('btn-info');

  trivia.correct++;
  clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
      $('#results').html('<h3>Correct Answer!</h3>');
  }
  else {
     $(this).addClass('btn-danger').removeClass('btn-info');
       trivia.incorrect++;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $('#results').html('<h3>You got hit by an asteroid '+ currentAnswer +'</h3>');
  }
},

guessResult: function(){
  trivia.gameSet++;

  $('.option').remove();
  $('#results h3').remove();

  trivia.nextQuestion();
}
}