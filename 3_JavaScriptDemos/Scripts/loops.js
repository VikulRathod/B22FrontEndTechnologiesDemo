// while loop

//var i = 1;
//while (i <= 5) {
//    document.write(`${i} `);
//    //console.log(i);
//    i++;
//}

// do-while loop

//var i = 1;
//do {
//    document.write(`${i} `);
//    i++;
//} while (i <= 10);

// for loop

//for (var i = 1; i <= 5; i++) {
//    document.write(`${i} `);
//}

document.write('<br/>');

//for (var i = 1; i <= 10; i++) {
//    if (i == 3) {
//        break;
//    }
//    document.write(`${i} `);
//}
//document.write('<br/>');
//document.write('loop executed successfully.');

for (var i = 1; i <= 10; i++) {
    if (i == 3) {
        continue;
    }
    document.write(`${i} `);
}
document.write('<br/>');
document.write('loop executed successfully.');