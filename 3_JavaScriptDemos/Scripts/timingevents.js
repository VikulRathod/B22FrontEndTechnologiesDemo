function showCurrentTime() {
    var date = new Date();
    document.getElementById('currentTime').innerText = date;
}

function startClock() {
   intervalId = setInterval(showCurrentTime, 1000);
}

function stopClock() {
    clearInterval(intervalId);
}

function stopSession() {
    // alert('Session is over');
    window.close();
}

// stopSession();
// setTimeout(stopSession, 5000);

function sessionAlert() {
    // timeoutId = setTimeout(stopSession, 5000);
    timeoutId = setTimeout(stopSession, 5000);
}

function sessionAlertStop() {
    clearTimeout(timeoutId);
}