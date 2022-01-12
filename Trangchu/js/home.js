document.getElementById("btn-active").onclick = function() {
    document.getElementById("btn-blue").style.color = "#5f6368";
    document.getElementById("btn-green").style.color = "#5f6368";
    document.getElementById("btn-active").style.color = "red";
}
document.getElementById("btn-blue").onclick = function() {
    document.getElementById("btn-green").style.color = "#5f6368";
    document.getElementById("btn-active").style.color = "#5f6368";
    document.getElementById("btn-blue").style.color = "blue";
}
document.getElementById("btn-green").onclick = function() {
    document.getElementById("btn-green").style.color = "green";
    document.getElementById("btn-active").style.color = "#5f6368";
    document.getElementById("btn-blue").style.color = "#5f6368";
}
