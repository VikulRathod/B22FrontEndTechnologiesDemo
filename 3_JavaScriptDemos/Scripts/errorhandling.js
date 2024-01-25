//try {
//    NonExistingFunction();
//} catch (e) {
//    // document.write(`${e.message} <br/>`);
//    document.write(`There is some error. Please try later. <br/>`);
//} finally {
//    document.write('This statement will get executed always <br/>');
//}


//document.write('JS Executed Successfully <br/>');

//function NonExistingFunction() {
//    document.write('NonExistingFunction() Executed <br/>');
//}

window.onerror = function (message, url, line) {
    document.write(`message : ${message}<br/> url : ${url}<br/> line number : ${line}<br/>`);
    // complete();
    return true;
}


NonExistingFunction();

document.write('JS Executed Successfully <br/>');

//function complete() {
//    document.write('JS Executed Successfully <br/>');
//}


