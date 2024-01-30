//div1.addEventListener('click', divClick);
//span1.addEventListener('click', spanClick);
//btn1.addEventListener('click', btnClick);

// enabling event capturing
div1.addEventListener('click', divClick,true);
span1.addEventListener('click', spanClick, true);
btn1.addEventListener('click', btnClick, true);

var text = document.getElementById('txt1');
text.value = '';

function divClick(event) {
    event.stopPropagation(); // it will prevent event bubbling
    text.value += 'div clicked \n';
}

function spanClick(event) {
    event.stopPropagation(); // it will prevent event bubbling
    text.value += 'span clicked \n';
}

function btnClick(event) {
    event.stopPropagation(); // it will prevent event bubbling
    text.value += 'button clicked \n';
}