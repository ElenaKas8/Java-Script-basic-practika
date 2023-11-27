// ⁡⁢⁢⁢let block = document.createElement('div');⁡
//
// block.innerText = 'Block1';
//
//⁡⁣⁢⁣ document.body.⁡⁢⁣⁢prepend⁡(block);//вставить блок в начало body⁡
// ⁡⁣⁢⁣document.body.prepend(block);⁡
// ⁡⁣⁢⁣document.body.⁡⁢⁣⁢append⁡(block); //вставить блок в конец body⁡
//
// let paragraph = document.querySelector('.p1');
//
// paragraph.before(block); //вставить блок до параграфа
//
// paragraph.after(block); //вставить блок после параграфа
//
// let block = document.createElement("div");
//
// block.innerText = "Block1";
//
// document.body.prepend(block);
//
// document.body.prepend(block);
// document.body.append(block);
//
// let paragraph = document.querySelector("p");
//
// paragraph.⁡⁢⁣⁢before⁡(block);
// paragraph.⁡⁢⁣⁢after⁡(block);

//*-----Cicly

// for (let i = 1; i < 6; i++) {
//   let div = document.createElement("div");
//   div.innerText = `Block${i}`;
//   document.body.append(div);
// }
//---------
// ⁡⁢⁢⁢Создать параграф, задать ему ⁡⁢⁢⁢текст и добавить в HTML⁡⁢⁢⁢- документ в div с #root

// let new_p = document.createElement("p");
//
// new_p.innerText = "Paragraph";
//
// let root_div = document.querySelector("#root");
//
// root_div.append(new_p);
//
// ⁡⁢⁢⁢Задание: Напишите скрипт для создания списка.(все через JS)⁡
// Для каждого пункта:
// Запрашивайте содержимое пункта (тега <li>) у пользователя с помощью prompt 10 раз.
// Создавайте элементы <li> и добавляйте его к <ul>.

// let ul = document.createElement("ul");
// for (let i = 1; i <= 10; i++) {
//   let listItemContent = prompt("Введите содержимое для пункта " + i);
//   let li = document.createElement("li");
//   li.textContent = listItemContent;
//   ul.append("li");
// }
// document.body.append("ul");

// let list = document.createElement("ul");
//
// document.body.append(list);
//
// for (let i = 0; i < 10; i++) {
//   let data = prompt("enter the text for li");
//   let li = document.createElement("li");
//   li.innerText = data;
//   list.append(li);
// }

//*⁡⁢Создать множество параграфов с числами от 0 до 19.

// for (let i = 0; i < 20; i++) {
//   let paragraph = document.createElement("p");
//   paragraph.innerText = i;
//   document.body.append(paragraph);
// }

//*Написать цикл, который проходится по массиву строк и для каждого создает параграф и добавляет в #root

// let root_div = document.querySelector("#root");
//
// let arr = ["Stroka1", 2, 3, "Stroka2", "Stroka3", "Stroka4"];
//
// for (let i = 0; i < arr.length; i++) {
//   let paragraph = document.createElement("p");
//   paragraph.textContent = arr[i];
//   root_div.appendChild(paragraph);
// }
//
// let str_array = ["Anna", "Lily", "John", "Nick", "Bob", "Tom"];
//
// let root_div = document.querySelector("#root");
//
// for (let i = 0; i < str_array.length; i++) {
//   let new_p = document.createElement("p");
//   new_p.innerText = str_array[i];
//   root_div.append(new_p);
// }

//*удаление элеметов

// let removed_p = document.querySelector(".deleted");
// removed_p.remove();

let links = document.querySelectorAll("a");

//*----for-of
//for (let link of links) {
// console.log(link);
//link.remove();
//}

//*Создайте новый элемент <li>, добавьте ему текст и вставьте его в начало списка с id "myList".

// let myList = document.querySelector("#myList");
//
// let new_list = document.createElement("li");
// new_list.innerText = "New element";
// myList.prepend(new_list);

//* Написать программу, которая запрашивает у пользователя картинку и ссылку на статью (любую) и формирует в интерфейсе картинку и внизу ссылку, указанную пользователем.

// let imgSrc = prompt("Enter the image URL");
// let aHref = prompt("Enter the link URL");
//
// let imgElem = document.createElement("img");
// imgElem.setAttribute("src", imgSrc);
// imgElem.setAttribute("alt", "Post image");
//
// document.body.append(imgElem);
//
// let aElem = document.createElement("a");
// aElem.setAttribute("href", aHref);
// aElem.setAttribute("target", "_blank");
// aElem.innerText = "Post Link";
//
// document.body.append(aElem);
//

// Массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. ⁡⁢⁣⁢Напишите цикл, который создаст для каждого объекта ссылку и добавит в #links.⁡
//*должно получиться
//<a href="https://facebook.com" target="_blank">facebook</a>
//{
/* <a href="https://youtube.com" target="_blank">youtube</a> */
//}
//{
/* <a href="https://google.com" target="_blank">google</a> */
//}
//{
/* <a href="https://github.com" target="_blank">github</a> */
//}

// let links = [
//   {
// link: "https://facebook.com",
// title: "Facebook",
//   },
//   {
// link: "https://youtube.com",
// title: "Youtube",
//   },
//   {
// link: "https://google.com",
// title: "Google",
//   },
//   {
// link: "https://github.com",
// title: "Github",
//   },
// ];
//
// let divLinks = document.querySelector("#links");
//
// for (let i = 0; i < links.length; i++) {
//   console.log(links[i].link);
//   console.log(links[i].title);
//   let linkElem = document.createElement("a");
//   linkElem.setAttribute("href", links[i].link);
//   linkElem.setAttribute("target", "_blank");
//   linkElem.innerText = links[i].title;
//   divLinks.append(linkElem);
// }
//

//*Рассматриваем кейс, в котором создается div с картинкой и ссылкой внутри.
//* Создаем функцию, которая получает ссылку на картинку и ссылку на сайт и возвращает элемент.

function createBlockWithImage(imgSrc, aHref) {
  let block = document.createElement("div");

  let imgElem = document.createElement("img");
  imgElem.setAttribute("src", imgSrc);
  imgElem.setAttribute("alt", "Post Img");

  let linkElem = document.createElement("a");
  linkElem.setAttribute("href", aHref);
  linkElem.setAttribute("target", "_blank");
  linkElem.innerText = "Click me";

  block.append(imgElem, linkElem);

  return block;
  // <div>
  //     <img src=''>
  //     <a href=''></a>
  //      </div>
}

let imgSrc =
  "https://consumersiteimages.trustpilot.net/business-units/641aeaedbd3a43fcfbfedb1c-198x149-1x.jpg";
let aHref = "https://startainstitute.com/";

let newDiv = createBlockWithImage(imgSrc, aHref);

document.body.append(newDiv);
