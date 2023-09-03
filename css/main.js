var x = document.getElementsByClassName("hello");
var y = document.getElementsByClassName("button");

function common() {
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
        y[i].style.border = "none";
        y[i].style.color = "black"
    }
}

function design() {
    common();
    document.getElementById("Design").style.display = "block";
    document.getElementById("design").style.borderBottom = "4px solid #4696ff";
    document.getElementById("design").style.color = "#4696ff";
}

function marketing() {
    common();
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    document.getElementById("Marketing").style.display = "block";
    document.getElementById("marketing").style.borderBottom = "4px solid #4696ff";
    document.getElementById("marketing").style.color = "#4696ff";
}

function finance() {
    common();
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    document.getElementById("Finance").style.display = "block";
    document.getElementById("finance").style.borderBottom = "4px solid #4696ff";
    document.getElementById("finance").style.color = "#4696ff";
}

function music() {
    common();
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    document.getElementById("Music").style.display = "block";
    document.getElementById("music").style.borderBottom = "4px solid #4696ff";
    document.getElementById("music").style.color = "#4696ff";
}