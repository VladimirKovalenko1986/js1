// for of
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (const friend of friends) {
//     console.log(friend);
// }
// friend имя локальной переменной но водиночном числе

// Подсчитать общую сумму покупок
// const cart = [54, 28, 105, 70, 92, 17, 120];

// сделать переменную total до цикла
// let total = 0;
// Перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
// console.log(cart[i]);
// каждый элемент приплюсовать к total
//     total += cart[i];
// }

// for (const value of cart) {
//     total += value;
// }
// console.log('Total:', total);

// Добавить такс

// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.1);
// }

// console.log(cart);

// Напиши скрипт который подсчитает сумму всех четырех чисел в массиве

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

// 1 переменная total

// let total = 0;
// 2 перебрать массив
// for (let i = 0; i < numbers.length; i += 1) {
// console.log(numbers[i]);
// 3 на каждой итерации проверить элемент на четность
// if (numbers[i] % 2 === 0) {
// console.log('Четное!!!');
// 4 если четное плюс к тотал
// total += numbers[i];
//     }
// }

// for (const number of numbers) {
//     console.log(number);

//     if (number % 2 === 0) {
//         console.log('Четное!!!');
// 4 если четное плюс к тотал
//         total += number;
//     }
// }
// console.log('Total: ', total);

// Напиши скрипт поиска логина
// - Если логина нет, вывести сообщение "Пользователь [логин] не найден"
// - Если логин найден, вывести сообщение "Пользователь [логин] найден"

// const logins = ['m4ngoDoge', 'k1wida3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     console.log('login: ', login);

//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

// if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break;
// }
//     message = `Пользователь ${loginToFind} не найден`;
// }
// Можем записать сразу в переменной message
// console.log(message);

// for (const login of logins) {
//     console.log('login: ', login);

//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
// }

// console.log(message);

// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind} не найден`;

// console.log(message);

// Напиши скрипт поиска самого маленького числа в массиве
//  при условии что числа уникальные (не повторяються)

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallesNumber = numbers[0];

// for (const number of numbers) {
//     // console.log(number);

//     if (number < smallesNumber) {
//         smallesNumber = number;
//     }
// }

// console.log(smallesNumber);

// let bigesNumber = numbers[2];

// for (const number of numbers) {
// console.log(number);

//     if (number > bigesNumber) {
//         bigesNumber = number;
//     }
// }

// console.log(bigesNumber);

//Напиши скрипт который объеденяет все элементы массива в одной сторке
// Значение:
// Элементов может быть произвольное кол-во
// Пусть элементы массива в строке будут разделены запятой
// Сначада через for
// Потом через join()

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';
// for (const friend of friends) {
//     string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string);

// const string = friends.join(',');
// console.log(string);

//напиши скрипт который заменяет регистр каждого элемента в строке на противоположный
// Например, если строка 'JavaScrip', то на выходе должно быть трока 'jAVAsCRIPT'

// const string = 'JavaScrip';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

// if (letter === letter.toLowerCase()) {
//     console.log('Эта буква в нижнем регистре!!!! - ', letter);

//     invertedString += letter.toUpperCase();
// } else {
//     console.log('Эта буква в верхнем регистре!!!! - ', letter);
//     invertedString += letter.toLowerCase();
// }

//     invertedString +=
//         letter === letter.toLowerCase()
//             ? letter.toUpperCase()
//             : letter.toLowerCase();
// }
// console.log('invertedString:', invertedString);

// Делаем slug в URL из названия статьи (например на dev.to)
// Заголовок статьи состоит только из букв и пробелов

// 1 Нормалтзируем сторку
// 2 Разбираем по словам
// 3 Сшиваем в строкус разделителем

// Должно получится top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const word = normalizedTitle.split(' ');
// console.log(word);

// const slug = word.join('-');
// console.log(slug);

// const slag1 = title.toLowerCase().split(' ').join('-');

// console.log(slag1);

// напиши скрипт который считывает сумму элементов двух массиво

// const array1 = [5, 10, 15, 20];
// const arrey2 = [10, 20, 30];

// let total = 0;

// for (let i = 0; i < array1.length; i += 1) {
//     total += array1[i];
// }

// for (let i = 0; i < arrey2.length; i += 1) {
//     total += arrey2[i];
// }

// console.log(total);

// const numbers = array1.concat(arrey2);

// console.log(numbers);
// Сшиваем массив

// for (const number of numbers) {
//     total += number;
// }
// console.log(total);

// Работает с коллекцией карточек в trello
// Метод splice()
// - Удалить
//  - Добавить
//  - Обновить

// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
// ];

// console.table(cards);

// удаление (по индексу), методу indexOf()
// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);

// console.log(index);

// cards.splice(index, 1);
// Еслі запісать 2 єлемнета вместо 1 то он удалит 3 и 4
// console.table(cards);

// Добавление карточки

// const cardToUpdate = 'Карточка-6';
// const index = 3;
// cards.splice(index, 0, cardToUpdate);
// 1 с первого элемента, 0 - мы показываем что не чего не удаляем вставляем элементы 5, 10, 20
// console.table(cards);

// Обновление, Замена

// const cardToUpdate = 'Карточка-4';

// cards.splice(1, 1, 555);

// console.table(cards);

// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);

// console.log(index);

// cards.splice(index, 1, 'Обновление карточки-4');
// console.table(cards);
