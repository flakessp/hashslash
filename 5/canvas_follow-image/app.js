const canvasTag = document.querySelector('canvas')

canvasTag.width = window.innerWidth
canvasTag.height = window.innerHeight

const ctx = canvasTag.getContext('2d')

let aimX = null,
    aimY = null,
    currentX = null,
    currentY = null;

let i = 0
let images;

fetch('https://test-7f93b.firebaseio.com/name.json')
  .then(response => response.json())
  .then(result => {
      images = result.map( src => {
        const image = document.createElement('img')
        image.src = src
        return image
      })
      draw();
    })

document.addEventListener('mousemove', event => {
    aimX = event.pageX
    aimY = event.pageY

    if (currentX == null) {
        currentX = event.pageX
        currentY = event.pageY
    }
})

const draw = () => {
    if (currentX) {
        ctx.drawImage(images[i], currentX-images[i].width*0.5/2, currentY-images[i].height*0.5/2, images[i].width*0.5, images[i].height*0.5)
    }
    currentX = currentX + (aimX - currentX) * 0.5
    currentY = currentY + (aimY - currentY) * 0.5
    requestAnimationFrame(draw)
}