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
  gameSet= 0,
  timer: 10,
  timerId: '',

  questions: {
    q1: "Where is Loki's sceptre ultimately located?",
    q2: "Which of the following Avengers from the comics is not in the movie?",
    q3: "Who does Captain America call Earth's best defender?"
  },
  options: {
    q1: ['Sokovia', 'Thanos', 'America'],
    q2: ['Captain America', 'The Wasp', 'Hawkeye'],
    q3: ['Spider Man', 'Hulk', 'Iron Man']
  },
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

//remove the start button 
$('#start').hide();

$('#remaining-time').show();

trivia.nextQuestion();
},

nextQuestion : function(){
  //setting timer to 10 sec per question
  trivia.timer = 10;
  $('#timer').removeClass('last-seconds');
  $('#timer').text(trivia.timer);

//10 second interval
  if(!trivia.timerOn){
    trivia.timerId = setInterval(trvia.timerRunning, 1000);
  }

//provides all the questions and indexes the current question
var questionContent = Object.values(trivia.questions)[trivia.gameSet];
$('#question').text(questionContent);

var questionOptions = Object.values(trivia.options)[trivia.gameSet];

$.each(questionOptions, function(index, key){
  $('#options').append($('<button class="option btn btn-info btn-lg">' + key + '</button>'));
})

},

//decrement counter
countDown : function(){
if(trivia.timer > -1 && trivia.gameSet < Object.keys(trivia.questions).length){
  $('#timer').text(trivia.timer);
  trivia.timer--;
    if(trivia.timer === 4){
      $('#timer'.addClass('last-seconds');
    }
}

  time--;

  $('#display-time').html('<h2>' + time + '</h2>')
  
  if (time === 0) {

    stop();

    alert("Time's Up!")
  }
}

function stop(){
  
  clearInterval(intervalId);
}

run();

