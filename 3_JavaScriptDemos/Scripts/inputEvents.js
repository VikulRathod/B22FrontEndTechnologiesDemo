var result = document.getElementById("result");
result.value = '';

function txtFocus() {
    result.value += 'start typing...\n';
}

function txtBlur() {
    result.value += 'stopped typing...\n';
}

var input = document.getElementById('txt');

function txtKeyUp(event) {
    var digitCode = [48, 49, 50, 51, 52, 53, 54, 55, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];
    if (digitCode.indexOf(event.keyCode) >= 0) {
        // input.value = `${input.value}\b`;
        input.value = input.value.substring(0, input.value.length - 1);
        result.value += 'numbers not allowed\n';
    } else {
        result.value += `${event.keyCode}\n`;
    }
}

function cityChange() {
    var selectedCity = document.getElementById('city').value;
    if (selectedCity == '-1') {
        result.value += `Please select city\n`;
        document.getElementById('cityError').innerText = 'Please select city';
    } else {
        result.value += `Selected City is : ${selectedCity} \n`;
    } 
}