function outer(a) {
    document.write('outer() function called <br/>');

    function inner(b) {
        document.write('inner() function called <br/>');
        return a + b;
    }

    // inner();
   // return inner();
    // return inner(a);
    return inner;
}

// var result = outer(10)(20);
var result = outer(10)(30);
// inner(); // not defined
document.write(`Returned Result : ${result} <br/>`);

// multiply(2,3,4) => 24
function multiply(a, b, c) {
    return a * b * c;
}

result = multiply(2, 3, 4);
document.write(`multiply(2, 3, 4) Result : ${result} <br/>`);

// multiplya(2)(3)(4) => 24

function multiplya(a) {
    function multiplyb(b) {
        function multiplyc(c) {
            return a * b * c;
        }

        return multiplyc;
    }

    return multiplyb;
}

result = multiplya(2)(3)(4);
document.write(`multiplya(2)(3)(4) Result : ${result} <br/>`);