//инпуты
let inputFontName = $('#input-font-name');
let inputFontSize = $('#input-font-size');
let inputLetterSpacing = $('#input-letter-spacing');
let inputFontColor = $('#input-font-color');
let inputSvgSetting = $('#input-svg-setting');

//элементы которые мы меняем
let container = $('.container');
let svgFilter = $('feTurbulence');
let buttonHide = $('#js-settings');
let controlsContainer = $('.controls');

buttonHide.click(function() {
  controlsContainer.toggle();
})

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

inputSvgSetting.on('input', function(){
  let value = $(this).val()/2000;
  svgFilter.attr('baseFrequency', value);
})