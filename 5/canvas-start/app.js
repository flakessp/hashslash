let canvas = document.querySelector('canvas');

window.addEventListener('resize', setCanvasSize);
window.addEventListener('load', setCanvasSize);

function setCanvasSize(event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
