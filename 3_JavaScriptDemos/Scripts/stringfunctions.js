function btnClick() {
    var input = document.getElementById('input').value;
    var output = document.getElementById('output');

    // output.value = input.value;

    //// split words from input sentence
    //var words = input.split(' ');
    //for (var i = 0; i < words.length; i++) {
    //    output.value += `${words[i]}\n`;
    //}

    //// replace vikul with vihaan
    //// var result = input.replace('vikul', 'vihaan');
    //var result = input.replace(/vikul/gim, 'vihaan');
    //output.value = result;

    //// search in input
    //var result = input.search('vikul');
    //output.value = result;

    //// split string
    //var words = input.split('vikul');
    //for (var i = 0; i < words.length; i++) {
    //    output.value += `${words[i]}\n`;
    //}

    // get all numbers from input
    // var result = input.search('\\d+');
    // var result = input.match('\\d+');
    // var result = input.match(/\d+/g); // any number of digit
    //var result = input.match(/\d{2}/g); // find two digit number
    //output.value = result;

    var numPattern = new RegExp('\\d+', 'g');

    // check if string does not contain number
    var result = numPattern.test(input);
    output.value = result;

}

function clearValues() {
    var input = document.getElementById('input');
    var output = document.getElementById('output');
    input.value = '';
    output.value = '';
}

function validateName() {
    var input = document.getElementById('input').value;
    var output = document.getElementById('output');

    var pattern = new RegExp('\\d+', 'g');

    if (!pattern.test(input)) {
        output.value = 'Valid Name';
    } else {
        output.value = 'Name should not contain digits';
    }
}

function validateMobile() {
    var input = document.getElementById('input').value;
    var output = document.getElementById('output');

    // var pattern = new RegExp('\\d{10}', 'g');
    var pattern = new RegExp('\[6789][0-9]{9}$');

    if (!pattern.test(input)) {
        output.value = 'INVALID MOBILE NUMBER';
    } else {
        output.value = 'VALID MOBILE NUMBER';
    }
}

function validateEmail() {
    var input = document.getElementById('input').value;
    var output = document.getElementById('output');

    // var pattern = new RegExp('\\d{10}', 'g');
    // var pattern = new RegExp('/^[a-zA-Z0-9]\.*\_*\@+\w+\.+\w{2,3}$/');
    var pattern = new RegExp('\[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$');
    // var pattern = new RegExp('\^[^\s@]+@[^\s@]+\.[^\s@]+$');

    if (!pattern.test(input)) {
        output.value = 'INVALID EMAIL';
    } else {
        output.value = 'VALID EMAIL';
    }
}

function ValidateEmailOnKeyUp() {
    var i = document.getElementById('input');

    var p = new RegExp('\[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$');
    // var pattern = new RegExp('\^[^\s@]+@[^\s@]+\.[^\s@]+$');

    if (!p.test(i.value)) {
        input.style.background = 'red';
    } else {
        input.style.background = 'green';
    }
}