// console.log("Hallo Word");

// let variableName = "First variable";
// console.log(variableName);
// if (true) {
//   let num1 = 5;
// }

// Базовые математические действия

// console.log(5 + 3); //8
// console.log(5 - 3); //2
// console.log(6 / 2); //3
// console.log(3 / 2); //1.5
// console.log(5 * 2); //10
// console.log(4 ** 2); //16 возведение в степень
// console.log(11 % 2); //1 остаток от деления

// let num1 = 5;
// let num2 = 3;
// let sum = num1 + num2; //8

//Infinity бесконечность
//-Infinity -бесконечность
//NaN  -не число

// специальные числовые значения

// Infinity
// -Infinity
// NaN - not a number

// console.log(3 / 0); //Infinity
// console.log(-14 / 0); //-Infinity
// console.log("not number" / 2); //NaN
// console.log(NaN + 1); //NaN
// console.log(NaN * 1); //NaN
// console.log(NaN ** 0); //1  возведение в степень-единственное когда NaN не прилипает и дает 1-возведение в степень

// string

// let first_name = "John";
// let last_name = "Smith";

// John Smith

// console.log(first_name);
// console.log(last_name);

// // Конкатенация
// //Склеивание строк

// console.log(first_name + " " + last_name);
// let full_name = first_name + " " + last_name;
// console.log(full_name);

// console.log("John" + " " + "Smith");
// // ----Hello.Im first_
// console.log("Hello. I'm " + first_name + " " + last_name + ".");
// --------------------------
// let first_name = "John";
// let last_name = "Smith";
// let age = 15;

// console.log(
//   "Hi. My name is " + first_name + " " + last_name + ". I'm " + age + "."
// );

//интерполяция//
//Hi.My name is Firstname Lastname.Im age

// console.log(`Hi.My name is ${first_name} ${last_name}.I'm ${age}.`);

// Задача: есть переменные r, g, b с числовыми значениями. Вывести в консоль строку
//“rgb(12, 34, 14)” используя конкатенацию и интерполяцию.

// конкатенация
// let r = 12;
// let g = 34;
// let b = 14;
// console.log("rgb(" + r + ", " + g + ", " + b + ")");

//интерполяция

// console.log(`rgb(${r}, ${g}, ${b})`);

// // boolean

// true;
// false;

// let result = true;
// // let result = true; //boolean
// // let result1 = 'true'; //string

// //ввод данных

// let first_name = prompt("Enter your name");
// let last_name = prompt("Enter your surname");
// console.log(first_name + " " + last_name);

// --------Узнаем тип введенных данных при помощи typeOf-------

// let num1 = prompt("enter the number");
// console.log(num1);
// console.log(typeof num1); //string
// console.log(typeof 34); //number
// console.log(typeof false); //boolean

//преобразование из строки в число

// преобразования из строки в число и обратно

// let variable1 = "24";

// console.log(typeof variable1);

// let number1 = Number(variable1); //24
// let number2 = Number("123"); //123

// console.log(typeof number1); //number

// let variable2 = 12;
// let str1 = String(variable2);

// console.log(2 + 2); //4
// console.log("2" + 2); //'22'
// console.log(2 + "2"); //'22'

// console.log("2" - 1); //1
// console.log("2" * 2); //4
// console.log("6" / 2); //3
// console.log("6a " / 2); //NaN

// console.log(Number("6a")); //NaN

//Задача: Написать программу, которая считывает через prompt число и выводит в консоль ее
//квадрат

// let num = Number(prompt("enter the number"));
// console.log(num ** 2);

//Задача: Написать программу, которая считывает два числа (объявляем две переменные и
// записываем туда результат работы двух вызовов prompt) и выводит их сумму. Не забудьте
// преобразовать полученные значения в число.

// let a = prompt("Введите первое число:");
// let b = prompt("Введите второе число:");

// let num1 = prompt('enter the first number');
// let num2 = prompt('enter the second number');
// // let result = Number(num1) + Number(num2);
// // console.log(result);

// console.log(Number(num1+num2)); //1. num1+num2 concat 2. Number()
// console.log(Number(num1) + Number(num2));

//условные ветвления

// Условное ветвление

// if(условие1){
//     действие1
// }
// else if(условие2){
// действие2
// }
// else{
// действиеN
// }
// let num = 4;
// if (num > 0) {
//   console.log("Больше 0");
// } else if (num == 0) {
//   console.log("Равно 0");
// } else {
//   console.log("Меньше 0");
// }

// let str1 = "24";
// let num1 = 24;

// if (str1 == num1) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// Операторы сравнения
// > больше
// < меньше
// >= больше или равно
// <= меньше или равно
// == равно
// === строгое равно(и тип, и значение)
// != не равно

// Составьте программу, которая принимает с клавиатуры целое число и, если оно положительное, увеличивает его вдвое.
// Программа должна выводить на экран новое значение

let num = Number(prompt("Enter the number"));

if (num > 0) {
  num = num * 2;
}
console.log(num);

//Сравнивние строк
if ("X" > "A") {
  console.log("yes");
} else {
  console.log("No");
}

if ("AB" > "AF") {
  console.log("yes");
} else {
  console.log("No");
}
