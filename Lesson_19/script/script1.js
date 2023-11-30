// Создать форму в html (наименование товара и цена) и добавить скрипт, чтобы при отправке формы данные из нее выводились в консоль.

// let form = document.forms.product_form;
// let productName = document.querySelector('.name_input');
// let productPrice = document.querySelector('.price_input');

// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     console.log(productName.value);
//     console.log(productPrice.value);
// })

// Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив с продуктами в виде объекта. Вывести массив в консоль.

let form = document.forms.product_form;
let productName = document.querySelector('.name_input');
let productPrice = document.querySelector('.price_input');

let products = [];
form.addEventListener('submit', function(event){
    event.preventDefault();
    let product_obj = {
        title: productName.value,
        price: Number(productPrice.value)
    }
    products.push(product_obj);
    console.log(products);
})
