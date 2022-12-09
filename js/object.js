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

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];

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

// const cart = {
//     items: [],

//     getItems() {
//         return this.items;
//     },

//     add(product) {
//         for (const item of this.items) {
//             if (item.name === product.name) {
//                 item.quantity += 1;

//                 return;
//             }
//         }

//         const newProduct = {
//             ...product,
//             quantity: 1,
//         };
//         this.items.push(newProduct);
//     },
//     remove(productName) {
//         const { items } = this;

//         for (let i = 0; i < items.length; i += 1) {
//             const { name } = items[i];

//             console.log(this.items[i]);

//             if (productName === name) {
//                 console.log('Нашли такой продукт:', productName);
//                 console.log('Индекс:', i);

//                 items.splice(i, 1);
//             }
//         }
//     },

//     clear() {
//         this.items = [];
//     },

//     countTotalPrice() {
//         const { items } = this;
//         let total = 0;

//         for (const { price, quantity } of items) {
//             total += price * quantity;
//         }

//         return total;
//     },

//     increaseQuantity(productName) {},

//     decreaseQuantity(productName) {},
// };

// // console.log(cart.getItems());

// cart.add({ name: 'Яблоко', price: 50 });
// cart.add({ name: 'Лимон', price: 60 });
// cart.add({ name: 'Лимон', price: 60 });
// cart.add({ name: 'Абрикос', price: 60 });
// cart.add({ name: 'Мандарин', price: 110 });
// cart.add({ name: 'Мандарин', price: 110 });
// cart.add({ name: 'Мандарин', price: 110 });

// console.table(cart.getItems());

// console.log('Total:', cart.countTotalPrice());

// cart.remove('Абрикос');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// !===========================================================================================
// Операция spread распыление

// Array.prototype.concat(); и аналог через spread

// const numbers = [1, 2, 3].concat([4, 5, 6], [6, 7, 8]);

// console.log(numbers);

// const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];

// console.log(numbers);

// !===========================================================================================

// Поиск самой маленькой и большой температуры

// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(...temps));

// console.log(Math.min(...temps));

// !===========================================================================================

// Сшиваем несколько массивов в один через concat и spread

// const lastWeekTemps = [1, 2, 3];
// const currentWeekTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];
// console.log(allTemps);

// !===========================================================================================

// Распыление обьектов

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// // const c = Object.assign({}, a, b);

// const c = {
//     ...a,
//     ...b,
// };

// console.log(c);

// !===========================================================================================

// Деструктуризация обтектов

// const playlist = {
//     name: 'Мой супер плей лист',
//     rating: 5,
//     tracks: ['трек - 1', 'трек - 2', 'трек - 3'],
//     trackCount: 3,
// };

// const { rating, tracks, name, trackCount } = playlist;

// console.log(name, rating, tracks, trackCount);

// !===========================================================================================

// Патерн обьекта

// const showProfileInfo = function (userProfile) {
//     const {
//         name,
//         tag,
//         location,
//         avatar,
//         stats: { followers, views, likes },
//     } = userProfile;

//     console.log(name, tag, location, avatar, followers, views, likes);
// };

// const profile = {
//     name: 'Jacki Chan',
//     tag: 'jgluk',
//     location: 'Ocho Rios Jamaica',
//     avatar: 'https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-05/uk.md',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// showProfileInfo(profile);
