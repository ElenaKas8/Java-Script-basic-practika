let box = document.querySelector('div');

// console.log(box.classList); //DOMTokenList

// console.log(box.className); // 'string class list'
// box.className = 'box1';
// console.log(box.getAttribute('class'));

// box.classList.add
// box.classList.remove
// box.classList.toggle
// box.classList.contains('className');//true or false
// box.classList.replace('oldclass', 'newclass');


// box.style.backgroundColor = 'grey';

// Реализовать 10 карточек с числами от 0 до 9 и при нажатии  на какую-либо карточку присвоить ей класс active. В классе  active должны быть стили, которые меняют цвет текста и  цвет заднего фона местами.

// Доработать прошлый скрипт таким образом, чтобы при  повторном нажатии класс active удалялся (через classList).


// вариант 1
// for(let i=0; i<10; i++){
//     let card = document.createElement('div');
//     card.innerText = i;
//     // card.style.color = 'blue';
//     // card.style.backgroundColor = 'lightblue';
//     // card.style.marginBottom = '10px';
//     // card.style.width = '200px';
//     document.body.append(card);
//     card.addEventListener('click', function(){
//         // card.classList.add('active');
//         // вариант 2
//         // let temp_color = card.style.color;
//         // let temp_back_color = card.style.backgroundColor;
//         // card.style.color = temp_back_color;
//         // card.style.backgroundColor = temp_color;

//         // задание 2
//         card.classList.toggle('active');
//     })
// }



// Создать квадратный div с рамкой и при наведении курсора на него цвет div-а поменять на введённый пользователем цвет (все шаги сделать с помощью JS).

// let block1 = document.createElement('div');
// block1.style.border = '5px solid blue';
// block1.style.width = '200px';
// block1.style.height = '200px';

// document.body.append(block1);

// block1.addEventListener('mouseover', function(){
//     block1.style.backgroundColor = prompt('enter the color');
// })


// Написать цикл, который создает множество div-ов c  цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов  цвет должен меняться с шагом 5.

// for(let i=0; i<=255; i+=5){
//     let colored_block = document.createElement('div');
//     colored_block.style.width = '100%';
//     colored_block.style.height = '50px';
//     colored_block.style.backgroundColor = `rgb(128, 128, ${i})`;
//     // colored_block.style.marginBottom = '10px';
//     document.body.append(colored_block);
// }


// Есть массив из объектов. Каждый объект имеет свойства en и ru. В свойстве en написано слово на английском, а в свойстве ru на русском. Необходимо реализовать карточки, при нажатии на которые слова с русского меняются на английский и обратно.Подсказка. В каждой карточке должно быть два параграфа. В одном написано на русском, а во втором на английском и при нажатии на карточку один параграф получает класс с display none а второй с display block.

// let array = [
//     {
//         en: 'banana',
//         ru: 'банан'
//     }, 
//     {
//         en: 'apple',
//         ru: 'яблоко'
//     }, 
//     {
//         en: 'grape',
//         ru: 'виноград'
//     }, 
//     {
//         en: 'pomegrante',
//         ru: 'гранат'
//     }
// ];

// for(let i=0; i<array.length; i++){
//     let card = document.createElement('div');

//     let ru_p = document.createElement('p');
//     ru_p.innerText = array[i].ru;

//     let en_p = document.createElement('p');
//     en_p.innerText = array[i].en;
//     en_p.style.display = 'none';

//     card.append(ru_p, en_p);

//     card.addEventListener('click', function(){
//         if(ru_p.style.display !== 'none'){
//             ru_p.style.display = 'none';
//             en_p.style.display = 'block';
//         }
//         else{
//             en_p.style.display = 'none';
//             ru_p.style.display = 'block';
//         }
//     })

//     document.body.append(card);
// }



// event

// let btn1 = document.querySelector('.btn1');

// btn1.addEventListener('click', function(event){
//     console.log(event.type);
//     console.log(event.currentTarget);
//     console.log(event.clientX);
//     console.log(event.clientY);
// })

// Создать форму, при submit которой данные из формы выводятся в консоль.

// let form = document.querySelector('form');
// let fname = document.querySelector('.fname');
// let lname = document.querySelector('.lname');

// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     console.log(fname.value);
//     console.log(lname.value);
// })


// let link = document.querySelector('a');

// link.addEventListener('click', function(event){
//     event.preventDefault();//отменяем действие браузера(открытие ссылки)
// })
