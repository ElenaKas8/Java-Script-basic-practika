// Function Declaration
// function functionName(p1, p2){
//     // ...
//     // return result;
// }

// function sayHi1() {
//   console.log("Hello");
// }

// Function Expression

// let sayHi2 = function () {
//   console.log("Hello");
// };
//
// sayHi1();
// sayHi2();
//
// console.log(getMax(2, 6)); //6
//
// function getMax(a, b) {
//   if (a > b) {
// return a;
//   }
//   return b;
// }
//
// console.log(getMax1(10, 6)); //error
//
// let getMax1 = function (a, b) {
//   if (a > b) {
// return a;
//   }
//   return b;
// };
//
// console.log(getMax1(10, 6)); //10
//
// function showSum(a, b) {
//   console.log(a + b);
// }
//
// let num1 = 5;
// let num2 = num1; //num2 = 5

//

//Arrow function

// function getSum1(a, b){
// return a+b;
// }
//
// let getSum2 = (a, b) => a + b;
//
//
// console.log(getSum1(3, 6));
// console.log(getSum2(3, 6));
//
// let pow = n => n*2;
//
// let sayHi = () => 'Hello';

// function getMax(a, b) {
//   if (a > b) {
// return a;
//   }
//   return b;
// }
//
// function showMax(a, b) {
//   console.log(getMax(a, b));
// }
//
// showMax(20, 100);
//
//^^-------------------------------------------------------------------------------------------

// function getArraySum(array=[]){
// if(array.length == 0){
// return 0;
// }
// let sum = 0;
// for(let i=0; i<array.length; i++){
// sum += array[i];
//sum = sum + array[i];
// }
// return sum;
// }
//
// let numbers = [3, 6, 2, -1, 0, 4];
//
// console.log(getArraySum());
// console.log(getArraySum(numbers));
// console.log(getArraySum([20, 4, 0, 10]));
// console.log([]==[]);//false
//

//*Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.

// function getNewArray(array = []) {
//   if (array.length == 0) {
// return 0;
//   }
//   let OddArray = [];
//   for (let i = 0; i < array.length; i++) {
// if (array[i] % 2 == 0) {
//   OddArray.push(array[i]);
// }
//   }
//   return OddArray;
// }
//
// console.log(getNewArray([3, 0, 121, 46, 10, -12]));

//* Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа больше определенного порога(N).

// function getNewArray1(array = [], N = 0) {
//   if (array.length == 0) {
// return 0;
//   }
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
// if (array[i] > N) {
//   newArray.push(array[i]);
// }
//   }
//   return newArray;
// }
//
// console.log(getNewArray1([3, 0, 121, 46, 10, -12], 10));
// *-------2 variant

// function getNewArray1(array = [], N = 0) {
//   if (array.length == 0) {
// return 0;
//   }
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
// if (array[i] > N) {
//   newArray.push(array[i]);
// }
//   }
//   return newArray;
// }
//
// console.log(getNewArray1([3, 0, 121, 46, 10, -12], 10));
//
// let array = [10, 23, -1, 0, 13.2, 48];
// let num = 12;
//
// console.log(getNewArray1(array, num));

//*-----------------------// Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg с соответствующими значениями по массиву.

// function getObj(array = []) {
//   if (array.length == 0) {
// return 0;
//   }
//
//   let min = array[0];
//   let max = array[0];
//   let sum = array[0];
//   let avg;
//
//   for (i = 1; i < array.length; i++) {
// if (array[i] < min) {
//   min = array[i];
// }
// if (array[i] > max) {
//   max = array[i];
// }
// sum += array[i];
//   }
//   avg = sum / array.length;
//
//   return {
// min,
// max,
// avg,
//   };
// }
//
// let array = [10, 23, -1, 0, 13.2, 48];
//
// console.log(getObj(array));

⁡⁢⁣⁢//*𝟭. У нас есть следующий объект:⁡

// let user = {
//   name: "John",
//   age: 30,
// };
// if ("age" in user) {
//   console.log(true);
// }

//*Проверьте, что в объекте есть ключ age.

//*2. Создать объект product с названием(product_name) и ценой(product_price) продукта и выведите данные в консоль.

// let product = {
//   product_name: "Apple",
//   product_price: 100,
// };
// console.log(product.product_name);
// console.log(product.product_price);
*3. Добавить в объект product свойства product_quantity и product_quality.
// 
// product.product_quontity = 100;
// product.product_quality = 200;
*4.  Удалить свойство product_quality из объекта product.
// delete product.product_quontity;
// 
// 
/⁡⁢⁣⁢/ Создайте объект с различными свойствами (строки, числа, булевы значения⁡).
//^^ Напишите функцию, которая выводит все ключи объекта.
// Напишите функцию, которая выводит все значения объекта.
// Напишите функцию, которая определяет количество свойств в объекте.



// let newobj = {
    // name: 'iphone 13 pro',
    // price: 1000,
    // quality: 9,
    // inStock: true
// };

// function showKeys(obj={}){
    // for(let key in obj){
        // console.log(key);
    // }
// }
// 
// function showObj(obj={}){
    // for(let key in obj){
        // console.log(obj[key]);
    // }
// }
// 
// 
// function objLength(obj={}){
    // let count = 0;
    // for(let key in obj){
        // count++;
        count = count + 1;
    // }
    // console.log(count);
// }
// 
// showKeys(newobj);
// showObj(newobj);
// objLength(newobj);
Напишите функцию, которая определяет количество числовых значений в объекте.


// function number_count(obj={}){
    // let count = 0;
    // for(let key in obj){
        // if(typeof(obj[key]) == 'number'){
            // count++;
        // }
    // }
    // console.log(count);
// }
// 
// number_count(newobj);
// 
// 



// Дан массив:
// [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.




let sum = [1, '', 2, 3, '', 5];

for (let i = sum.length - 1; i >= 0; i--) {
    if (sum[i] === '') {
        sum.splice(i, 1); // Удаляем элемент из массива
    }
}

console.log(sum);
//*----------------------------2 variant

for(let i=0; i<numbers1.length; i++){
    if(numbers1[i]===''){
        numbers1.splice(i, 1);
    }
}

console.log(numbers1);

//*---------Function-3 variant

function getArray1(numbers1){
    for(let i=0; i<numbers1.length; i++){
        if(numbers1[i]===''){
            numbers1.splice(i, 1);
            i--;
        }
    }
    return numbers1;
}

console.log(getArray1(numbers1));

