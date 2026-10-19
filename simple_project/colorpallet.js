const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
};

const first = document.getElementById("fchild");
const second = document.getElementById("secchild");
const third = document.getElementById("tchild");
const fourth = document.getElementById("fivchild");
const five = document.getElementById("schild");

const boxes = [first, second, third, fourth, five];

boxes.forEach(function(box) {
    const p = document.createElement("p");
    box.appendChild(p);
});

document.getElementById("genratepallete").addEventListener("click", function() {

    boxes.forEach(function(box) {
        const color = randomColor();

        box.style.backgroundColor = color;
        box.querySelector("p").textContent = color;
    });

});

   let parent  =  document.getElementById("parent");

    document.getElementById("bgcolor").addEventListener("click", function() {
       parent.style.backgroundColor = randomColor();
});