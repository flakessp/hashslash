// строка
let name = 'IVAN';

// число
let age = 24; 

// функция
let sayHello = function () {
  console.log('hello');
}
// запись выше тоже самое, что и
function sayHello () {
  console.log('hello');
}

// структуры данных
// массив
let names = [name, 'PAVEL', 'JOHN'];
names[0]; // IVAN
names[1]; // PAVEL

// объект
let book = {
  name: 'Grid Systems in Graphic Design', 
  author: 'Josef Müller-Brockmann',
  year: 1981,
  tags: ['Typography', 'Grid'],
  showCover: function() {
  }
}
book.name // Grid Systems in Graphic Design
book.year // 1981
// альтернативный способ обращения к свойствам объекта
book['name'] // Grid Systems in Graphic Design
book.showCover() // вызов функции в объекте
