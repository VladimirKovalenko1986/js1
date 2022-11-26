// !===========================================================================================

// Образец обьекта

// const playlist = {
//     name: 'Супер плей лист',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };
// //Получаем доступ до определенного элемента
// // console.log(playlist.name);
// // console.log(playlist.rating);
// // console.log(playlist.tracks);

// const propertyName = 'tracks';

// console.log(playlist['rating']);

// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

// !===========================================================================================

// Короткая запись свойств

// const userName = 'Mango';
// const email = 'mango@mail.com';

// const singnupData = {
//     userName,
//     email,
// };

// console.log(singnupData);

// !===========================================================================================

// Вычисляемые свойства

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     [inputName]: 5,
// };

// console.log(colorPickerData);

// !===========================================================================================

// Ссылочный тип {} === {}

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// const a = [1, 2, 3];

// a.hello = 'qwqwe';

// console.log(a);

// const fn = function () {
//     console.log('hello');
// };

// fn.hello = 'dfdf';

// console.dir(fn.hello);

// !===========================================================================================

// const playlist = {
//     name: 'Супер плей лист',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,

//     // Старый метод вызова функции

//     // getName: function () {
//     //     console.log('Ага это getName :');
//     // },

//     // Новый метод функции

//     getName(a) {
//         console.log('Ага это getName :', a);
//     },
// };

// // console.log(playlist);

// playlist.getName(5);

// !===========================================================================================

// Методы

// const playlist = {
//     name: 'Супер плей лист',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     changeName(newName) {
//         console.log('this внутри changeName :', this);

//         this.name = newName;
//     },

//     addTrack(track) {
//         this.tracks.push(track);
//     },

//     updateRating(newRating) {
//         this.rating = newRating;
//     },

//     getTrackCount() {
//         return this.tracks.length;
//     },
// };

// console.log(playlist.getTrackCount());

// playlist.changeName('Новое имя!');

// playlist.addTrack('Новый трек');
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);
// console.log(playlist);

// !===========================================================================================

// Перебор обьектов

// const feedback = {
//     goog: 5,
//     neutral: 10,
//     bad: 3,
// };

// let totalFeedback = 0;

// Переблр ключей обьекта

// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }

// console.log(`Total :`, totalFeedback);

// Перебор значений ключей обьекта

// const values = Object.values(feedback);

// console.log(values);

// for (const value of values) {
//     console.log(value);

//     totalFeedback += value;
// }

// console.log(`Total :`, totalFeedback);

// !===========================================================================================

// Разбор колекции (массивов обьектов)

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];

// console.table(friends);

// for (const friend of friends) {
//     console.log(friend);

//     friend.newprop = 555;
// }

// console.table(friends);

// !===========================================================================================

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
];

// console.table(friends);

// Ищим друга по имени

// const findFriendByName = function (allFriend, friendName) {
//     for (const friend of allFriend) {
//         console.log(friend);
//         console.log(friend.name);

//         if (friend.name === friendName) {
//             return 'Нашел имя!!!!';
//         }
//     }
//     return 'Не нашли!!!!';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));
// const getAllNames = function()

// !===========================================================================================

// Получить массив имен наших друзей

// const getAllNames = function (allFriends) {
//     const allNameFriends = [];

//     for (const friend of allFriends) {
//         console.log(friend.name);

//         allNameFriends.push(friend.name);
//     }

//     return allNameFriends;
// };

// console.log(getAllNames(friends));

// !===========================================================================================

//Получить всех друзей которые on-line

// const getOnlineFriends = function (allFriends) {
//     const onlineFriends = [];

//     for (const friend of friends) {
//         console.log(friend);
//         console.log(friend.online);
//         if (friend.online) {
//             onlineFriends.push(friend);
//         }
//     }
//     console.table(onlineFriends);
//     return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

// !===========================================================================================

// Получить всех друзей которые off-line

// const getOfflineFriends = function (allFriends) {
//     const offlineFriends = [];

//     for (const friend of friends) {
//         console.log(friend.online);
//         if (!friend.online) {
//             offlineFriends.push(friend);
//         }
//     }
//     console.table(offlineFriends);
//     return offlineFriends;
// };

// console.log(getOfflineFriends(friends));

// !===========================================================================================

// Создадим два массива где в первый массив будут те которые online, а во второй те которые offline

// const getFriendsByOnlineStatus = function (allFriends) {
//     const friendsByStatus = {
//         online: [],
//         offline: [],
//     };

//     for (const friend of allFriends) {
//         console.log(friend);

//         if (friend.online) {
//             friendsByStatus.online.push(friend);
//             continue;
//         }

//         friendsByStatus.offline.push(friend);
//     }

//     return friendsByStatus;
// };

// console.log(getFriendsByOnlineStatus(friends));

// !===========================================================================================

// Подсчет количества свойств

// const x = {
//     a: 1,
//     b: 2,
//     c: 50,
//     d: 100,
// };

// console.group(Object.keys(x).length);

// !===========================================================================================

// Делаем корзину товаров

const cart = {
    item: [],
    getItems() {},
    add(product) {},
    remove(productName) {},
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
};

console.table(cart.getItems());

cart.add({ name: 'Яблоко', price: 50 });
cart.add({ name: 'Лимон', price: 60 });
cart.add({ name: 'Абрикос', price: 60 });
cart.add({ name: 'Мандарин', price: 110 });

console.table(cart.getItems());
