// let object = {};
// 
// let user = {
//   first_name: "John",
//   last_name: "Smith",
//   age: 20,
//   gender: "Male",
// };

// user.isAdmin = true;

// delete user.gender;

// last_name in user;//true

//for (let key in user) {
  //* console.log(key);// first_name, last_name, age, gender
  //console.log(user[key]); //John, Smith, 20, Male
//}

//* У нас есть объект, в котором хранятся зарплаты нашей команды:






//* Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// 
// for (let key in salaries) {
    // sum = sum + salaries[key];
// }
// 
// console.log(sum); // Выведет сумму зарплат: 390



//*Написать код, выполнив задание: если значение объекта является числом (number), то его значение надо увеличить вдвое.

//Пример объекта:

    // let menu = {
        // width: 200, 
        // height: 300,
        // title: "my menu"
// };
    // 
//  
// for (let key in menu) {
    // console.log(typeof(menu[key]));
    // 
//    if(typeof(menu[key])=='number'){
        // menu[key] = menu[key] * 2;
        // menu[key] *= 2;
    // }
// }
// 
// console.log(menu);
    // 
    // 
    // 
// 

// Результат:
// 
    // let menu = {
        // width: 400, 
        // height: 600,
        // title: "my menu"
    // };
    
    //*Массивы которые содержат в себе объекты
    
    // let users = [
    //   {
        // name: "Bob",
        // surname: "Brown",
        // age: 20,
    //   },
    //   {
        // name: "John",
        // surname: "Smith",
        // age: 18,
    //   },
    //   {
        // name: "Tom",
        // surname: "Hardy",
        // age: 48,
    //   },
    // ];

    // for (let i = 0; i < users.length; i++) {
    //   console.log(users[i].age); //20, 18, 48
    // }
    
    
    //* В следующих задачах будет использоваться массив из объектов, каждый из которых описывает определенный товар. 
// Пример массива

// let arr = [
            // {
            // id: 1,
            // title: "bicycle",
            // price: 45000,
            // discount: 10
            // },
            // {
            // id: 2,
            // title: "roller-skates",
            // price: 15000,
            // discount: 5
            // },
            // {
            // id: 3,
            // title: "Kick scooter",
            // price: 10000,
            // discount: 30
            // },
            // {
            // id: 4,
            // title: "skis",
            // price: 25000,
            // discount: 20
            // },
            // {
            // id: 5,
            // title: "skate",
            // price: 10000,
            // discount: 0
        // }
    // ]
// for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i].title);
// }
//^ Написать цикл, который выводит только названия товаров.

//* Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”

// for (let i = 0; i < arr.length; i++) {
//   console.log(`${arr[i].title} (${arr[i].price})`);
// }
//^^ Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”



// 
// for (let i = 0; i < arr.length; i++) {
    // // let discountedPrice = arr[i].price - arr[i].price * (arr[i].discount / 100);
    // console.log(`${arr[i].title} (${discountedPrice})`);
// }
// 
// 
// 
//& вариант учителя 


// for (let i = 0; i < arr.length; i++) {
    // if (arr[i].discount === 0) {
        // console.log(`${arr[i].title} (${arr[i].price})`);
    // }
    // else {
        // // console.log(`${arr[i].title} (${arr[i].price - arr[i].price * arr[i].discount / 100})`);
    // }
// }
// 
// 
// price - price*discount/100





//^function

// function function_name(param1, param2){
//     function body;
// }

// function_name(arg1, arg2);

// showMessage();

// let first_name = 'Tom'; //глобальная переменная

// showMessage();//hello tom

// function showMessage(){
//     let user_name = 'John'; //локальная переменная
//     // console.log('Hello ' + user_name);
//     console.log('hello ' + first_name);
// }

// console.log(first_name);
// showMessage();

// let user_name = 'Tom';
//
// function showMessage(){
    // let user_name = 'John';
    // console.log('hello ' + user_name);
// }
//
// showMessage();//hello John
//---------------------------------------------------------//---
// function showMessage(user){
    // console.log('hello ' + user);
// }
// 
// showMessage('John');
// showMessage('Lily');
// showMessage();//hello undefined

// Параметр – это переменная, указанная в круглых скобках в объявлении функции.
// Аргумент – это значение, которое передаётся функции при её вызове.

//*showMessage(prompt('enter your name'));

//& function showMessage(user='User name'){
    // &console.log('hello ' + user);
// }
//
// showMessage();
// showMessage('Anna');


// ⁡⁢⁣ function getMax(num1, num2){
//     if(num1>num2){
//         return num1;
//     }
//     else{
//         return num2;
//     }
// }

// function getMax(num1, num2){
    // if(num1>num2){
        // return num1;
    // }
    // return num2;
// }
// 
// console.log(getMax(20, 14));

⁡//& Задача Объявить функцию, которая считывает значение через prompt и выводит “ДА” если число четное и ///“НЕТ” в ином случае.
// function ShowEvenOrOdd(){
    // let number = Number(prompt('enter the number'));
    // if(number%2===0){
        // console.log('Yes');
    // }
    // else{
        // console.log('No');
    // }
// }
// 
// ShowEvenOrOdd();
// 


//^ Написать функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.
// 

// function BackEvenOrOdd(number1, number2) {
    // // let number1 = Number(prompt('enter the first number'));
    // // let number2 = Number(prompt('enter the second number'));
    // if (number1 > number2) {
        // return 1;
    // }
    // else if (number2 > number1) {
        // return -1;
    // }
    // else 0;
// }


//* Описать функцию, которая получает в качестве //аргумента число и возвращает массив из чисел от 0 до ////указанного числа.

// function getArray(n){
    // let newArray = [];
    // 
    //  for (let i = 0; i <= n; i++) {
        // newArray.push(i);
    // }
// 
    push
//
    // return newArray;
// }
// console.log(getArray(6));

//*Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему.

//&1 ый вариант


// function getArray(a, b){
    // let max;
    // let min;
    // let newArray = [];
// 
    // if(a>b){
        // max = a;
        // min = b;
    // }
    // else if(b>a){
        // max = b;
        // min = a;
    // }
    // else{
        // return 0;
    // }
// 
    // for(let i=max; i>min; i--){
        // newArray.push(i);
    // }
// 
    // return newArray;
// }
// 
// console.log(getArray(20, 4));
// console.log(getArray(10, 34));
// console.log(getArray(10, 10));


//& 2-ой вариант
// function getArray1(a, b){
    // let newArray = [];
// 
    // if(a>b){
        // for(let i=a; i>b; i--){
            // newArray.push(i);
        // }
    // }
    // else if(b>a){
        // for(let i=b; i>a; i--){
            // newArray.push(i);
        // }
    // }
    // else{
        // return 0;
    // }
    // return newArray;
// }
// 
// console.log(getArray1(20, 4));
// console.log(getArray1(10, 34));
// console.log(getArray1(10, 10));




