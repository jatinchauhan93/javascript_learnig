// Generate random color

const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
};

let intervalid;

const satrtChangingColor = function() {
    if (!intervalid) {
        intervalid = setInterval(changeBGColor, 1000);
    }

    function changeBGColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function() {
    clearInterval(intervalid);
    intervalid = null;
};

document.querySelector('#start').addEventListener('click', satrtChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

// simple description of project is  change the color backgroundColor of the web fter each second with start button and stop with stop button 