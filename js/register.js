var eye = document.getElementsByClassName('eye');
var pwd = document.getElementsByClassName('pwd');
var test = document.querySelector('.test');
var ph = document.querySelector('.phone');
var nt = document.querySelector('.note');
var checkCode;
var charge = document.getElementsByClassName('charge');
var charge_icon = document.getElementsByClassName('charge_icon');
var btnNT = document.querySelector('.btnNT');
var btnRG = document.querySelector('.btnRG');
var agreebox = document.querySelector('.agree_box');
var Li = document.getElementsByTagName('li');
var TX = document.querySelector('.Text');
var TL = document.querySelector('.Title');
var tips = document.createElement('span');
var Go = document.querySelector('.go');
var OnlyR = document.getElementsByClassName('onlyR');
var inp0 = document.getElementsByClassName('inp0');
// 2. 注册事件 处理程序

function Code() {
    var R = document.querySelector('.ruo');
    var Z = document.querySelector('.zhong');
    var Q = document.querySelector('.qiang');
    R.style.backgroundColor = 'rgba(64, 184, 63, 0.5)';
    Z.style.backgroundColor = 'rgba(247, 145, 0, 0.5)';
    Q.style.backgroundColor = 'rgba(222, 17, 17, 0.5)';

    if (pwd[0].value == '') {
        test.className = 'test';
        test.innerHTML = '请输入6~16位密码';
        btnRG.setAttribute('able1', '0');
    }
    else if (pwd[0].value.length < 6) {
        test.className = 'test error';
        test.innerHTML = '密码最短支持6个字符';
        btnRG.setAttribute('able1', '0');
    }
    else if (pwd[0].value.length > 16) {
        test.className = 'test error';
        test.innerHTML = '密码最长支持16个字符';
        btnRG.setAttribute('able1', '0');
    }
    else {
        var R = document.querySelector('.ruo');
        var Z = document.querySelector('.zhong');
        var Q = document.querySelector('.qiang');
        if (pwd[0].value.length >= 6 && pwd[0].value.length <= 9) {
            R.style.backgroundColor = 'rgba(64, 184, 63)';
            Z.style.backgroundColor = 'rgba(247, 145, 0, 0.5)';
            Q.style.backgroundColor = 'rgba(222, 17, 17, 0.5)';
        }
        else if (pwd[0].value.length >= 10 && pwd[0].value.length <= 12) {
            R.style.backgroundColor = 'rgba(64, 184, 63, 0.5)';
            Z.style.backgroundColor = 'rgba(247, 145, 0)';
            Q.style.backgroundColor = 'rgba(222, 17, 17, 0.5)';
        }
        else {
            R.style.backgroundColor = 'rgba(64, 184, 63, 0.5)';
            Z.style.backgroundColor = 'rgba(247, 145, 0, 0.5)';
            Q.style.backgroundColor = 'rgba(222, 17, 17)';
        }
        test.className = 'test success';
        test.innerHTML = '密码长度适中';
        btnRG.setAttribute('able1', '1');
    }

    if (pwd[0].value == pwd[1].value && pwd[1].value != '') {
        charge[1].innerHTML = '两次密码输入内容相同';
        charge_icon[1].className = 'success_icon charge_icon';
        charge[1].className = 'success charge';
        btnRG.setAttribute('able2', '1');
    }
    else if (pwd[1].value == '') {
        charge[1].innerHTML = '';
        charge_icon[1].className = 'charge_icon';
        charge[1].className = 'charge';
        btnRG.setAttribute('able2', '0');
    }
    else {
        charge[1].innerHTML = '两次密码输入内容不同';
        charge_icon[1].className = 'error_icon charge_icon';
        charge[1].className = 'error charge';
        btnRG.setAttribute('able2', '0');
    }
}
pwd[0].onblur = Code;
pwd[1].onblur = Code;

tips.onclick = function () {
    if (btnRG.getAttribute('flag') == 1) {
        Li[1].style.margin = '40px 0px';
        Li[1].style.display = 'block';
        Li[2].style.display = 'none';
        OnlyR[0].style.display = 'none';
        OnlyR[1].style.display = 'none';
        OnlyR[2].style.display = 'none';
        OnlyR[3].style.display = 'none';
        btnRG.setAttribute('flag', '2');
        tips.innerHTML = '使用密码登录';
    }
    else if (btnRG.getAttribute('flag') == 2) {
        Li[1].style.display = 'none';
        Li[2].style.margin = '40px 0px';
        Li[2].style.display = 'block';
        OnlyR[0].style.display = 'none';
        OnlyR[1].style.display = 'none';
        OnlyR[4].style.display = 'none';
        OnlyR[5].style.display = 'none';
        OnlyR[7].style.display = 'none';
        OnlyR[6].style.display = 'none';
        btnRG.setAttribute('flag', '1');
        tips.innerHTML = '忘记密码，使用短信验证码登录';
    }
}

eye[0].onclick = function () {
    // 点击一次之后， flag 一定要变化
    if (eye[0].getAttribute('flag') == 0) {
        pwd[0].type = 'text';
        pwd[1].type = 'text';
        eye[0].src = 'images/open.png';
        eye[0].setAttribute('flag', '1'); // 赋值操作
    } else {
        pwd[0].type = 'password';
        pwd[1].type = 'password';
        eye[0].src = 'images/close.png';
        eye[0].setAttribute('flag', '0');
    }
}

btnNT.onclick = function () {
    checkCode = (Math.random()) * 900000 + 100000;
    checkCode = parseInt(checkCode);
    alert(checkCode);
}

function Login() {
    Li[0].style.margin = '60px 0px';
    Li[1].style.display = 'none';
    Li[2].style.margin = '40px 0px';
    Li[3].style.display = 'none';
    Li[4].style.display = 'none';
    Li[5].style.display = 'none';
    Li[6].style.margin = '70px -20px';
    OnlyR[0].style.display = 'none';
    OnlyR[1].style.display = 'none';
    OnlyR[4].style.display = 'none';
    OnlyR[5].style.display = 'none';
    TL.innerText = '用户登录';
    TX.innerText = '我没有账号，去注册';
    btnRG.innerHTML = '完成登录';
    Go.appendChild(tips);
    test.style.display = 'none';
    tips.innerHTML = '忘记密码，使用短信验证码登录';
    tips.style.textDecoration = 'underline';
    tips.className = 'error';
    btnRG.setAttribute('flag', '1');
    ph.innerText = ' ';
    pwd[0].innerText = ' ';
    pwd[1].innerText = ' ';
    nt.innerText = ' ';
}

TX.onclick = function () {
    if (btnRG.getAttribute('flag') == 0) {
        Login();
        console.log('0');
    }
    else if (btnRG.getAttribute('flag') == 1 || btnRG.getAttribute('flag') == 2) {
        btnRG.setAttribute('flag', '0');
        location.reload(true);
        console.log('1');
    }
}

nt.onblur = function () {
    if (checkCode == this.value) {
        charge[0].innerHTML = '短信验证码输入正确';
        charge_icon[0].className = 'success_icon charge_icon';
        charge[0].className = 'success charge';
        btnNT.style.display = 'none';
        btnRG.setAttribute('able3', '1');
    }
    else if (this.value == '') {
        charge[0].innerHTML = '';
        charge_icon[0].className = 'charge_icon';
        charge[0].className = 'charge';
        btnNT.style.display = 'inline-block';
        btnRG.setAttribute('able3', '0');
    }
    else {
        charge[0].innerHTML = '短信验证码输入错误';
        charge_icon[0].className = 'error_icon charge_icon';
        charge[0].className = 'error charge';
        btnNT.style.display = 'none';
        btnRG.setAttribute('able3', '0');
    }
}

btnRG.onclick = function () {
    var Num = parseInt(localStorage.getItem('Num')) + 1;
    if (this.getAttribute('flag') == 0) {
        if (ph.value != '' && agreebox.checked == true) {
            if (btnRG.getAttribute('able1') == '1' && btnRG.getAttribute('able2') == '1' && btnRG.getAttribute('able3') == '1') {
                if (localStorage.getItem('Num') == null) {
                    localStorage.setItem('Num', 1);
                }
                else {
                    localStorage.setItem('Num', Num);
                }
                Num = parseInt(localStorage.getItem('Num'));
                var BMI = parseFloat(inp0[4].value) / parseFloat(inp0[3].value) * 100 / parseFloat(inp0[3].value) * 100;
                BMI = BMI.toFixed(2);
                localStorage.setItem(Num, ph.value);
                localStorage.setItem(ph.value, pwd[0].value);
                localStorage.setItem("name" + ph.value, inp0[0].value);
                localStorage.setItem("sex" + ph.value, inp0[1].value);
                localStorage.setItem("grade" + ph.value, inp0[2].value);
                localStorage.setItem("height" + ph.value, inp0[3].value);
                localStorage.setItem("weight" + ph.value, inp0[4].value);
                localStorage.setItem("BMI" + ph.value, BMI);
                alert("成功创建对象" + Num);
                Login();
            }
        }
    }
    else if (this.getAttribute('flag') == 1) {
        for (var i = 1; i < Num; i++) {
            if (ph.value == localStorage.getItem(i)) {
                if (pwd[0].value == localStorage.getItem(ph.value))
                    break;
            }
        }
        if (i != Num) {
            alert("成功登录账户" + ph.value);
            localStorage.setItem("Now", ph.value);
            window.open("person.html");
        }
        else
            alert("登录账户失败");
    }
    else if (this.getAttribute('flag') == 2) {
        if (checkCode == nt.value) {
            for (var i = 1; i < Num; i++) {
                if (ph.value == localStorage.getItem(i)) {
                    break;
                }
            }
            if (i != Num)
            {
                alert("成功登录账户" + ph.value);
                localStorage.setItem("Now", ph.value);
                window.open("person.html");
            }
            else
                alert("登录账户失败");
        }
    }
}