// const add = function (a, b) {
//     console.log(a);
//     console.log(b);

//     const result = a + b;
//     console.log('a + b:', result);
//     console.log('Выполняеться функция add!!!');
// };

// add(2, 3);
// add(10, 30);
// add(50, 100);
// вызываем функцию
// add();
// add();
// Можем пременить несколько раз

// Напиши функцию calculateTotalPrice(item)
// которая принимает массив цен (чисел) и возвращает их сумму

// const cart = [54, 28, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }

// console.log('Total:', total);

// const calculateTotalPrice = function (items) {
//     console.log(items);
//     let total = 0;

// return 2222;
// присваиваем под каждой функцией значение
// for (const item of items) {
//     total += item;
// }
// return total;
// Для того чтобы функция выполнилась
// };

// const r1 = calculateTotalPrice([1, 2, 3]);
// Можно все возвести в переменную

// console.log(`Общая сумма покупок: ${r1}`);
// console.log(calculateTotalPrice([5, 10, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));

// напиши функцию logItems(item) для перебора и логирования массива

// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// };

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);

// напиши функцию findLogin(allLogins, login) для поиска логина
// если логина нет, вывести сообщение 'Пользователь [логин] не найден'
// если нали логин, вывести сообщение 'Пользователь [логин] найден'

// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFined) {
//     for (const login of allLogins) {
//         if (login === loginToFined) {
//             return `Пользователь ${loginToFined} найден`;
//         }
//     }
//     return `Пользователь ${loginToFined} не найден`;
// };

// const findLogin = function (allLogins, loginToFined) {
//     return allLogins.includes(loginToFined)
//         ? `Пользователь ${loginToFined} найден.`
//         : `Пользователь ${loginToFined} не найден.`;
// };

// console.log(findLogin(logins, 'avocod4r'));
// console.log(findLogin(logins, 'kiwidab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

//напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве
// при условии что числа уникальные (не повторяються)

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallesNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallesNumber) {
//         smallesNumber = number;
//     }
// }
// console.log('SmallesNumber:', smallesNumber);

// const findSmallesNumber = function (numbers) {
//     let smallesNumber = numbers[0];

//     for (const number of numbers) {
//         if (number < smallesNumber) {
//             smallesNumber = number;
//         }
//     }
//     return smallesNumber;
// };

// console.log(findSmallesNumber([3, 8, 12, -2, 15]));
// console.log(findSmallesNumber([100, 54, 8, 12, 47]));
// console.log(findSmallesNumber([7, 21, 84, 15, 4]));

// напиши функцию changeCase(string) которая заменяет регистр
// каждого символа в строке на противоположный
// Например, если строка 'JavaScrip', то на выходе должно быть 'jAVAsCRIPT'

// const string = 'qWeRTzxCv';
// const letters = string.split('');
// let invertedString = '';

// for (const letter of letters) {
//     const isEqual = letter === letter.toLowerCase();
//     invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log('invertedString:', invertedString);

// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';
// console.log(letters);

//     for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();

//         invertedString += isInLowerCase
//             ? letter.toUpperCase()
//             : letter.toLowerCase();
//     }

//     return invertedString;
// };

// console.log(changeCase('qweRTU'));
// console.log(changeCase('mAnGo'));
// console.log(changeCase('AjAx'));

// Напиши фукцию slugify(string) которая получает строку и возвращает URL-slug
// Строка состоит только из букв и пробелов

// const title = 'Top 10 benefits of React framework';

// 1 variant
// const normalizedTitle = title.toLowerCase();
// const word = normalizedTitle.split(' ');
// const slug = word.join('-');

// 2 variant
// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug);
// console.log(slug1);

// const slugify = function (string) {
// const normalizedTitle = string.toLowerCase();
// const word = normalizedTitle.split(' ');

// const slug = word.join('-');

// return string.toLowerCase().split(' ').join('-');
// };

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technival writing tips for non-native English speakers'));

//Argument

// const fn = function (a, b, c, ...args) {
// 1 variant
// console.log(arguments);
// Псевдо массив
// const args = Array.from(arguments);
// Преобразовывваем псевдо массив в массив
// console.log(args);

//  2 variant
// в функции задаем название (...args)
//     console.log(`${a} ${b} ${c}`);
//     console.log(args);
// };

// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);

// напиши функцию add для сложения произвольного количества аргументов (числа)
// Arrey.from()
// Операция ...(rest)

// const add = function (...args) {
//     console.log(args);

//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//     }
//     return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

// напиши функцию filterNumbers(array [, number1, ...]) которая:
// - первым аргументом принимает массив чисел
// - после первого аргумента может быть произвольное количество других аргументов
// которые будут числами
// - функция должна вернуть новый массив, в котром будут только те аргументы
//  начиная со второго
// для которых есть аналог в оригинальном массиве

// const findSmallesNumber = function (array, ...args) {
//     console.log('array:', array);
//     console.log('args:', args);
//     const uniqueElements = [];

//     for (const element of array) {
//         console.log(element);

//         if (args.includes(element)) {
//             uniqueElements.push(element);
//             console.log(`${element} есть везде!`);
//         }
//     }
//     return uniqueElements;
// };

// console.log(findSmallesNumber([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(findSmallesNumber([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(findSmallesNumber([100, 200, 300, 400, 500], 7, 12, 200, 64));
