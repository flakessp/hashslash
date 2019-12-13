const canvasTag = document.querySelector('canvas')

canvasTag.width = window.innerWidth
canvasTag.height = window.innerHeight

const context = canvasTag.getContext('2d')

const image = document.createElement('img')
image.src = 'img.jpg'

document.addEventListener('mousemove', () => {
    context.drawImage(image, 100, 100, 600, 400);
})