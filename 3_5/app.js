let whiteColor = document.querySelector('.color-select .white');
let blackColor = document.querySelector('.color-select .black');
let root = document.querySelector('html');

whiteColor.addEventListener('click', function() {
    root.style.setProperty('--bg-color','white')
    root.style.setProperty('--text-color','blue')
})

blackColor.addEventListener('click', function() {
    root.style.setProperty('--bg-color','black')
    root.style.setProperty('--text-color','white')
})