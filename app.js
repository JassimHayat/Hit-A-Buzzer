let timer = 10;  // 10s the game time
let timerInterval; // time event
let cookieScore = 0;

 

document.getElementById('cookie-score').textContent = `Cookies:${cookieScore}`
document.getElementById('timer').textContent = `timer:${timer}`
document.getElementById('message').textContent = '';
document.getElementById("buzzer-button").disabled = true;
  
//Hide play again btn
document.getElementById("divPlayAgain").style.display = "none";



//On click start game
document.getElementById("start-game-button").addEventListener("click", function() {
  startGame();
  document.getElementById("divStartGame").style.display = "none";
  document.getElementById("buzzer-button").disabled = false;
  

  // Update massage
  let message = document.getElementById("message");
   message.innerText = "GOOOOOOO ! ";
});

//start game
function startGame(){
  timer = 11;
  cookieScore = 0;
  document.getElementById('cookie-score').textContent = `Cookies: ${cookieScore}`;
  startTimer();
 

}

//set Countdown timer
function startTimer() {
  // Decrease the timer for 1 second
  timerInterval = setInterval(function () {
    if (timer <= 0) {
      clearInterval(timerInterval); 
      endGame(); 
    } 
    else 
    {
      timer--; 
      document.getElementById('timer').textContent = `Timer: ${timer}`;
    }
  }, 1000); 
}

//endGame
function endGame() {
  if (cookieScore >= 20) {
document.getElementById('message').textContent = `Congratulations,You win a ${cookieScore} Cookies 🍪`;

  }else {
document.getElementById('message').textContent = `Game Over!! You clicked the buzzer only ${cookieScore} times.`;

  }

  document.getElementById("divPlayAgain").style.display = "";
  document.getElementById("buzzer-button").disabled = true;
  
  
}

//Clicking the buzzer
document.getElementById("buzzer-button").addEventListener("click", function() {
cookieScore++;
  document.getElementById('cookie-score').textContent = `Cookies: ${cookieScore}`;
});


//Play again btn click
document.getElementById("play-again-button").addEventListener("click", function() {
  
  startGame();

  document.getElementById("divStartGame").style.display = "none";
  document.getElementById("divPlayAgain").style.display = "none";
  document.getElementById("buzzer-button").disabled = false;
  
  
  // Update massage
  let message = document.getElementById("message");
  message.innerText = "GOOOOOOO ! ";
});