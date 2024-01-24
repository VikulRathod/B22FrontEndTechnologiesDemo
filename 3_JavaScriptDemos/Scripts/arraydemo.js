//// 1st way to declare array

//// var numbers1 = [];
//var numbers1 = [10, 20, 30, 'vishal', 'mahesh'];
//document.write(`numbers1 size : ${numbers1.length} <br/>`);

//// 2nd way to declare array

//// var numbers2 = new Array();
//var numbers2 = new Array(10, 20, 30, 40);
//document.write(`numbers2 size : ${numbers2.length} <br/>`);

//var numbers1 = [10, 20, 30, 'vishal', 'mahesh']; // adding different type items
//document.write(`numbers1 size : ${numbers1.length} <br/>`);

//document.write(`********** ORIGINAL ARRAY **********<br/>`);
//for (var i = 0; i < numbers1.length; i++) {
//    document.write(`${numbers1[i]} `);
//}

//document.write(`<br/>********** Adding new items ARRAY **********<br/>`);

//numbers1[5] = 50;
//for (var i = 0; i < numbers1.length; i++) {
//    document.write(`${numbers1[i]} `);
//}

var numbers = [10, 20, 30];
document.write(`Number of items: ${numbers.length}<br/>`);
document.write(`*** ALL ITEMS ***<br/>`);

for (var i = 0; i < numbers.length; i++) {
    document.write(`${numbers[i]} `);
}
document.write('<br/>');

// push() -> to add item at the end in the array
numbers.push(40);
document.write(`*** ALL ITEMS AFTER numbers.push(40) ***<br/>`);

for (var i = 0; i < numbers.length; i++) {
    document.write(`${numbers[i]} `);
}
document.write('<br/>');

// pop() -> it returns item from end from the array

var item = numbers.pop();
document.write(`numbers.pop() : ${item} <br/>`);

document.write(`*** ALL ITEMS AFTER numbers.pop() ***<br/>`);

for (var i = 0; i < numbers.length; i++) {
    document.write(`${numbers[i]} `);
}
document.write('<br/>');

// unshift() -> to add item at the begenning in the array

numbers.unshift(40);

document.write(`*** ALL ITEMS AFTER numbers.unshift(40) ***<br/>`);

for (var i = 0; i < numbers.length; i++) {
    document.write(`${numbers[i]} `);
}
document.write('<br/>');

// shift() -> it returns item from start from the array

item = numbers.shift();
document.write(`numbers.shift() : ${item} <br/>`);

document.write(`*** ALL ITEMS AFTER numbers.shift() ***<br/>`);

for (var i = 0; i < numbers.length; i++) {
    document.write(`${numbers[i]} `);
}
document.write('<br/>');

// splice()
// to add item at any position
// to add multiple items at any position
// to remove any item from array
// to remove multiple items from an array

// add two items at the begenning
numbers.splice(0, 0, 5, 6);
document.write(`*** ALL ITEMS AFTER numbers.splice(0, 0, 5, 6) ***<br/>`);

for (var i = 0; i < numbers.length; i++) {
    document.write(`${numbers[i]} `);
}
document.write('<br/>');

// 5 6 10 20 30
// add two items in between

numbers.splice(3, 0, 17, 18);
document.write(`*** ALL ITEMS AFTER numbers.splice(3, 0, 17, 18) ***<br/>`);

for (var i = 0; i < numbers.length; i++) {
    document.write(`${numbers[i]} `);
}
document.write('<br/>');

// delete 2 items from 3rd index
numbers.splice(3, 2);
document.write(`*** ALL ITEMS AFTER numbers.splice(3,2) ***<br/>`);

for (var i = 0; i < numbers.length; i++) {
    document.write(`${numbers[i]} `);
}
document.write('<br/>');

// add and delete at same time
numbers.splice(0, 2, 7, 8, 9);

document.write(`*** ALL ITEMS AFTER numbers.splice(0, 2, 7, 8, 9) ***<br/>`);

for (var i = 0; i < numbers.length; i++) {
    document.write(`${numbers[i]} `);
}
document.write('<br/>');

// to find index or to check whether item exists or not

var index = numbers.indexOf(9);
document.write(`index of 9 : ${index} <br/>`);

index = numbers.indexOf(100);
document.write(`index of 100 : ${index} </br>`);

numbers.reverse(); // reverses sequence of items
document.write(`*** ALL ITEMS AFTER numbers.reverse() ***<br/>`);

for (var i = 0; i < numbers.length; i++) {
    document.write(`${numbers[i]} `);
}
document.write('<br/>');

// sort

var alphabets = ['X', 'E', 'M', 'L', 'J'];
document.write('*** ALL ALPHABETS *** <br/>');
for (var i = 0; i < alphabets.length; i++) {
    document.write(`${alphabets[i]} `);
}

document.write('<br/>');

alphabets.sort();
document.write('*** ALL ALPHABETS AFTER SORT() *** <br/>');
for (var i = 0; i < alphabets.length; i++) {
    document.write(`${alphabets[i]} `);
}

document.write('<br/>');

var digits = [8, 488, 1, 6, 90, 30];
document.write('*** ALL DIGITS *** <br/>');
for (var i = 0; i < digits.length; i++) {
    document.write(`${digits[i]} `);
}

document.write('<br/>');

// digits.sort();
digits.sort(compareLogic);

document.write('*** ALL DIGITS AFTER SORT() *** <br/>');
for (var i = 0; i < digits.length; i++) {
    document.write(`${digits[i]} `);
}

document.write('<br/>');

function compareLogic(a, b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
}

numbers2 = [1, 2, 3, 4, 5, 6];
document.write('*** ALL ITEMS ***<br/>');
for (var i = 0; i < numbers2.length; i++) {
    document.write(`${numbers2[i]} `);
}
document.write('<br/>');

var result = numbers2.filter(filterLogic1);

document.write('*** ALL ITEMS filter(filterLogic1) ***<br/>');
for (var i = 0; i < result.length; i++) {
    document.write(`${result[i]} `);
}
document.write('<br/>');

function filterLogic1(value, index, array) {
    if (value % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

numbers2 = [1, 4, 3, 2, 2, 4];
document.write('*** ALL ITEMS ***<br/>');
for (var i = 0; i < numbers2.length; i++) {
    document.write(`${numbers2[i]} `);
}
document.write('<br/>');
// unique items

result = numbers2.filter(uniqueLogic);
document.write('*** ALL ITEMS AFTER filter(uniqueLogic) ***<br/>');
for (var i = 0; i < result.length; i++) {
    document.write(`${result[i]} `);
}
document.write('<br/>');


// 1, 4, 3, 2, 2, 4
// 0, 1, 2, 3, 4, 5
// array.indexOf(4); => 1

function uniqueLogic(value, index, array) {
    var i = array.indexOf(value);

    if (isNaN(value)) {
        return false;
    }

    if (i == index) {
        return true;
    } else {
        return false;
    }
}

numbers2 = [1, 2, 3, 4, 5, 6];
document.write('*** ALL ITEMS ***<br/>');
for (var i = 0; i < numbers2.length; i++) {
    document.write(`${numbers2[i]} `);
}
document.write('<br/>');

result = numbers2.map(mapLogic);
document.write('*** ALL ITEMS AFTER map(mapLogic) ***<br/>');
for (var i = 0; i < result.length; i++) {
    document.write(`${result[i]} `);
}
document.write('<br/>');

function mapLogic(value, index, array) {
    return value * value;
}