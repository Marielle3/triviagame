
//trivia properties
var trivia = {
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  timer: 10,

 
//created set of questions for the trivia game
  question: {
    q1: "Where is Loki's sceptre ultimately located?",
    q2: "Which of the following Avengers from the comics is not in the movie?",
    q3: "Who does Captain America call Earth's best defender?"
  },
  //options of answers for the Player to choose from 
  multipleChoices: {
    q1: ['Sokovia', 'Thanos', 'America'],
    q2: ['Captain America', 'The Wasp', 'Hawkeye'],
    q3: ['Spider Man', 'Hulk', 'Iron Man']
  },
  //Correct answers to the questions 
  answer: {
    q1: 'Sokovia',
    q2: 'The Wasp',
    q3: 'Iron Man'
  },

//functions to start the game
startGame: function run() {
trivia.correct = 0;
trivia.incorrect = 0;
trivia.unanswered = 0;



