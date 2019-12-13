const canvasTag = document.querySelector('canvas')

canvasTag.width = window.innerWidth
canvasTag.height = window.innerHeight

const context = canvasTag.getContext('2d')

let aimX = null,
    aimY = null,
    currentX = null,
    currentY = null;

let i = 0
// get these from api? 
const images = ['img.jpg', 'img2.jpg'].map( src => {
    const image = document.createElement('img')
    image.src = src
    return image
})

document.addEventListener('mousemove', event => {
    aimX = event.pageX
    aimY = event.pageY

    if (currentX == null) {
        currentX = event.pageX
        currentY = event.pageY
    }
})

canvasTag.addEventListener('click', () => {
    i++;
    if (i >= images.length ){
        i = 0;
    }
})

const draw = () => {
    if (currentX) {
        context.drawImage(images[i], currentX-images[i].width*0.5/2, currentY-images[i].height*0.5/2, images[i].width*0.5, images[i].height*0.5)
    }
    currentX = currentX + (aimX - currentX) * 0.1
    currentY = currentY + (aimY - currentY) * 0.1
    requestAnimationFrame(draw)
}

draw()
