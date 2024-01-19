// alert('Operators JS Loaded');

var a = 10, b = 10;

var r1 = a == b;
document.write(`a == b : ${r1} <br/>`);

r1 = a != b;
document.write(`a != b : ${r1} <br/>`);

r1 = a <= b;
document.write(`a <= b : ${r1} <br/>`);

r1 = a === b;
document.write(`a === b : ${r1} <br/>`);

b = '10';
r1 = a == b;
document.write(`a == b : ${r1} <br/>`);

r1 = a === b;
document.write(`a === b : ${r1} <br/>`); // false

b = 10; // Number type
r1 = a === b;
document.write(`a === b : ${r1} <br/>`); // true

var c = 20;

r1 = a == b && a < c;
document.write(`a == b && a < c : ${r1} <br/>`);

r1 = a == b && a > c;
document.write(`a == b && a > c : ${r1} <br/>`);

r1 = a == b || a > c;
document.write(`a == b || a > c : ${r1} <br/>`);

a++;
document.write(`a++ : ${a} <br/>`); // 11

// a = a + 10;
a += 9;
document.write(`a = a + 10 : ${a} <br/>`); // 21

a = 10;
b = 'vishal';
document.write(`${a + b}  <br/>`);

a = 15;
b = 10;
document.write(`${a / b} <br/>`);
document.write(`${a % b} <br/>`);

// type conversion
var x = '10.5', y = '10';
document.write(`${x + y} <br/>`);

document.write(`${parseInt(x) + parseInt(y)} <br/>`);

document.write(`${parseFloat(x) + parseFloat(y)} <br/>`);

var s1 = 'false';

r1 = Boolean(s1);
document.write(`${r1} <br/>`);