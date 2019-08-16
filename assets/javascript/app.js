//providing a function for the count down to begin starting at 10 seconds.
//created function to run the time and countdown, giving alert to time's up, and resetting the clock
$("#display").html("Time Remaining: 10:00");

var time = 10;
var intervalId;

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement(){

  time--;

  $('display-time').html('<h2>' + time + '</h2>')
  
  if (time ===0) {

    stop();

    alert("Time's Up!")
  }
}

function stop(){
  
  clearInterval(intervalId);
}

run();