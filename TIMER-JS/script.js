var isPaused = true
var tempoRestante 
var display = document.querySelector('.timer')
var duration = 60
var pauseTimer = document.querySelector('.pause')
var playTimer = document.querySelector('.play')

function startTimer(duration, display) {
    var timer = duration, minutes, seconds

    intervalo = setInterval(function() {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds

        
        display.textContent = minutes + ':' + seconds
        tempoRestante = timer

        if (--timer < 0) {
            timer = duration
        }

    }, 1000);
}

function play(){
    if(isPaused){
        startTimer(tempoRestante || duration, display)
        isPaused = false
    }
    pauseTimer.style.display='block'
    playTimer.style.display='none'
}

function pause(){
    isPaused = true
    clearInterval(intervalo)

    pauseTimer.style.display='none'
    playTimer.style.display='block'
}

function refresh(){
    isPaused = true; 
    clearInterval(intervalo); 
    display.textContent = '01:00'; 
    tempoRestante = duration;
    pauseTimer.style.display='none'
    playTimer.style.display='block'
}