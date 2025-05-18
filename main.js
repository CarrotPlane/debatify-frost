let timeRemaining = 30;
let timer = null;



function updateDisplay() {
  const mins = String(Math.floor(timeRemaining / 60)).padStart(2, '0');
  const secs = String(timeRemaining % 60).padStart(2, '0');
  document.getElementById('timerDisplay').textContent = `${mins}:${secs}`;
}

updateDisplay();

function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      if (timeRemaining > 0) {
        timeRemaining--;
        updateDisplay();
      } else {
        clearInterval(timer);
        timer = null;
        document.getElementById("bell").play();
        document.getElementById("timerDisplay").classList.add("flash-red");
      }
    }, 1000);
  }
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}



function switchMode() {
  const mode = document.getElementById("modeSelector").value;
  document.body.setAttribute("data-mode", mode);
  
  document.getElementById("timer").style.display = mode === "timer" ? "block" : "none";
  document.getElementById("stopwatch").style.display = mode === "stopwatch" ? "block" : "none";
  document.getElementById("about").style.display = mode === "about" ? "block" : "none";
  updateDisplay();
}

function resetTimer() {
  pauseTimer();
  timeRemaining = parseInt(document.getElementById('timerType').value);
  updateDisplay();
  document.getElementById("timerDisplay").classList.remove("flash-red");

}

document.getElementById("timer").style.display = "block"; 
document.getElementById("stopwatch").style.display = "none"; 
document.getElementById("about").style.display = "none"; 
document.getElementById('timerType').onchange = resetTimer;
window.onload = resetTimer;
