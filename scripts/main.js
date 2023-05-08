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
var myHeading = document.querySelector('h1'); //������

function setUserName() {
    var myName = prompt('����������, ����� ���� ���.');
    localStorage.setItem('name', myName);
    myHeading.textContent = '��� ��� ����������, ' + myName + '?';
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = '��� ��� ����������, ' + storedName + '?';
}
myButton.onclick = function () {
    setUserName();
}