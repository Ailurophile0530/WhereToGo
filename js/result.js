const panels = document.querySelectorAll('.panel');
panels.forEach((item) => {
    item.addEventListener('click', () => {
        panels.forEach((item) => {
            item.classList.remove('active');
        })
        item.classList.add('active');
    });
});

var p1 = document.querySelector('.p1');
var h1 = document.querySelector('.p1 h3');
var p2 = document.querySelector('.p2');
var h2 = document.querySelector('.p2 h3');
var p3 = document.querySelector('.p3');
var h3 = document.querySelector('.p3 h3');
var p4 = document.querySelector('.p4');
var h4 = document.querySelector('.p4 h3');
var p5 = document.querySelector('.p5');
var h5 = document.querySelector('.p5 h3');
if (localStorage.getItem('Results') != null) {
    var results = localStorage.getItem('Results');
    var names = [];
    var RL = results.length;
    var i = 0, j = 0;
    while (i < RL) {
        while (results[i] != ',')
            i++;
        if (results[i + 1] == 1) {
            var NL = names.length;
            names[NL] = results[j];
            j++;
            for (; j < i; j++)
                names[NL] = names[NL] + results[j];
            console.log(names[NL]);
        }
        i = i + 3;
        j = i;
    }
    if (names.length < 5) {
        for (var i = names.length; i < 5; i++)
            names[i] = "敬请期待";
    }
    // console.log(names);
    p1.style.backgroundImage = "url('./upload/" + names[0] + ".jpg')";
    h1.innerText = names[0];
    p2.style.backgroundImage = "url('./upload/" + names[1] + ".jpg')";
    h2.innerText = names[1];
    p3.style.backgroundImage = "url('./upload/" + names[2] + ".jpg')";
    h3.innerText = names[2];
    p4.style.backgroundImage = "url('./upload/" + names[3] + ".jpg')";
    h4.innerText = names[3];
    p5.style.backgroundImage = "url('./upload/" + names[4] + ".jpg')";
    h5.innerText = names[4];
}