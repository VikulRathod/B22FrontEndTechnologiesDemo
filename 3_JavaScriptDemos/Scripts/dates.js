var today = new Date();

document.write(`Current Datetime : ${today} <br/>`);

var date = today.getDate();
document.write(`getDate() : ${date} <br/>`);

var month = today.getMonth(); // it returns index number of month
document.write(`getMonth() : ${month} Month Numbers : ${month + 1} <br/>`);

// month name
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

document.write(` Month Name : ${months[month]} <br/>`);

var year = today.getFullYear();
document.write(`getFullYear() : ${year} <br/>`);

var day = today.getDay();
document.write(`getDay() : ${day} <br/>`);

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
document.write(`Day Name : ${days[day]} <br/>`);

// 25/01/2024
document.write(`Date : ${date}/${month + 1}/${year} <br/>`);
document.write(`Date : ${date}-${months[month]}-${year} <br/>`);

function formatDate(input) {
    var d = input.getDate();
    var m = input.getMonth() + 1;
    var y = input.getFullYear();

    if (d < 10) {
        d = '0' + d;
    }
    if (m < 10) {
        m = '0' + m;
    }

    return `${d}/${m}/${y}`;
}

var result = formatDate(today);
document.write(`Formated date : ${result} <br/>`);

var dob = new Date('09/16/1990'); // parsing string to date
document.write(`Date of Birth : ${dob} <br/>`);

if (today > dob) {
    document.write(`${formatDate(today)} is greater than ${formatDate(dob)} <br/>`);
}