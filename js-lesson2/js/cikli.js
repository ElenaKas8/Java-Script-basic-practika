// for(Начало; Условие; Шаг){
//     тело цикла;
// }
// for(Начало; Условие; Шаг){
// итерация
// тело цикла;
// }

// for (let num = 0; num <= 5; num++) {
//   console.log(num);
// }

// Программа, которая считывает три числа через prompt и добавляет их в массив.

//2 variant

// let arr = [];
// let num1 = Number(prompt('enter the number'));
// let num2 = Number(prompt('enter the number'));
// let num3 = Number(prompt('enter the number'));
// arr.push(num1, num2, num3);
// console.log(arr);

// let num1 = Number(prompt('enter the number'));
// let num2 = Number(prompt('enter the number'));
// let num3 = Number(prompt('enter the number'));

// let numbers = [num1, num2, num3];
// console.log(numbers);

// let arr = [];
// for (let i = 0; i < 3; i++) {
//   arr.push(Number(prompt("enter the number")));
// }

// console.log(arr);

// // Пример: Написать цикл, который выводит только положительные числа из массивa

// //Вывести все элементы массива
// let numbers = [1, -34, 0, 23.3, 3, -2, 5, 12, 0, 4, -31];

// // console.log(numbers[0]);
// // console.log(numbers[1]);
// // console.log(numbers[2]);

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// //Найти сумму всех элементов массива

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

//Задание. Составьте программу, которая выводит на экран все двузначные положительные числа, делящиеся без остатка на 5 (начиная с наименьшего).

for (let number = 10; number < 100; number++) {
  if (number % 5 === 0) {
    console.log(number);
  }
}

// ---2 второй вариант с шагом 5
for (let i = 10; i < 100; i += 5) {
  console.log(i);
}

//отрицательный шаг синтаксиса цикла от большего к меньшему
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// с шагом 2

for (let i = 10; i > 0; i -= 2) {
  console.log(i);
}
