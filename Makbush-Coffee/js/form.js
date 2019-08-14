/*// Существует меньше способов выбрать узел DOM с устаревшими браузерами
var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('form-mail');
var phone = document.getElementById('form-phone');

// Ниже приведен трюк для достижения следующего узла Element Element в DOM
// Это опасно, потому что вы можете легко построить бесконечный цикл.
// В современных браузерах вам следует использовать элемент element.nextElementSibling
var error = email;
while ((error = error.nextSibling).nodeType != 1);

// As per the HTML5 Specification
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Многие устаревшие браузеры не поддерживают метод addEventListener.
// Вот простой способ справиться с этим; это далеко не единственный.
function addEvent(element, event, callback) {
  var previousEventCallBack = element["on"+event];
  element["on"+event] = function (e) {
    var output = callback(e);

    // Обратный вызов, который возвращает `false`, останавливает цепочку обратного вызова
     // и прерывает выполнение обратного вызова события.
    if (output === false) return false;

    if (typeof previousEventCallBack === 'function') {
      output = previousEventCallBack(e);
      if(output === false) return false;
    }
  }
};

// Теперь мы можем перестроить наше ограничение валидации
// Поскольку мы не полагаемся на псевдо-класс CSS, мы должны
// явно установить допустимый / недопустимый класс в поле электронной почты
addEvent(window, "load", function () {
// Здесь мы проверяем, пусто ли поле (помните, что поле не требуется)
   // Если это не так, мы проверяем, является ли его контент корректным адресом электронной почты.
  var test = email.value.length === 0 || emailRegExp.test(email.value);
  var test2 = phone.value.length === 0;

  email.className = test ? "valid" : "invalid";
   phone.className = test2 ? "valid" : "invalid";
});

// Это определяет, что происходит, когда пользователь вводит в поле
addEvent(email, "input", function () {
  var test = email.value.length === 0 || emailRegExp.test(email.value);
  if (test) {
    email.className = "valid";
    error.innerHTML = "";
  } else {
    email.className = "invalid";
  }
});

addEvent(phone, "input", function () {
  var test2 = phone.value.length === 0 || phone.value.length < 10;
  if (test2) {
    email.className = "valid";
  } else {
    email.className = "invalid";
  }
});

// Это определяет, что происходит, когда пользователь пытается отправить данные
addEvent(form, "submit", function () {
  var test = email.value.length === 0 || emailRegExp.test(email.value);
  var test2 = phone.value.length === 0 || phone.value.length < 10;

  if (!test) {
    email.className = "invalid";

    // Некоторые устаревшие браузеры не поддерживают метод event.preventDefault ()
    return false;
  } else {
    email.className = "valid";
  }

  if (!test2) {
    

    // Некоторые устаревшие браузеры не поддерживают метод event.preventDefault ()
    return false;
  } else {
    phone.className = "valid";
   
  }
});*/