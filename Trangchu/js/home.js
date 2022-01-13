document.getElementById("btn-active").onclick = function() {
    document.getElementById("btn-blue").style.color = "#5f6368";
    document.getElementById("btn-blue").style.borderBottomColor = "white";
    document.getElementById("btn-green").style.color = "#5f6368";
    document.getElementById("btn-green").style.borderBottomColor = "white";
    document.getElementById("btn-active").style.color = "red";
    document.getElementById("btn-active").style.borderBottomColor = "red";
}
document.getElementById("btn-blue").onclick = function() {
    document.getElementById("btn-green").style.color = "#5f6368";
    document.getElementById("btn-green").style.borderBottomColor = "white"
    document.getElementById("btn-active").style.color = "#5f6368";
    document.getElementById("btn-active").style.borderBottomColor = "white";
    document.getElementById("btn-blue").style.color = "blue";
    document.getElementById("btn-blue").style.borderBottomColor = "blue";
}
document.getElementById("btn-green").onclick = function() {
    document.getElementById("btn-green").style.color = "green";
    document.getElementById("btn-green").style.borderBottomColor = "green";
    document.getElementById("btn-active").style.color = "#5f6368";
    document.getElementById("btn-active").style.borderBottomColor = "white";
    document.getElementById("btn-blue").style.color = "#5f6368";
    document.getElementById("btn-blue").style.borderBottomColor = "white";
}
document.getElementById("btn-more-app").onclick = function() {
    document.getElementById("btn-more-app").style.backgroundColor = "#3c404314";
    document.getElementById("apps").style.display = "block";
}
document.getElementById("btn-more-app").ondblclick = function() {
    document.getElementById("btn-more-app").style.backgroundColor = "white";
    document.getElementById("apps").style.display = "none";
}
