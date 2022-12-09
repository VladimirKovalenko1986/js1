// const players = [
//     {
//         id: 'player-1',
//         name: 'Mango',
//         timePlayed: 310,
//         points: 54,
//         online: false,
//     },

//     {
//         id: 'player-2',
//         name: 'Poly',
//         timePlayed: 470,
//         points: 92,
//         online: true,
//     },

//     {
//         id: 'player-3',
//         name: 'Kiwi',
//         timePlayed: 230,
//         points: 48,
//         online: true,
//     },

//     {
//         id: 'player-4',
//         name: 'Ajax',
//         timePlayed: 150,
//         points: 71,
//         online: false,
//     },

//     {
//         id: 'player-5',
//         name: 'Chelsy',
//         timePlayed: 80,
//         points: 48,
//         online: true,
//     },
// ];

// const number = [5, 10, 15, 20, 25];

// !===================================================================!
// Метод ForEach замена for

// number.forEach(function (number, index, array) {
//     console.log(`number:`, number);
//     // Восновном используют только number потому как метод принимают
// });

// number - массив в еденичной, index - индекс, array - ссылка на оригинальный массив

// !===================================================================!

// Map

// const doubledNumbers = numbers.map(number => {
//     console.log(number);

//     return number * 2;
// });

// console.log(numbers);
// console.log(doubledNumbers);

// const playerNames = players.map(player => player.name);

// console.log(playerNames);

// const playerIds = players.map(player => player.id);

// console.log(playerIds);

// Вытягиваем несколь элементов

// const res = players.map(player => {
//     return {
//         name: player.name,
//         online: player.online,
//     };
// });

// console.log(res);

// Дискруцианируем

// const res = players.map(({ name, online }) => ({
//     name,
//     online,
// }));

// console.log(res);

// Делаем новый массив и обнавляем элементы для всех

// const upatedPlayers = players.map(player => ({
//     ...player,
//     points: player.points * 1.1,
// }));

// console.log(upatedPlayers);

// Делаем новый массив и обнавляем элементы для одного

// const playerIdToUpdate = 'player-3';

// const updatePlayers = players.map(player => {
//     console.log(player.id);
//     if (playerIdToUpdate === player.id) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//         };
//     }

//     return player;
// });

// Напишем сокращенее

// const updatePlayers = players.map(player =>
//     playerIdToUpdate === player.id
//         ? { ...player, timePlayed: player.timePlayed + 100 }
//         : player,
// );

// console.table(updatePlayers);

// !===================================================================!

// Filter

// const filteredNumbers = numbers.filter(number => number > 15);
// console.log(filteredNumbers);

// Игроки которые в сети

// const onlinePlayers = players.filter(player => player.online);
// console.table(onlinePlayers);

// Список играков которые не всети

// const offlinePleyers = players.filter(player => !player.online);
// console.table(offlinePleyers);

// Список играков которых время больше 250

// const hardcornPlayers = players.filter(player => player.timePlayed > 250);
// console.table(hardcornPlayers);

// !===================================================================!

// Find

// const number = numbers.find(number => number === 10);
// console.log(number);

// const playerIdToFind = 'player-3';

// const playerWithId = players.find(player => player.id === playerIdToFind);
// console.log(playerWithId);

// Запишим функцию

// const finPlayerById = (allPlayers, playerId) =>
//     allPlayers.find(({ id }) => id === playerId);

// console.log(finPlayerById(players, 'player-1'));
// console.log(finPlayerById(players, 'player-4'));

// !===================================================================!

// Метод every and some

// const isAllOnline = players.every(player => player.online);
// console.log(isAllOnline);

// const allTimePlayers = players.every(player => player.timePlayed > 200);
// console.log(allTimePlayers);

// const isAnyOnline = players.some(player => player.online);
// console.log(isAnyOnline);

// !===================================================================!

// Метод Reduce

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// // console.log(`Number:`, number);
// // console.log(`acc:`, acc);

// console.log(total);

// Подсчитаем общую сумму зарпалты

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//     (total, value) => total + value,
//     0,
// );

// console.log(totalSalary);

// Общае количество часов

// const totalTimePlayed = players.reduce(
//     (totalTime, player) => totalTime + player.timePlayed,
//     0,
// );

// console.log(totalTimePlayed);

// Корзина товаров

// const cart = [
//     { label: 'Apples', price: 100, quantity: 2 },
//     { label: 'Bananas', price: 120, quantity: 3 },
//     { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmout = cart.reduce(
//     (total, { price, quantity }) => total + price * quantity,
//     0,
// );

// console.log(totalAmout);

// собираем все теги из  твитов

// const tweets = [
//     {
//         id: '000',
//         likes: 5,
//         tags: ['js', 'nodejs'],
//     },

//     {
//         id: '001',
//         likes: 2,
//         tags: ['html', 'css'],
//     },

//     {
//         id: '002',
//         likes: 17,
//         tags: ['html', 'js', 'nodejs'],
//     },

//     {
//         id: '003',
//         likes: 8,
//         tags: ['css', 'react'],
//     },

//     {
//         id: '004',
//         likes: 0,
//         tags: ['js', 'nodejs', 'react'],
//     },
// ];

// const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);

// console.log(allTags);

// const tagStats = allTags.reduce(
//     (acc, tag) => ({
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     }),
//     {},

// if (acc[tag]) {
//     return {
//         ...acc,
//         [tag]: acc.tag + 1,
//     };
// }

// return {
//     ...acc,
//     [tag]: 1,
// };
// );

// console.log(tagStats);

// !===================================================================!

// Метод Sort

// const numbers = [1, 9, 6, 2, 3];

// numbers.sort();
// console.log(`Numbers:`, numbers);

// const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log(`Letters:`, letters);

// numbers.sort((curEl, nextEl) => {
//     // return curEl - nextEl;
//     // Сортировка по возрастанию

//     return nextEl - curEl;
//     // Сортировка по убыванию
// });

// console.log(numbers);

// const copy = [...numbers];
// console.log(copy);

// Копиб сортируем

// copy.sort();
// console.log(copy);

// Можно сразузадать сортировку не создававя промежуточную константу

// const descSortedNumbers = [...numbers].sort((a, b) => b - a);
// Будет сразу по убыванию
// const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
// Будет по возрастанию

// console.log(ascSortedNumbers);

// Кастомная сартировка сложных типов

// const players = [
//     {
//         id: 'player-1',
//         name: 'Mango',
//         timePlayed: 310,
//         points: 54,
//         online: false,
//     },

//     {
//         id: 'player-2',
//         name: 'Poly',
//         timePlayed: 470,
//         points: 92,
//         online: true,
//     },

//     {
//         id: 'player-3',
//         name: 'Kiwi',
//         timePlayed: 230,
//         points: 48,
//         online: true,
//     },

//     {
//         id: 'player-4',
//         name: 'Ajax',
//         timePlayed: 150,
//         points: 71,
//         online: false,
//     },

//     {
//         id: 'player-5',
//         name: 'Chelsy',
//         timePlayed: 80,
//         points: 48,
//         online: true,
//     },
// ];

// const sortedByBestPlayers = [...players].sort(
//     (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed,
// По убыванию

// return prevPlayer.timePlayed - nextPlayer.timePlayed;
// По возрастанию
// );

// console.table(sortedByBestPlayers);

// Сортировка по имени

// const byName = [...players].sort((a, b) => {
//     const result = a.name[0] > b.name[0];

//     if (result) {
//         return 1;
//     }

//     if (!result) {
//         return -1;
//     }
// });

// console.table(byName);

// !===================================================================!

// Метод Flat

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];

// console.log(array.flat(1));
// console.log(array.flat(2));
// console.log(array.flat(3));
// цыфра показывает на сколько вкладеность будет разглаживания массива

// // const tweets = [
// //     {
// //         id: '000',
// //         likes: 5,
// //         tags: ['js', 'nodejs'],
// //     },

// //     {
// //         id: '001',
// //         likes: 2,
// //         tags: ['html', 'css'],
// //     },

// //     {
// //         id: '002',
// //         likes: 17,
// //         tags: ['html', 'js', 'nodejs'],
// //     },

// //     {
// //         id: '003',
// //         likes: 8,
// //         tags: ['css', 'react'],
// //     },

// //     {
// //         id: '004',
// //         likes: 0,
// //         tags: ['js', 'nodejs', 'react'],
// //     },
// // ];

// // const tags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

// // const tags = tweets.map(t => t.tags).flat();
// // console.log(tags);

// // Метод flatMap для распыления в один массив

// // const tagsSecond = tweets.flatMap(t => t.tags);
// // console.log(tagsSecond);

// // const stats = tags.reduce((acc, tag) => {
// //     return {
// //         ...acc,
// //         [tag]: acc[tag] ? acc[tag] + 1 : 1,
// //     };
// // }, {});

// // console.log(stats);

// !===================================================================!

// // Метод chainingс-цепочки вызовов

// const numbers = [1, 5, 2, 4, 3];

// Фильтруем те что больше 2

// const greaterThenTwo = numbers.filter(num => num > 2);
// console.log(greaterThenTwo);
//  То что отфильтровали увеличиваем в три раза

// const multByThree = greaterThenTwo.map(num => num * 3);
// console.log(multByThree);

//Сортируем то что вышло по возрастанию

// const sorted = multByThree.sort((a, b) => a - b);
// console.log(sorted);

// Делаем в одной формуле

// const sortedFull = numbers
//     .filter(num => num > 2)
//     .map(num => num * 3)
//     .sort((a, b) => a - b);

// console.log(sortedFull);

// сортируем тех кто онлайн по рангу
// - вначале фильруем
// - сортируем

// const players = [
//     { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//     { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//     { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//     { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
// ];

// const onlineAndSorted = players
//     .filter(player => player.isOnline)
//     .sort((a, b) => a.rank - b.rank);
// console.log(onlineAndSorted);

// Cheining в методах обьекта как jquery

// const element = {
//     class: '',
//     hovered: false,
//     changeClass(cls) {
//         this.class = cls;

//         return this;
//     },
//     toggleHovered() {
//         this.hovered = !this.hovered;

//         return this;
//     },
// };

// element.toggleHovered().changeClass('open');
// console.log(element);

// !===================================================================!
