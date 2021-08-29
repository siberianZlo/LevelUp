const minutNumber = document.querySelector('#minut-number');
const secNumber = document.querySelector('#sec-number');

let targetDate = new Date().getTime() + (1000 * 1800);
let minutes, seconds;

getCountdown();
setInterval(function () { getCountdown(); }, 1000);

function getCountdown() {
    let currentDate = new Date().getTime();
    let secondsLeft = (targetDate - currentDate) / 1000;


    minutes = pad(parseInt(secondsLeft / 60));
    seconds = pad(parseInt(secondsLeft % 60));

    if (minutes >= 0) {
        minutNumber.innerHTML = minutes;
        secNumber.innerHTML = seconds;
    }
    else {
        return;
    }

}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}