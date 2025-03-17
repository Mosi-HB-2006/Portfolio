window.onload = function () {
    const button = document.getElementById("contactButton");
    button.onmouseover = function () { changeColorHoverInto(button) };
    button.onmouseout = function () { changeColorHoverOut(button) };

    const option1 = document.getElementsByClassName("option1")[0];
    option1.onmouseover = function () { changeColorHoverInto(option1) };
    option1.onmouseout = function () { changeColorHoverOut(option1) };

    const option2 = document.getElementsByClassName("option2")[0];
    option2.onmouseover = function () { changeColorHoverInto(option2) };
    option2.onmouseout = function () { changeColorHoverOut(option2) };

    const option3 = document.getElementsByClassName("option3")[0];
    option3.onmouseover = function () { changeColorHoverInto(option3) };
    option3.onmouseout = function () { changeColorHoverOut(option3) };
}

function changeColorHoverInto(element) {
    element.style.color = '#9fab96';
    element.style.backgroundColor = '#536779';
    zoomIn(element);
}

function changeColorHoverOut(element) {
    element.style.color = '#A7B49E';
    element.style.backgroundColor = '#5C7285';
    zoomOut(element);
}

let isZooming = false;
let originalFontSize = null;
let id = null;

function zoomIn(element) {
    if (!isZooming) {
        isZooming = true;
        if (!originalFontSize) {
            originalFontSize = Math.ceil((parseInt(window.getComputedStyle(element).fontSize) / window.innerWidth) * 100);
        }
        let size = originalFontSize;
        const sizeMax = originalFontSize + 0.7;
        clearInterval(id);
        id = setInterval(frame, 5);

        function frame() {
            if (size >= sizeMax) {
                clearInterval(id);
                isZooming = false;
            } else {
                size += 0.1;
                element.style.fontSize = size + 'vw';
            }
        }
    }
}

function zoomOut(element) {
    if (!isZooming) {
        isZooming = true;
        let size = (parseInt(window.getComputedStyle(element).fontSize) / window.innerWidth) * 100;
        const sizeMin = originalFontSize;
        clearInterval(id);
        id = setInterval(frame, 5);

        function frame() {
            if (size <= sizeMin) {
                clearInterval(id);
                isZooming = false;
            } else {
                size -= 0.1;
                element.style.fontSize = size + 'vw';
            }
        }
    }
}