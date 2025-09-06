let sessionMinutes = 25;
let timeLeft = sessionMinutes * 60 *1000;
pomodoro_duration_div = document.getElementById("pomodoro");
short_break_duration_div = document.getElementById("short-break");
long_break_duration_div = document.getElementById("long-break");



current_time = document.getElementById("time")

function setSession(minutes){
    sessionMinutes = minutes;
    running = false;
    clearInterval(timerInterval)
    timeLeft = sessionMinutes * 60 * 1000;
    current_time.textContent = `${String(minutes).padStart(2, "0")}:00`;
    status_element.textContent = "PAUSE"
}
  
pomodoro_duration_div.addEventListener("click", function() {
    setSession(25)
  });
short_break_duration_div.addEventListener("click", function() {
    setSession(5)
  });
long_break_duration_div.addEventListener("click", function() {
    setSession(15)
  });

let running = false;
let status_element = document.getElementById("status");

function toggleTimer(){
    running = !running
    if (running){
        status_element.textContent = "RUNNING"

        endTime = new Date().getTime() + timeLeft;

        timerInterval = setInterval(() => {
            const now = new Date().getTime()
            timeLeft = endTime - now;

            if (timeLeft <= 0){
                clearInterval(timerInterval);
                running = false;
                current_time.textContent  = "Time's up!";
                status_element.textContent = "PAUSE";
                return;
            }

            const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
            const seconds = Math.floor((timeLeft/1000) % 60);

            current_time.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        })
    }
    else{
        clearInterval(timerInterval);
        status_element.textContent = "PAUSE";
    }

    
    
}