var imagesPath = ['Images/1.jpg', 'Images/2.png', 'Images/3.jpg'];
var index = 0;

function setImage() {
    changeImage();
   intervalId = setInterval(changeImage, 3000);
}

function changeImage() {
    document.getElementById('poster').src = imagesPath[index];
    index++;
    if (index == imagesPath.length) {
        index = 0;
    }
}

function stopSlideShow() {
    clearInterval(intervalId);
}