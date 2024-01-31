function redirectPage() {
    // window.open();
    window.open('http://www.google.com');
}

function redirectAnotherPage() {
    // window.open('getsetcontent.html');
    // window.open('getsetcontent.html', '_self');
    // window.open('getsetcontent.html', 'mywindow');
    // window.open('getsetcontent.html', 'mywindow','height:200px,width:200px;');
    // window.open('getsetcontent.html', 'mywindow', 'height:200px,width:200px;', true);

    // code to execute before redirection
    alert('you will be redirected to new page');

    window.open('getsetcontent.html', 'mywindow');
}

function closePageWindow() {
    window.close('mywindow');
}