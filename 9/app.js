let inputFontName = $('#input-font-name');
let inputFontSize = $('#input-font-size');
let inputLetterSpacing = $('#input-font-size');

let container = $('.container');

// 1. я меняю инпуты
// 2. должен измениться css код элемента .container

inputFontName.on('input', function(){
  let value = $(this).val();
  container.css('font-family', value);
})