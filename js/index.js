var LogRe = document.querySelector('.LogRe');
LogRe.onclick = function () {
    window.open("register.html");
}

var person = document.querySelector('.person');
var outside = document.querySelector('.outside');
var inside = document.querySelector('.inside');
var comphs = document.querySelector('.comphs');
var gather = document.querySelector('.gather');
person.onmouseover = function () {
    person.style.backgroundColor = '#ffebcd';
    person.style.color = '#666';
}
person.onmouseout = function () {
    person.style.backgroundColor = '#6495ed';
    person.style.color = '#ececec';
}
person.onclick = function () {
    if (localStorage.getItem('Now') == null)
        window.open("register.html");
    else
        window.open("person.html");
}
outside.onmouseover = function () {
    outside.style.backgroundColor = '#ffebcd';
    outside.style.color = '#666';
}
outside.onmouseout = function () {
    outside.style.backgroundColor = '#6495ed';
    outside.style.color = '#ececec';
}
outside.onclick = function () {
    if (localStorage.getItem('Now') == null)
        window.open("register.html");
    else {
        localStorage.setItem("Type", 1);
        window.open("choose.html");
    }
}
inside.onmouseover = function () {
    inside.style.backgroundColor = '#ffebcd';
    inside.style.color = '#666';
}
inside.onmouseout = function () {
    inside.style.backgroundColor = '#6495ed';
    inside.style.color = '#ececec';
}
inside.onclick = function () {
    if (localStorage.getItem('Now') == null)
        window.open("register.html");
    else {
        localStorage.setItem("Type", 2);
        window.open("choose.html");
    }
}
comphs.onmouseover = function () {
    comphs.style.backgroundColor = '#ffebcd';
    comphs.style.color = '#666';
}
comphs.onmouseout = function () {
    comphs.style.backgroundColor = '#6495ed';
    comphs.style.color = '#ececec';
}
comphs.onclick = function () {
    if (localStorage.getItem('Now') == null)
        window.open("register.html");
    else {
        localStorage.setItem("Type", 3);
        window.open("choose.html");
    }
}
gather.onmouseover = function () {
    gather.style.backgroundColor = '#ffebcd';
    gather.style.color = '#666';
}
gather.onmouseout = function () {
    gather.style.backgroundColor = '#6495ed';
    gather.style.color = '#ececec';
}
gather.onclick = function () {
    window.open("gather.html");
}

var ArrowL = document.querySelector('.arrow_l');
var ArrowR = document.querySelector('.arrow_r');
var Turns = document.querySelector('.turns');
var UL1 = document.querySelector('.UL1');
var UL2 = document.querySelector('.UL2');
var OL = document.querySelector('.circle');
var circle = document.querySelectorAll('ol li');
Turns.onmouseover = function () {
    ArrowL.style.display = 'block';
    ArrowR.style.display = 'block';
}
Turns.onmouseout = function () {
    ArrowL.style.display = 'none';
    ArrowR.style.display = 'none';
}
var num = 0;
setTimeout(function () {
    num++;
    animate(UL1, num * 600, -num);
}, 1000);
circle[0].onclick = function () {
    num = parseInt(num);
    if (0 > num)
        animate(UL1, 0 * 600, -10);
    else
        animate(UL1, 0 * 600, 0);
    num = 0;
}
circle[1].onclick = function () {
    num = parseInt(num);
    if (1 > num)
        animate(UL1, 1 * 600, -1);
    else
        animate(UL1, 1 * 600, 1);
    num = 1;
}
circle[2].onclick = function () {
    num = parseInt(num);;
    if (2 > num)
        animate(UL1, 2 * 600, -2);
    else
        animate(UL1, 2 * 600, 2);
    num = 2;
}
circle[3].onclick = function () {
    num = parseInt(num);
    if (3 > num)
        animate(UL1, 3 * 600, -3);
    else
        animate(UL1, 3 * 600, 3);
    num = 3;
}


function animate(obj, target, n) {
    clearInterval(obj.timer);
    obj.timer = setInterval(
        function () {
            var step;
            if (n < 0)
                step = -Math.ceil((target + obj.offsetLeft) / 18);
            else
                step = -Math.floor((target + obj.offsetLeft) / 18);
            if (obj.offsetLeft >= target)
                clearInterval(obj.timer);
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 30
    );
    Circle(n);

    if (num < 3) {
        setTimeout(function () {
            num++;

            clearInterval(obj.timer);
            animate(obj, num * 600, -num);
        }, 3000);
    }
    if (num == 3) {
        setTimeout(function () {
            num = 0;
            clearInterval(obj.timer);
            animate(obj, 0 * 600, 0);
        }, 3000);
    }
}
function Circle(N) {
    for (var i = 0; i < OL.children.length; i++) {
        OL.children[i].className = '';
    }
    if (N < 0) {
        if (N == -10)
            N = 0;
        else
            N = -N;
    }
    OL.children[N].className = 'current';
}