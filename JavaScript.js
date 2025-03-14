window.onload = function(){
    const button=document.getElementById("contactButton");
    button.onmouseover = function () {changeColorHover(button,'#9fab96','#536779')};
    button.onmouseout = function () {changeColorHover(button,'#A7B49E','#5C7285')};

    const option1=document.getElementsByClassName("option1")[0];
    option1.onmouseover = function () {changeColorHover(option1,'#9fab96','#536779')};
    option1.onmouseout = function () {changeColorHover(option1,'#A7B49E','#5C7285')};

    const option2=document.getElementsByClassName("option2")[0];
    option2.onmouseover = function () {changeColorHover(option2,'#9fab96','#536779')};
    option2.onmouseout = function () {changeColorHover(option2,'#A7B49E','#5C7285')};

    const option3=document.getElementsByClassName("option3")[0];
    option3.onmouseover = function () {changeColorHover(option3,'#9fab96','#536779')};
    option3.onmouseout = function () {changeColorHover(option3,'#A7B49E','#5C7285')};
}


function changeColorHover(elemento, colText, colBg) {
    elemento.style.color=colText;
    elemento.style.backgroundColor=colBg;
}