// registering event using DOM object property

//document.getElementById('btn').onmouseover = btnMouseOver;
//document.getElementById('btn').onmouseout = btnMouseOut;
//document.getElementById('btn').onclick = btnMouseClick;

btn.addEventListener('mouseover', btnMouseOver);
btn.addEventListener('mouseover', btnMouseOver1);
btn.addEventListener('click', btnMouseClick);
btn.addEventListener('mouseout', btnMouseOut);

// document.getElementById('search').focus();

function btnMouseOver() {
    var btn = document.getElementById('btn');
    btn.style.background = 'red';
}

function btnMouseOver1() {
    var btn = document.getElementById('btn');
    btn.style.color = 'white';
}

function btnMouseOut() {
    var btn = document.getElementById('btn');
    btn.style.background = 'lightgreen';
}

function btnMouseClick() {
    var btn = document.getElementById('btn');
    btn.value = 'Button Clicked';
}

// btn1.addEventListener('mouseover', genericEventHandler);
btn1.addEventListener('click', genericEventHandler);
// btn1.addEventListener('mouseout', genericEventHandler);
// btn1.addEventListener('dblclick', genericEventHandler);
// btn1.addEventListener('mousedown', genericEventHandler);
// btn1.addEventListener('mouseup', genericEventHandler);
btn1.addEventListener('contextmenu', genericEventHandler);

var messages = document.getElementById('messages');
messages.value = '';

// keyboard events/ input events
//search.addEventListener('focus', genericEventHandler);
//search.addEventListener('blur', genericEventHandler);
//search.addEventListener('keydown', genericEventHandler);
//search.addEventListener('keyup', genericEventHandler);
//search.addEventListener('keypress', genericEventHandler);

function genericEventHandler(event) {
    messages.value += `Event Name : ${event.type}\n`;
    messages.value += `Tag name :  ${event.target.tagName} Tag type : ${event.target.type}\n`;
    messages.value += `X : ${event.clientX} Y : ${event.clientY}\n`;
}

div1.addEventListener('mouseup', mouseClick);

function mouseClick(event) {
    messages.value += `Button Code : ${event.which} Button Name : ${buttonName(event.which)}\n`;
}

function buttonName(code) {
    switch (code) {
        case 1:
            return 'Left Button';
        case 2:
            return 'Middle Button';
        case 3:
            return "Right Button";
        default:
            return 'Invalid Button';
    }
}

search.addEventListener('blur', validateSearch);

function validateSearch() {
    var search = document.getElementById('search');

    if (search.value == '' || search.value == undefined ||
        search.value == 'undefined') {
        search.style.border = '1px solid red';
    } else {
        search.style.border = 'solid gray';
    }
}