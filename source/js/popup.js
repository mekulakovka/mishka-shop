var link = document.querySelector('.addtocart-button');
var popup = document.querySelector('.modal-overlay');
var close = document.querySelector('.modal-close');
var size = popup.querySelector('[checked=checked]');

var form = popup.querySelector('form');

var storage = localStorage.getItem("size");

//конструкция для проверки возможности работы с localStorage

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("size");
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener("click", function (event) {
  event.preventDefault();

  popup.classList.add('modal-visible');

  if(storage) {
    loginName.value = storage;
    email.focus();
  } else {
    loginName.focus();
  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();

  popup.classList.remove('modal-visible');
});

window.addEventListener("keydown", function(event){
  if(event.keyCode === 27) {

    if (popup.classList.contains('modal-visible')) {
      event.preventDefault();

      popup.classList.remove('modal-visible');
    }
  }
});
