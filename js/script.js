const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const continueBtn = document.querySelector("#continueBtn");
const pauseBtn = document.querySelector("#pauseBtn");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;
let interval = 0;

// Inicia Cronômetro

function startTimer(){

    startBtn.classList.add("hide");
    pauseBtn.classList.remove("hide");

        interval = setInterval( () => {
            if(!isPaused){
                milliseconds += 10;
                if(milliseconds == 1000){
                    seconds ++;
                    milliseconds = 0;
                };
                if(seconds == 60){
                    minutes++;
                    seconds = 0;
                };     
                minutesEl.textContent = formatTime(minutes);
                secondsEl.textContent = formatTime(seconds);
                millisecondsEl.textContent = formatMilliseconds(milliseconds);  
            };
        }, 10);  
};

function pauseTimer(){
    isPaused = true;
    pauseBtn.classList.add("hide");
    continueBtn.classList.remove("hide");
};

function continueTimer(){
    isPaused = false;
    pauseBtn.classList.remove("hide");
    continueBtn.classList.add("hide");
};

function resetTimer(){
    isPaused = true;
    clearInterval(interval);
    startBtn.classList.remove("hide");
    pauseBtn.classList.add("hide");
    continueBtn.classList.add("hide");
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    minutesEl.textContent = formatTime(minutes);
    secondsEl.textContent = formatTime(seconds);
    millisecondsEl.textContent = formatMilliseconds(milliseconds);  
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time){
    if (time == 0){
        return `00${time}`;
    }else if(time < 1000){
        return time;
    };
}

startBtn.addEventListener("click", () => {
    isPaused = false;
    startTimer();
});

pauseBtn.addEventListener("click", pauseTimer);
continueBtn.addEventListener("click", continueTimer);
resetBtn.addEventListener("click", resetTimer);
