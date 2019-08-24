//trivia properties
var trivia = {
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  timer: 10,
  questions: [
    {
      id: 'Question-A',
      description: 'Where is Loki\'s main land?',
      answers: [
        { 
          id: 'Answer-A1',
          response: 'Sokovia',
          correct: true
        },   
        { 
          id: 'Answer-A2',
          response: 'Thanos',
          correct: false
        },   
        { 
          id: 'Answer-A3',
          response: 'America',
          correct: false
        }
      ]
    },
    {
      id: 'Question-B',
      description: 'Which of the following Avengers from the comics is not in the movie?',
      answers: [
        { 
          id: 'Answer-B1',
          response: 'The Wasp',
          correct: true
        },   
        { 
          id: 'Answer-B1',
          response: 'Captain America',
          correct: false
        },   
        { 
          id: 'Answer-B1',
          response: 'Hawkeye',
          correct: false
        }
      ]
    },
    {
      id: 'Question-C',
      description: 'Who does Captain America call Earth\'s best defender?',
      answers: [
        { 
          id: 'Answer-C1',
          response: 'Iron Man',
          correct: true
        },   
        { 
          id: 'Answer-C1',
          response: 'Hulk',
          correct: false
        },   
        { 
          id: 'Answer-C1',
          response: 'Thor',
          correct: false
        }
      ]
    }
  ],
  
  
  //functions to start the game
  startGame: function run() {
    trivia.correct = 0;
    trivia.incorrect = 0;
    trivia.unanswered = 0;
  }

}
$(function() {
  $( "#start" ).click(function() {
    $( "#question" ).show();
  });
});