

document.getElementById('tk').addEventListener("click", function () {
    var clickTK1 = document.getElementById("click-tk1");
    var clickTK2 = document.getElementById("click-tk2");
    if (clickTK1.style.display === "none" && clickTK2.style.display === "none") {
        clickTK1.style.display = "block";
        clickTK2.style.display = "block";
    }
    else {
        clickTK1.style.display = "none";
        clickTK2.style.display = "none";
    }
})

document.getElementById('btn1').addEventListener("click", function () {
    var innerText = document.getElementsByClassName("sidebar-title");
    for (var i = 0; i < innerText.length; i++) {
        if (innerText[i].style.display === "none") {
            innerText[i].style.display = "block";

            document.getElementById('sidebar').style.width="240px";
            document.getElementById('content').style.marginLeft="240px";
        }
        else{
            innerText[i].style.display = "none";
            document.getElementById('sidebar').style.width="73px";
            document.getElementById('content').style.marginLeft="73px";
        }
    }
})
document.getElementById('sidebar').addEventListener("click",function(){
    var innerText = document.getElementsByClassName("sidebar-title");
    for (var i = 0; i < innerText.length; i++) {
        innerText[i].style.display = "block";
        document.getElementById('sidebar').style.width="240px";
        document.getElementById('content').style.marginLeft="240px"
    }
})

document.getElementById('tb').addEventListener("click",function(){
    var content = document.getElementsByClassName("content");
    for (var i = 0 ; i < content.length;i++){
        content[i].style.display="none";
        content[1].style.display="block";
    }
})

document.getElementById('tq').addEventListener("click",function(){
    var content = document.getElementsByClassName("content");
    for (var i = 0 ; i < content.length;i++){
        content[i].style.display="none";
        content[0].style.display="block";
    }
})