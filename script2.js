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

// 39 Урок Динамическая типизация
// Превращение в строку
// console.log(typeof(String(null)));


// console.log(typeof(5 + ""));


// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// // Превращение в число
// //1

// console.log(typeof(Number('4')));

// //2

// console.log(typeof(+'5'));

// //3

// console.log(typeof(parseInt('15px', 10)));

// let answ = +prompt('Hello','');


// // В булиновое значине

// // 0, '', null, undefined, NaN; - Все это превращается в false

// // 1

// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

// //2 

// console.log(typeof(Boolean('4')));

// //3 

// console.log(typeof(!!"4444"));

// Урок 40 Закмыкание функций

// let number = 5; debugger

// function logNumber() {
//     let number = 4; debugger
//     console.log(number);
// }

// number = 6;

// logNumber(); debugger
// const n = 1;
// function createCounter() {
//     let counter = 0;

//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     }

//    return myFunction; 
// }

// const increment = createCounter();

// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);



// let x =5;
// alert(x++);

// function pow(x, n) {
//     let result = 1;

//     for(let  i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n -1);
//     }
// }

// function factorial(x) {
//     if  (x === 1) {
//         return x;
//     } else {
//         return x * factorial(x - 1);
//     }
// }


let students = {
    js: [{
        name: 'Jonh',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],

        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
        
    }
};

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subcourse of Object.values(course)) {
                    students += subcourse.length;
                    
                    for (let i = 0; i < subcourse.length; i++) {
                        total += subcourse[i].progress;
                    }
                }
            }
        }
    


    return total / students;
}




//console.log(getTotalProgressByIteration(students));


function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);