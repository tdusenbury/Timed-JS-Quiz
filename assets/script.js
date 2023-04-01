var timerElement = document.getElementById('countdown');
var timerElement = document.getElementById('main');

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if (timeLeft >1) {
            timerElement.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerElement.textContent = timeLeft + 'second remaining';
            timeLeft--;
        } else {
            timerElement.textContent= '' + 'QUIZ OVER'
        } 
    }, 60000);
}
