

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
            document.getElementById('sidebar').style.width = "240px";
        }
        else {
            innerText[i].style.display = "none";
            document.getElementById('sidebar').style.width = "73px";
        }
    }
    var marginLeft = document.getElementsByClassName("content");
    for (var i = 0; i < marginLeft.length; i++) {
        if (innerText[i].style.display === "block") {
            marginLeft[i].style.marginLeft = "240px";
        }
        else {
            marginLeft[i].style.marginLeft = "73px";
        }
    }
})
document.getElementById('sidebar').addEventListener("click", function () {
    var innerText = document.getElementsByClassName("sidebar-title");
    for (var i = 0; i < innerText.length; i++) {
        innerText[i].style.display = "block";
        document.getElementById('sidebar').style.width = "240px";
    }
    var marginLeft = document.getElementsByClassName('content')
    for (var i = 0; i < marginLeft.length; i++) {
        marginLeft[i].style.marginLeft = "240px";
    }
})

document.getElementById('tb').addEventListener("click", function () {
    var content = document.getElementsByClassName("content");
    for (var i = 0; i < content.length; i++) {
        content[i].style.display = "none";
        content[1].style.display = "block";
    }
})

document.getElementById('tq').addEventListener("click", function () {
    var content = document.getElementsByClassName("content");
    for (var i = 0; i < content.length; i++) {
        content[i].style.display = "none";
        content[0].style.display = "block";
    }
})

document.getElementById('ph').addEventListener("click", function () {
    var content = document.getElementsByClassName("content");
    for (var i = 0; i < content.length; i++) {
        content[i].style.display = "none";
        content[2].style.display = "block";
    }
})

document.getElementById('all').addEventListener("click", function () {
    var content = document.getElementsByClassName("content");
    for (var i = 0; i < content.length; i++) {
        content[i].style.display = "none";
        content[3].style.display = "block";
    }
})

document.getElementById('click-tk1').addEventListener("click", function () {
    var content = document.getElementsByClassName("content");
    for (var i = 0; i < content.length; i++) {
        content[i].style.display = "none";
        content[4].style.display = "block";
    }
})

document.getElementById('bd').addEventListener("click", function () {
    var content = document.getElementsByClassName("content");
    for (var i = 0; i < content.length; i++) {
        content[i].style.display = "none";
        content[5].style.display = "block";
    }
})

document.getElementById('st').addEventListener("click", function () {
    document.getElementById('editer-1').style.display = "block";
})

document.getElementById('btn-x').addEventListener("click", function () {
    document.getElementById('editer-1').style.display = "none";
})

document.getElementById('nv').addEventListener("click", function () {
    var content = document.getElementsByClassName("content");
    for (var i = 0; i < content.length; i++) {
        content[i].style.display = "none";
        content[6].style.display = "block";
    }
})

// Biểu đồ doanh thu năm

const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',];

const data = {
    labels: labels,
    datasets: [{
        label: 'Đơn vị Nghìn Đô',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [100, 300, 200, 400, 600, 500, 700, 900, 800, 1000, 2000],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// So sánh các năm



  const labels1 = ['2016','2017','2018','2019','2021','2021']
const data1 = {
  labels: labels1,
  datasets: [{
    label: 'Đơn vị Nghìn Đô',
    data: [100, 300, 200, 400, 600, 500, 700, 900, 800, 1000, 2000],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const config1 = {
    type: 'bar',
    data: data1,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
var Element1 = document.getElementById('myChart1');
const myChart1 = new Chart(
    Element1,
    config1
);