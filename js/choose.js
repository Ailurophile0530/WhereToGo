var hobby = [];
var place = [];
var weather = [];
function Charge(obj, array, k) {
    if (obj.getAttribute('flag') == 'no') {
        obj.style.backgroundColor = '#ffebcd';
        obj.style.color = '#666';
        obj.setAttribute('flag', k);
        Insert(array, k);
    }
    else {
        obj.style.backgroundColor = '#6495ed';
        obj.style.color = '#ececec';
        Delete(array, k);
        obj.setAttribute('flag', 'no');
    }
    // console.log(array);
}
function Exclusive() {
    for (var i = 0; i < arguments.length; i++) {
        arguments[i].style.backgroundColor = '#6495ed';
        arguments[i].style.color = '#ececec';
        Delete(weather, arguments[i].getAttribute('flag'));
        arguments[i].setAttribute('flag', 'no');
    }
}
function Insert(array, k) {
    l = array.length;
    array[l] = k;
}
function Delete(array, k) {
    l = array.length;
    for (var i = 0; i < l; i++) {
        if (array[i] == k)
            break;
    }
    if (i != l) {
        for (var j = i; j < l - 1; j++) {
            array[j] = array[j + 1];
        }
        array.pop();
    }
}

var art = document.querySelector('.art');
var pe = document.querySelector('.pe');
var diy = document.querySelector('.diy');
var food = document.querySelector('.food');
var hang = document.querySelector('.hang');
var nature = document.querySelector('.nature');
var film = document.querySelector('.film');
var game = document.querySelector('.game');
var beauty = document.querySelector('.beauty');
var culture = document.querySelector('.culture');
art.onclick = function () {
    Charge(this, hobby, 1);
}
pe.onclick = function () {
    Charge(this, hobby, 2);
}
diy.onclick = function () {
    Charge(this, hobby, 3);
}
food.onclick = function () {
    Charge(this, hobby, 4);
}
hang.onclick = function () {
    Charge(this, hobby, 5);
}
nature.onclick = function () {
    Charge(this, hobby, 6);
}
film.onclick = function () {
    Charge(this, hobby, 7);
}
game.onclick = function () {
    Charge(this, hobby, 8);
}
beauty.onclick = function () {
    Charge(this, hobby, 9);
}
culture.onclick = function () {
    Charge(this, hobby, 10);
}

var indoor = document.querySelector('.indoor');
var outdoor = document.querySelector('.outdoor');
indoor.onclick = function () {
    Charge(this, place, 1);
}
outdoor.onclick = function () {
    Charge(this, place, 2);
}

var sun = document.querySelector('.sun');
var cloud = document.querySelector('.cloud');
var rain = document.querySelector('.rain');
var fog = document.querySelector('.fog');
sun.onclick = function () {
    Exclusive(sun, cloud, rain, fog);
    Charge(this, weather, 1);
}
cloud.onclick = function () {
    Exclusive(sun, cloud, rain, fog);
    Charge(this, weather, 2);
}
rain.onclick = function () {
    Exclusive(sun, cloud, rain, fog);
    Charge(this, weather, 3);
}
fog.onclick = function () {
    Exclusive(sun, cloud, rain, fog);
    Charge(this, weather, 4);
}


function Creat(N, H, P, Warray, S, E) {
    var obj = {
        name: N,
        hobby: H,
        place: P,
        weather: Warray,
        start: S,
        end: E,
        key: [0, 0, 0, 0]
    };
    return obj;
}
var events = [];
var A = Creat("室内游乐场", 5, 1, [1, 2, 3, 4], 10, 20);
Insert(events, A);
var B = Creat("顾村公园", 6, 2, [1, 2], 8, 17);
Insert(events, B);
var C = Creat("Omakase", 4, 1, [1, 2, 3, 4], 10, 22);
Insert(events, C);
var D = Creat("辰山植物园", 6, 2, [1, 2], 9, 17);
Insert(events, D);
var E = Creat("蛋糕DIY", 3, 1, [1, 2, 3, 4], 10, 22);
Insert(events, E);
var F = Creat("电影院", 7, 1, [1, 2, 3, 4], 0, 24);
Insert(events, F);
var G = Creat("欢乐谷", 5, 2, [1, 2], 10, 18);
Insert(events, G);
var H = Creat("上海博物馆", 10, 2, [1, 2], 9, 17);
Insert(events, H);
var I = Creat("上海天文馆", 10, 2, [1, 2], 9, 17);
Insert(events, I);
var J = Creat("美甲", 9, 1, [1, 2, 3, 4], 10, 22);
Insert(events, J);
var K = Creat("剧本杀", 8, 1, [1, 2, 3, 4], 10, 22);
Insert(events, K);
var L = Creat("校园跑", 2, 2, [1, 2], 6, 20);
Insert(events, L);
var M = Creat("上海当代艺术博物馆", 1, 1, [1, 2, 3, 4], 9, 17);
Insert(events, M);

var start = document.querySelector('.start');
var end = document.querySelector('.end');

if (localStorage.getItem('Results') != null) {
    localStorage.removeItem("Results");
}
var comfirm = document.querySelector('.comfirm');
comfirm.onclick = function () {
    var results = [];
    var L = events.length;
    for (var i = 0; i < L; i++) {
        var lh = hobby.length;
        var lp = place.length;
        var lw = events[i].weather.length;
        for (var k = 0; k < lh; k++) {
            if (hobby[k] == events[i].hobby) {
                events[i].key[0] = 1;
                break;
            }
        }
        for (var k = 0; k < lp; k++) {
            if (place[k] == events[i].place) {
                events[i].key[1] = 1;
                break;
            }
        }
        for (var k = 0; k < lw; k++) {
            if (weather[0] == events[i].weather[k]) {
                events[i].key[2] = 1;
                break;
            }
        }
        if (parseInt(start.value) >= parseInt(events[i].start) && parseInt(end.value) <= parseInt(events[i].end)) {
            console.log('111');
            events[i].key[3] = 1;
        }
        if (events[i].key[0] == 1 && events[i].key[1] == 1 && events[i].key[2] == 1 && events[i].key[3] == 1)
            Insert(results, [events[i].name, 1]);
        else
            Insert(results, [events[i].name, 0]);
        console.log(events[i].name);
        console.log(events[i].key);
    }
    localStorage.setItem("Results", results);
    window.open("result.html");
}
