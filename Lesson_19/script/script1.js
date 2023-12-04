//* Создать форму в html (наименование товара и цена) и добавить скрипт, чтобы при отправке формы данные из нее выводились в консоль.

// let form = document.forms.product_form;
// let productName = document.querySelector('.name_input');
// let productPrice = document.querySelector('.price_input');

// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     console.log(productName.value);
//     console.log(productPrice.value);
// })

///* Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив с продуктами в виде объекта. Вывести массив в консоль.


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

    rerender();

    form.reset();//очищет значение инпутов формы
})

//* Добавить функцию, которая получает наименование карточки и цену и возвращает HTML элемент с карточкой товара.

function createProductCard({title, price}){
    let pTitle = document.createElement('p');
    pTitle.innerText = title;
    let pPrice = document.createElement('p');
    pPrice.innerText = price;
    let productCard = document.createElement('div');
    productCard.classList.add('product_card');
    productCard.append(pTitle, pPrice);

    return productCard;
}

//*Разработать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с товарами из массива. Настроить rerender при добавлении нового продукта.

function rerender(){
    let productsList = document.querySelector('.products_list_container');
    productsList.innerHTML = '';//очищаем контейнер с карточками товаров
    for(let i=0; i<products.length; i++){
        let productCardElem = createProductCard(products[i]);
        productsList.append(productCardElem);
    }
}