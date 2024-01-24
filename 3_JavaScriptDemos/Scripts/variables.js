var a = 'global variable';
let x = 'let keyword variable';
const y = 'const variable';

function fun1(para) {
    // a = 'local variable value assigned within fun1()';
    var a = 'fun1() : local variable';
    // var b = 'fun1() declared variable';
    b = 'fun1() declared variable';
    document.write(`fun1() : a : ${a} b : ${b}<br/>`);
    
    if (para === 10) {
        // var result = 'TEN';
        /*let result = 'TEN';*/
        const result = 'TEN';
        // const result; // initialization is mandatory at the time of declaring const variable
        document.write(`Inside if block : ${result} <br/>`);
        // result = 'NEW TEN'; // re assign value to const variable
        // document.write(`Inside if block : ${result} <br/>`);
    }

    // document.write(`Outside if block : ${result} <br/>`);
}

fun1(10);

function fun2() {
    document.write(`fun2() : a : ${a} b : ${b} <br/>`);
}

fun2();

fun3(); // function call

function fun3() {
    var z;
    document.write(`fun3() called : z : ${z}<br/>`);
    // var z = 'z variable value';
    z = 'z variable value';
}