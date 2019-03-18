// загрузить данные с адреса(в кавычках) и выполнить функцию (после запятой)
$.get( "https://esh-lesson8.firebaseio.com/posts.json", function( data ) {
  // загруженный объект теперь доступен под именем data (имя произвольное и указывается в скобках)
  // добавить в .post h1 свойство title из загруженного объекта
  $('.post h1').html(data.title);
  $('.post p').html(data.content);

  // убрать заглушку когда данные загрузятся
  $('.overlay').fadeOut('slow');
});