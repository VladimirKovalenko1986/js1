// console.dir(_);
// Вызываем все функции

// Метод isEmpty()

// console.log(_.isEmpty({}));
// console.log(_.isEmpty({ a: 1 }));

// Метод get()

// const user = {
//     name: 'mango',
//     location: {
//         coords: [1, 2],
//         city: 'Lviv',
//     },
// };

// console.log(_.get(user, 'location.city'));

// [defaultValue] - не обязательный параметр

// Метод Union

// console.log(_.union([1, 2, 3], [(3, 4, 5)]));

// Соеденеяет два массива и добавляет в массив только
// уникальные элеименты те что повтаряются два раза на ставятся

// Метод range()

// console.log(_.range(1, 5, 2));

// первое значение это его начальное второе - это до какого не включительное и третье это его шаг
//  первое и третье значения не обязательные

// Метод sortBy()

// const users = [
//     { user: 'fred', age: 48 },
//     { user: 'barney', age: 36 },
//     { user: 'fred', age: 40 },
//     { user: 'barney', age: 34 },
// ];

// console.log(_.sortBy(users, user => user.age));
// console.log(_.sortBy(users, ['user', 'age']));

// Метод sum() - для массивов и sumBy() - для массивов обьектов

// console.log(_.sum([1, 2, 3, 4, 5]));
// Выводит сумму

// console.log(_.sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'));
// выводим сумму обьектов в массиве

// const players = [
//     { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//     { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//     { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//     { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
// ];

// console.log(_.sumBy(players, player => player.rank));
// выводим сумму rank

// Метод uniq() и uniqBy()
