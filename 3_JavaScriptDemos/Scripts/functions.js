function printA() {
    document.write('printA Function Called <br/>');
}

printA();

var result = printA();
document.write(`${result} <br/>`);

function printB() {
    return "Value returned by printB() function";
}

result = printB();
document.write(`${result} <br/>`);

function printC(name) {
    document.write(`Welcome, ${name} <br/>`);
}

printC('Vishal');

printC();

printC('mahesh', 'dipak', 'shital');

function printD(a, b) {
    document.write(`${a} + ${b} = ${a + b} <br/>`);
    document.write(`Number of arguments passed: ${arguments.length}<br/>`);

    document.write('*** ALL ARGUMENTS ***<br/>');
    for (var i = 0; i < arguments.length; i++) {
        document.write(`${arguments[i]} `);
    }
    document.write('<br/>');
}

printD(10, 10);
printD(10, 20, 30, 40, 50, 60);

// default parameter
function printE(a, b = 10) {
    document.write(`${a} + ${b} = ${a + b} <br/>`);
}

printE(5, 5);
printE(5);

// rest parameters

function printF(...numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    document.write(`Sum : ${sum} <br/>`);
}

printF(10, 10, 20);

// function expression

var printG = function () {
    document.write('printG() function called <br/>');
};

printG();

document.write(`${printG} <br/>`);

var printH = function factorial(num) {
    var f = 1;
    for (var i = 1; i <= num; i++) {
        f *= i;
    }
    return f;
};

result = printH(5);
document.write(`${result} <br/>`);

//result = factorial(5); // not defined
//document.write(`${result} <br/>`);

var printH = function factorial(num) {

    if (num == 1) {
        return 1;
    }

    return num * factorial(num - 1);
};

result = printH(5);
document.write(`${result} <br/>`);

var printI = (function factorial(num) {

    if (num == 1) {
        return 1;
    }

    return num * factorial(num - 1);
})(10);

result = printI;
document.write(`${result} <br/>`);

// arrow function

var printJ = () => document.write('arrow function printJ called <br/>');
printJ();

var printK = (a, b) => a + b;

result = printK(10, 10);
document.write(`${result} <br/>`);

// differences

printL();
// printM();
// printN();

function printL(){
    document.write('printL() normal function called <br/>');
}

var printM = function () {
    document.write('printM() expression function called <br/>');
};

printM();

var printN = () => document.write('printN() arrow function called <br/>');

printN();