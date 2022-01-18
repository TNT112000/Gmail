var btn_app = document.getElementById("btn-more-app");
var apps = document.getElementById("apps");

btn_app.onclick = function() {
    btn_app.style.backgroundColor = "#3c404314";
    apps.style.display = "block";
}
btn_app.ondblclick = function() {
    btn_app.style.backgroundColor = "white";
    apps.style.display = "none";
}

var btn_tick = document.getElementById("btn-tick");
var tick_mail = document.getElementById("tick-mail");

btn_tick.onclick = function() {
    btn_tick.style.backgroundColor = "#3c404314";
    tick_mail.style.display = "block";
}
btn_tick.ondblclick = function() {
    btn_tick.style.backgroundColor = "white";
    tick_mail.style.display = "none";
}
var btn1 = document.getElementById("btn-active");
var btn2 = document.getElementById("btn-blue");
var btn3 = document.getElementById("btn-green");
var cnt = document.getElementById("content");
var cntw = document.getElementById("content-two");
var cntt = document.getElementById("content-three");
var lmt = document.getElementById("list-menu-text");

btn1.onclick = function() {
    btn2.style.color = "#5f6368";
    btn2.style.borderBottomColor = "white";
    btn3.style.color = "#5f6368";
    btn3.style.borderBottomColor = "white";
    btn1.style.color = "red";
    btn1.style.borderBottomColor = "red";
    cntw.style.display = "none";
    cntt.style.display = "none";
    cnt.style.display = "block";
    lmt.innerHTML= "1-50 trong số 1000";
}
btn2.onclick = function() {
    btn3.style.color = "#5f6368";
    btn3.style.borderBottomColor = "white"
    btn1.style.color = "#5f6368";
    btn1.style.borderBottomColor = "white";
    btn2.style.color = "blue";
    btn2.style.borderBottomColor = "blue";
    cntw.style.display = "block";
    cntt.style.display = "none";
    cnt.style.display = "none";
    lmt.innerHTML= "1-50 trong số 2000";
}
btn3.onclick = function() {
    btn3.style.color = "green";
    btn3.style.borderBottomColor = "green";
    btn1.style.color = "#5f6368";
    btn1.style.borderBottomColor = "white";
    btn2.style.color = "#5f6368";
    btn2.style.borderBottomColor = "white";
    cntw.style.display = "none";
    cntt.style.display = "block";
    cnt.style.display = "none";
    lmt.innerHTML= "1-50 trong số 3000";
}

var create = document.getElementById("create-email");
var form = document.getElementById("email-form");
var close_form = document.getElementById("close");

create.onclick = function() {
    form.style.display = "block";
}
close_form.onclick = function() {
    form.style.display = "none";
}
