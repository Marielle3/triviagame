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
  time: 10,
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
$('#results').html('';)
$('#timer').text(trivia.timer);

//remove the start button 

}
};

function decrement(){

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

