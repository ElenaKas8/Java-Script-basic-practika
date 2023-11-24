// let paragraph = document.querySelector("p");
//
// console.log(paragraph);

// let paragraph3 = document.querySelector(".p3");
//
// console.log(paragraph3);
//
// let paragraph4 = document.querySelector("#p4");
//
// console.log(paragraph4);
//
// let paragraph5 = document.querySelector(".block1>p");
//
// console.log(paragraph5);
//
// &---inner html
//
// let paragraph6 = document.querySelector(".p6");
//
// console.log(paragraph6);
// console.log(paragraph6.innerHTML);
// console.log(paragraph6.innerText);
//
// &  присваиваем что-то
// ^^ innerText
// *innerHTML

// paragraph5.innerText = "New text";
// paragraph5.innerHTML = '<span class="span1"> Text </span>';
// paragraph5.innerText = "<span> Text </span>";
//
//*Задача: Написать программу, которая находит параграф по классу и заменяет в нем текст на “привет”.
//
// let paragraph = document.querySelector(".change");
// paragraph.innerText = "Hello";
//
// let paragraphs = document.querySelectorAll("p");
//
// console.log(paragraphs);
// console.log(paragraphs[0]);
// console.log(paragraphs[1]);
//
// paragraphs[1].innerText = "New paragraph";
//
// for (let i = 0; i < paragraphs.length; i++) {
//   console.log(paragraphs[i].innerText);
// }
// for (let i = 0; i < paragraphs.length; i++) {
//   console.log(paragraphs[i].innerText);
// }
//
// for (let elem of paragraphs) {
//   console.log(elem.innerText);
// }
//
//*Задача: Написать программу, которая находит параграфы и заменяет в каждом из них текст на “привет”.

// let paragraphs = document.querySelectorAll('p');
//
// console.log(paragraphs);
// console.log(paragraphs[0]);
// console.log(paragraphs[1]);
//
// paragraphs[1].innerText = 'New paragraph';
//
// for(let i=0; i<paragraphs.length; i++){
// console.log(paragraphs[i].innerText);
// }
//
// for (let elem of paragraphs){
// console.log(elem.innerText);
// elem.innerText = 'Hello';
// }

//* Задача: Написать скрипт, который находит параграфы и первым 3 параграфам меняет текст на указанные пользователем значения.

// for(let i=0; i<3; i++){
// paragraphs[i].innerText = prompt('enter the text');
// }

//*Задача: Написать скрипт, который находит параграфы и четным параграфам меняет текст на 'Я четный', a нечетным на 'Я нечетный'.

// for (let i = 0; i < paragraphs.length; i++) {
//   if (i % 2 == 0) {
// paragraphs[i].innerText = "Я нечетный";
//   } else {
// paragraphs[i].innerText = "Я четный";
//   }
// }

//* Задача: Написать скрипт, который находит параграфы и выводит (console) текстовое содержимое начная с 3 параграфа до 6.

// ⁡⁢⁢⁢for (let i = 2; i < 6; i++) {⁡
//   ⁡⁢⁢⁢console.log(paragraphs[i].innerText);⁡
// }
//
// ⁡⁢⁢⁢// querySelector(first element) or querySelectorAll(all elements) -

//                         let links = document.querySelectorAll('a');⁡

//  console.log(links);
//^^ДОБАВЛЯЕМ,МЕНЯЕМ АТРИБУТЫ

// let link = document.querySelector('a');
//
// link.innerText = 'Google';
//
// ⁡⁢⁢⁢link.setAttribute('href', 'https://www.google.com')⁡;
// link.setAttribute('target', '_blank');
//
//^^Проверяет или есть атрибут
// ⁡⁢⁢⁢console.log(link.hasAttribute('target'));//true⁡
// console.log(link.hasAttribute('class'));//false
//^^ДОБАВЛЯЕТ АТРИБУТ

// ⁡⁢⁢⁢console.log(link.getAttribute('href'));//https://www.google.com

//^^Удаляем атрибут
// link.removeAttribute('target');

//&---------------------------------менем картинки

let url =
  "https://cdn-cafdl.nitrocdn.com/fQHdfFSxWCuDmbpNBOTabVcchzVvBqxc/assets/images/optimized/rev-10d6093/blog/wp-content/uploads/2014/09/cute-kittens.jpg";

let images = document.querySelectorAll(".main>img");

console.log(images);

for (let i = 0; i < 5; i++) {
  images[i].setAttribute("src", url);
}
