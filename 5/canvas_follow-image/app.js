const canvasTag = document.querySelector('canvas')

canvasTag.width = window.innerWidth
canvasTag.height = window.innerHeight

const context = canvasTag.getContext('2d')

const image = document.createElement('img')
image.src = 'img.jpg'

let i = 0

// get these from api? 
const images = ['img.jpg', 'img2.jpg'].map( src => {
    const image = document.createElement('img')
    image.src = src
    return image
})

document.addEventListener('mousemove', event => {
    context.drawImage(images[i], event.pageX-300, event.pageY-200, 600, 400)
})

canvasTag.addEventListener('click', () => {
    i++;
    if (i >= images.length ){
        i = 0;
    }
})