// *Создать форму в html (наименование товара цена) и добавить скрипт, чтобы при отправке формы данные из нее выводились в консоль.

let form = document.forms.product_form;
let productName = document.querySelector(".name_input");
let productPrice = document.querySelector(".price_input");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(productName.value);
  console.log(productPrice.value);
});
