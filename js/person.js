var btn = document.querySelector('button');
btn.onclick = function () {
    localStorage.clear();
}

var TX = document.querySelector('.Text');
TX.onclick = function () {
    window.open("choose.html");
}

var portrait = document.querySelector('.portrait');
if (localStorage.getItem('sex' + localStorage.getItem('Now')) == "女") {
    portrait.src = './upload/girl.png';
}
else {
    portrait.src = './upload/boy.png';
}

var IDname = document.querySelector('.IDname');
IDname.innerHTML = "ID：" + localStorage.getItem('name' + localStorage.getItem('Now'));

var sex = document.querySelector('.sex');
sex.innerHTML = "性别：" + localStorage.getItem('sex' + localStorage.getItem('Now'));

var grade = document.querySelector('.grade');
grade.innerHTML = "年级：" + localStorage.getItem('grade' + localStorage.getItem('Now'));

var height = document.querySelector('.height');
height.innerHTML = "身高：" + localStorage.getItem('height' + localStorage.getItem('Now'))+"cm";

var weight = document.querySelector('.weight');
weight.innerHTML = "体重：" + localStorage.getItem('weight' + localStorage.getItem('Now'))+"kg";

var BMI = document.querySelector('.BMI');
BMI.innerHTML = "BMI：" + localStorage.getItem('BMI' + localStorage.getItem('Now'));

var histor = document.querySelector('.history');
var collect = document.querySelector('.collect');
var setting = document.querySelector('.setting');
histor.onmouseover = function () {
    histor.style.backgroundColor = '#ffebcd';
    histor.style.color = '#666';
}
histor.onmouseout = function () {
    histor.style.backgroundColor = '#6495ed';
    histor.style.color = '#ececec';
}
collect.onmouseover = function () {
    collect.style.backgroundColor = '#ffebcd';
    collect.style.color = '#666';
}
collect.onmouseout = function () {
    collect.style.backgroundColor = '#6495ed';
    collect.style.color = '#ececec';
}
setting.onmouseover = function () {
    setting.style.backgroundColor = '#ffebcd';
    setting.style.color = '#666';
}
setting.onmouseout = function () {
    setting.style.backgroundColor = '#6495ed';
    setting.style.color = '#ececec';
}



