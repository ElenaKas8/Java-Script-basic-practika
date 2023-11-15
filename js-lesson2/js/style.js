// // let array = [];
// let fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits);
// console.log(fruits[1]);

// console.log(fruits.length); //длинна массива
// console.log(fruits[fruits.length - 1]); //последний элемент

// //добавление элементов add

// //в конец массива
// fruits.push("Avocado", "Mango");
// console.log(fruits);

// //в начало массива

// fruits.unshift("Apricot");

// console.log(fruits);

// //Удалить последний элемент-pop

// fruits.pop();
// //удалить первый элемент shift
// console.log(fruits);

// //Удалить,добавить элементы всередине
// //fruits.splice(start, deletecount, elem1, elem2...);

// //удалить с индексом 1
// //fruits.splice(1,1);

// fruits.splice(1, 1, "Mango");

// //добавить эл. с индексом 2

// fruits.splice(2, 0, "Kiwi");

// console.log(fruits);

// //начали со 2 го индекса и удалили 3 элемента
// fruits.splice(2, 3);

// fruits.splice(1, 0, "Kiwi", "Cherry", "Pear");
// console.log(fruits);

// //Узнать любой элемент из массива indexOf

// console.log(fruits.indexOf("Kiwi"));
// fruits.splice(fruits.indexOf("Kiwi"), 1);
// console.log(fruits);
// console.log(fruits.indexOf("banana")); //-1 нет элемента

// //Заменить один элемент на другой-метод присваивания

// fruits[1] = "Peach";
// console.log(fruits);

//// Задание:
// 1. Создайте массив styles с элементами '«Джаз» и «Блюз».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Замените значение в середине на «Классика».
// 4. Удалите первый элемент массива.
// 5. Вставьте Рэп и Регги в начало массива

// Массив по ходу выполнения операций:
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

let array = [];
let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");
styles.splice(1, 1, "Классика");

// Инкремент и декремент

// let i = 5;

// i = i + 1;
// i+=1;

// i = i / 2;
// i/=2;

//Инкремент
// i++;
// ++i;

//декремент
// i--;
// --i;

// console.log(i);

// let i = 5;

// // Постфиксная форма
// console.log(i++); //5
// console.log(i); //6

// i = 5;
// console.log(i--); //5
// console.log(i); //4

// // префиксная форма
// i = 5;
// console.log(++i); //6
// console.log(--i); //5
