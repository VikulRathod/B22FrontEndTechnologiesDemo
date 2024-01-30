function getContent() {
    var txt1 = document.getElementById('txt1').value;
    console.log(txt1);

    var p1 = document.getElementById('p1').innerText;
    console.log(p1);

    var div1 = document.getElementById('div1').innerText;
    console.log(div1);

    div1 = document.getElementById('div1').innerHTML;
    console.log(div1);
}

function setContent() {
    document.getElementById('txt2').value = 'vihaan';
    document.getElementById('p2').innerText = 'Second Paragraph';
    document.getElementById('div2').innerHTML =
        "<a href='http://www.google.com'>Visit Google</a>";
}

function pwdShowHide() {
    document.getElementById('a1').setAttribute('href', 'http://www.google.com');

    var checkbox = document.getElementById('chkshowhide');
    var pwd = document.getElementById('password');

    if (checkbox.checked) {
        pwd.setAttribute('type', 'text');
    } else {
        pwd.setAttribute('type', 'password');
    }
}

function changeParaStyle() {
    //var para = document.getElementsByTagName('p');
    //para[1].style.backgroundColor = 'yellow';

    var para = document.getElementsByName('second');
    para[0].style.backgroundColor = 'yellow';
}