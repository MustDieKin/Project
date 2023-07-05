'use strict';


// Урок 33.
// const arr = [1, 22, 23, 16, 8];

// arr.sort(compareNan);
// console.log(arr);


// function compareNan(a, b) {
//     return a - b;
// }
// arr[99] = 0
// console.log(arr.length);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);

// });



// const str = prompt('',"");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// Урок 35 Клонирование объектов

// let a = 5, //в приметивных данных объекты могут заменяться
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const  obj = { //сдесь идет передача по ссылке, а модифицируя копию ты модефецируешь объект
//     a: 5,
//     b: 1
// };

// const copy = obj; 
// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for(key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers. a = 10;

// console.log(newNumbers);
// console.log(numbers);


// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'ffdsd';

// console.log(newArray);
// console.log(oldArray);


//Оператор разворота

// const video = ['youtube', 'rutube', 'mail'],
//       blogs = ['wordpress','livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// console.log(newObj);
// console.log(newAarray);


//Урок 36. ООП прототипно ориентированное программирование

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello')
//     }
// };

// // // const jonh = {
// //     health: 100

// // };

// const jonh = Object.create(soldier); // создание прототипа солдат = джон

// // тоже самое что и ниже jonh.__proto__= soldier;

// // Object.setPrototypeOf(jonh, soldier);

// console.log(jonh.armor);
// jonh.sayHello();

// 37 Урок