//Variables
//Timer updating interval variable holder
timerInterval = null

//Variables holding time values
var seconds = 0;
var minutes = 0;
var hours =  0;

//Variables holding actual timer values
var timerSeconds = 0;
var timerMinutes = 0;
var timerHours =  0;

//Variable holding the current status of the timer
var timerCurrentState = "notRunning"

//function logic to calculate stopwatch time
function stopwatch(){

  seconds++

  if (seconds / 60 === 1 ) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  //concatinating the variable holding the time values
  //Seconds
  if (seconds < 10) {
    timerSeconds = `0${seconds}`;
  }
  else{
    timerSeconds = seconds;
  }

  //Minutes
  if (minutes < 10) {
    timerMinutes = `0${minutes}`;
  }
  else{
    timerMinutes = minutes;
  }

  //Hours
  if (hours < 10) {
    timerHours = `0${hours}`;
  }
  else{
    timerHours = hours;
  }

  //updating Timer HTML text
  document.getElementById("timer").innerHTML = `${timerHours} : ${timerMinutes} : ${timerSeconds}`;

  //Changing button disability if Timer Status is "running"
  if (timerCurrentState === "running") {
    document.getElementById("pauseBtn").disabled = false;
    document.getElementById("continueBtn").disabled = true;
  }
}

//function to Start and Stop the timer
function stopOrStartTimer() {
  if (timerCurrentState === "stopped" || timerCurrentState === "notRunning"){
    //If timer is stopped, reset the timer to Initial on Clicking Start
    if (timerCurrentState === "stopped") {
        reset();
    }

    timerInterval = window.setInterval(stopwatch, 1000);
    document.getElementById("stopOrStartBtn").innerHTML = "Stop";
    timerCurrentState = "running";

  } else {
    window.clearInterval(timerInterval);
    document.getElementById("stopOrStartBtn").innerHTML = "Start";
    document.getElementById("pauseBtn").disabled = true;
    document.getElementById("continueBtn").disabled = true;
    timerCurrentState = "stopped";
  }
}

//function to pause timer
function pauseTimer() {
  if (timerCurrentState === "running") {
    window.clearInterval(timerInterval);
    document.getElementById("pauseBtn").disabled = true;
    document.getElementById("continueBtn").disabled = false;
    timerCurrentState = "paused";
  }
}

//function to continue timer
function continueTimer(){
  if (timerCurrentState === "paused") {
    timerInterval = window.setInterval(stopwatch, 1000);
    timerCurrentState = "running";
  }
}

//function to reset timer
function reset() {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerHTML = "00 : 00 : 00";
}
