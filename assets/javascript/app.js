$(document).ready(function() {
//providing a function for the count down to begin starting at 10 seconds.
//created function to run the time and countdown, giving alert to time's up, and resetting the clock
$("#display-time").html("Time Remaining: 10");
})
var trivia = {
  time: 10,
  timerId: '',

  questions: {
    q1: "Where is Loki's sceptre ultimately located?",
    q2: "Which of the following Avengers from the comics is not in the movie?",
    q3: "Who does Captain America call Earth's best defender?",
  },
}


function run() {
  if (!clockRunning){
  intervalId = setInterval(decrement, 1000);
  clockRunning = true;
}
}

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

// <!-- Creating trivia questions-->
// <h3>Where is Loki's sceptre ultimately located?
//   <p>Sokovia</p> <!--Answer-->
//   <p>Thanos</p>
//   <p>America</p>
//   <h3>Which of the following Avengers from the comics is not in the movie?
//       <p>Captain America</p>
//       <p>The Wasp</p> <!--Answer-->
//       <p>Hawkeye</p>
// </h3>
// <h3>Who does Captain America call "Earth's best defender?"
//     <p>Spider Man</p>
//     <p>Hulk</p> 
//     <p>Iron Man</p><!--Answer-->
// </h3>