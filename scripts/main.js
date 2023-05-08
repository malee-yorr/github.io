// JavaScript source code
// document.querySelector('html').onclick = function () {
  //  alert('Ouch! Stop poking me!');
//}
var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/beeer2.png') {
        myImage.setAttribute('src', 'images/beeer3.png');
    } else {
        myImage.setAttribute('src', 'images/beeer2.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1'); //кнопка

function setUserName() {
    var myName = prompt('Пожалуйста, введи свое имя.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Что тут происходит, ' + myName + '?';
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Что тут происходит, ' + storedName + '?';
}
myButton.onclick = function () {
    setUserName();
}