let canvas      = document.querySelector('canvas'),
    i           = 0,
    aimX        = null,
    aimY        = null,
    currentX    = null,
    currentY    = null,
    speed       = 0.01,
    images      = null,

    ctx = canvas.getContext('2d');

window.addEventListener('resize', setCanvasSize);
window.addEventListener('load', setCanvasSize);

function setCanvasSize(event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


fetch('https://test-7f93b.firebaseio.com/images.json')
    .then(response => response.json())
    .then(result => {
        images = result.map( src => {
            let img = document.createElement('img');
            img.src = src;
            return img;
        });
        draw();
    })

window.addEventListener('resize', setCanvasSize);
window.addEventListener('load', setCanvasSize);

canvas.addEventListener('click', () => {
    i++;
    if ( i == images.length ) {
        i = 0;
    }
})

function draw() {
    // попробуйте поменять размер 
    if (currentX) {
        ctx.drawImage(img, currentX-img.width/4, currentY-img.height/4, img.width/2, img.height/2);
    }
    currentX = currentX + (aimX - currentX) * speed;
    currentY = currentY + (aimY - currentY) * speed;
    img = images[i];
    requestAnimationFrame(draw);
}