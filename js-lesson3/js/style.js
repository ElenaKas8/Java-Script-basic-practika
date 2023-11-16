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
//   console.log(i);
//   if (i == 2) {
// break;
//   }
// }
// 0, 1, 2;
//
// for (let i = 0; i < 5; i++) {
//   if (i == 2) {
// break;
//   }
//   console.log(i);
// }

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

// let num =5;
// // if (num > 0 && num % 3 == 0 && num%5==0) {
  // console.log("true");
// }

//15 true 
//5 false
//-15 false

// -----или
//выполняется если хотябы одно верно
let num = 15;

if(num>0 || num%3==0 || num%5==0){
  console.log('true');

  //4 true
  // 15 true
  //-4 false
  
}

//Составьте программу, которая выводит на экран все трехзначные положительные числа, делящиеся без остатка и на 3 и на 5  (начиная с наименьшего).

for (let i = 100; i <= 999; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
