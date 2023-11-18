//Массив в массиве

//t users = [
//["John", "Smith", 23],
//[("Lily", "Hardy", 45)],
//[("Bob", "brown", 16)],
//
// console.log(users[1][1]); //Hardy
//
// console.log(users[2][2]); //16
// // oducts = [iphon X", 900, ["blue", 265, 48]]iphon XR",800,]
//
// let products = [
// // ['iphone X', 900, ['blue', 256, 48]],
// // ['iphone XR', 800, ['black', 128, 48]]
// ];
//
// console.log(products[1][2][0]);

// ++++++++++++++++++++++++++++++

// for (let i = 0; i < users.length; i++) {
// //   for (let j = 0; j < users[i].length; j++) console.log(users[i][j]);
// }
//
// let users = [
//   ["John", "Smith", 23],
//   ["Lily", "Hardy", 45],
//   ["Bob", "Brown", 16],
// ];
//
// for (let i = 0; i < users.length; i++) {
// //   for (let j = 0; j < users[i].length; j++) {
// console.log(users[i][j]);
//   }
// }
// 1. i=0, j=0 John
// 2. i=0, j=1 Smith
// 3. i=0, j=2 23
// 4. i=1, j=0 Lily
// 5. i=1, j=1 Hardy
// 6. i=1, j=2 45
// 7. i=2, j=0 Bob
// 8. i=2, j=1 Brown
// 9. i=2, j=2 16

//Прекращение цикла
// for (let i = 0; i < 5; i++) {
  // console.log(i);
  // if (i == 2) {
// break;
  // }
// }
// 0, 1, 2;
// 
 for (let i = 0; i < 5; i++) {
 if (i == 2) {
 break;
  }
   console.log(i);
 }
// 0,1
// ----CONTINUE-часто используется в календарях

// for (let i = 0; i < 5; i++) {
//   if (i == 2) {
// continue;
//   }
//   console.log(i);
// }

//УСЛОВИЯ ОППЕРАТРЫ
//> < <= == === !=
// &&(and) || (or)

//>0 %3==0
//& выполняется если все условия верны
// let num =5;
// if (num > 0 && num % 3 == 0 && num%5==0) {
  // console.log("true");
// }

// 15 true 
// 5 false
// -15 false

// -----или
// &выполняется если хотябы одно верно
// let num = 15;
// 
// if(num>0 || num%3==0 || num%5==0){
  // console.log('true');
// 
  // 4 true
  // 15 true
  // -4 false
  // 
// }
// 
//^^ Составьте программу, которая выводит на экран все трехзначные положительные числа, делящиеся без остатка и на 3 и на 5  (начиная с наименьшего).

// for (let i = 100; i <= 999; i++) {
  // if (i % 3 === 0 && i % 5 === 0) {
    // console.log(i);
  // }
// }
// -----------2Вариант------
// *for (let i = 100; i<1000; i+=5){
  // if (i % 3==0){ 
    // console.log(i);
    // 
  // }
// 
// }

// object
// let object = {};
// 
//* let user = {
  //* firstname: "John",
  //* lastname: "Smith",
  // age: 18,
  // "is admin": true
// };

// console.log(user);
//* console.log(user.firstname);
//* console.log(user["firstname"]);
// user.age = 19;
// 
// 
// console.log(user);
//* Присваивание
// user.gender = 'Male';
// console.log(user);
// 
//^^ удаление объекта
// 
//^^ delete user.lastname;
// console.log(user);
// console.log(user["is admin"]);
⁡⁢⁣⁢// user['is admin']⁡ = false;
⁡⁢⁣⁢//⁡ ⁡⁢⁣⁢user['likes cars']⁡ = true;
⁡⁢⁣⁢// ЕСЛИ КЛЮЧ СОСТОИТ ИЗ НЕСКОЛЬКИХ СЛОВ-ПРИМЕНЕМ КВАДРАТНЫЕ СКОБКИ⁡
// 
// const product = {
  // model: 'iphone 13 pro max',
  // price:'1200$'
// }
// 
// product.price = '1250$';

// -----------------------------------
// 
// let country = {
  // name: 'Germany',
  // language: 'germany',
  // capital: {
    // name:'Berlin',
    // population: '300000000',
    // year:1237
    // 
  // }
// }
// 
// console.log(country);
// console.log(country.language);
// console.log(country.capital.name);


// let users = {
  // firstname: ["John", "Bob", "Mary"],
  // lastname: ["Smith", "Brown", "Marley"],
// };
// console.log(users.firstname);
// console.log(users.firstname[1]);
// console.log(country["capital"]["population"]);
// console.log('language' in country);//true
// console.log('year' in country); //false
// console.log('year' in country.capital.date); //true


//*1. Напишите код, выполнив задание из каждого пункта отдельной строкой:

    //^° Создайте пустой объект user.
    //~ Добавьте свойство name со значением John.
    //& Добавьте свойство surname со значением Smith.
    //⁡⁢⁣⁢ Измените⁡ значение свойства name на Pete.
// ⁡⁢⁣⁢Удалите⁡ свойство name из объекта.
    

// let user = {};
  // user.name="John",
  // user.surname="Smith",
//
// console.log(user);
// ⁡⁢⁣⁢user.name = "Pete",⁡
  //⁡⁢⁣⁢ delete user.name⁡
//
// console.log(user);
//
//
// let user = {};
// 
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// 
// console.log(user);
//

// -------
// У нас есть следующий объект:
⁡⁢⁣⁢//⁡^⁡⁢⁣⁢Проверьте, что в объекте есть ключ age⁡.
// 
    // let user = {
    // name: "John",
    // age: 30
    // };
// 
// ⁡⁢⁣⁢if ("age" in user) {⁡
      // console.log('true');
    // }
      

      //^используя цикл и условия // В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений. Используя цикл, выведите в консоль сумму положительных чисел.




// let list = [3, -5, 7, -2, 10, -8, 15];
// 
// let sum = 0;
// 
// for (let i = 0; i < list.length; i++) {
  // if (list[i] > 0) {
    // sum += list[i];
  // }
// }
// 
// console.log("Сумма положительных чисел: " + sum);