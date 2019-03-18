// загрузить данные с адреса(в кавычках) и выполнить функцию (после запятой)
$.get( "https://esh-lesson8.firebaseio.com/posts.json", function( data ) {
  // загруженный объект теперь доступен под именем data (имя произвольное и указывается в скобках)

  // data.content 
  // data.title
  // data.type

  let content = `<div class="post post-${data.type}">`; // превратится в post-big
  // записываем заголовок
  content += `<h1>${data.title}</h1>`;
  // записывает параграф
  content += `<p>${data.content}</p>`;
  // закрываем тег div с классом post
  content += '</div>';
  

  //добавить html код в элемент с классом container
  $('.container').html(content)


  // конец функции, загрузка закончилась
  // убрать заглушку когда данные загрузятся
  $('.overlay').animate({'border-radius': '50%', 'opacity': 0}, 2000);
});