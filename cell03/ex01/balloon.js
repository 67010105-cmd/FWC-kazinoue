const balloon = document.getElementById('balloon');

let size = 200;
let colors = ['red', 'green', 'blue'];
let colorIndex = 0;

balloon.addEventListener('click', function() {
    size += 10;
    colorIndex++;

    if (colorIndex > 2) {
        colorIndex = 0;
    }

    if (size > 420) {
        size = 200;
        colorIndex = 0;
    }

    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
});

balloon.addEventListener('mouseleave', function() {
    if (size > 200) {
        size -= 5;
        colorIndex--;

        if (colorIndex < 0) {
            colorIndex = 2;
        }

        balloon.style.width = size + 'px';
        balloon.style.height = size + 'px';
        balloon.style.backgroundColor = colors[colorIndex];
    }
});