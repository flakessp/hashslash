let canvas = document.querySelector('canvas');

window.addEventListener('resize', setCanvasSize);
window.addEventListener('load', setCanvasSize);
window.addEventListener('load', draw);

function setCanvasSize(event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// создание изображения 
let img = document.createElement('img');
img.src = 'image.png';
let ctx = canvas.getContext('2d');


document.addEventListener('mousemove', (e) => {
    ctx.drawImage(img, e.pageX-300, e.pageY-200, 600, 400);
})