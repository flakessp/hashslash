let canvas = document.querySelector('canvas');

window.addEventListener('resize', setCanvasSize);
window.addEventListener('load', setCanvasSize);

function setCanvasSize(event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

let ctx = canvas.getContext('2d');
let i = 0;

// массив с картинками
let images = ['image.png', 'rose.png'].map( src => {
    // создание изображения 
    let img = document.createElement('img');
    img.src = src;
    return img;
})

document.addEventListener('mousemove', (e) => {
    img = images[i];
    ctx.drawImage(img, e.pageX-img.width/4, e.pageY-img.height/4, img.width/2, img.height/2);
})

canvas.addEventListener('click', () => {
    i++;
    if ( i == images.length ) {
        i = 0;
    }
})