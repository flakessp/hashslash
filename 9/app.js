let inputFontName = $('#input-font-name');
let inputFontSize = $('#input-font-size');
let inputLetterSpacing = $('#input-letter-spacing');
let inputFontColor = $('#input-font-color');

let container = $('.container');

// 1. я меняю инпуты
// 2. должен измениться css код элемента .container

inputFontName.on('input', function(){
  let value = $(this).val();
  container.css('font-family', value);
})

inputFontSize.on('input', function(){
  let value = $(this).val();
  container.css('font-size', value + 'px');
})

inputLetterSpacing.on('input', function(){
  let value = $(this).val();
  container.css('letter-spacing', value + 'px');
})

inputFontColor.on('input', function(){
  let value = $(this).val();
  container.css('color', value);
})