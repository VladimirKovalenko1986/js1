const message = 'в этой строке 26 символов.';
// console.log(message.length);
// Узнаем сколько символов

const firstName = 'Chelsy';
const lastName = 'Emerals';
// const fullName = firstName + lastName;
const fullName = firstName + ' ' + lastName;
// Если хотим пробел
// console.log(fullName);
// Канкатинация строк, сшивание

// напиши скрипт который выведет строку в формате:
// "Гость x y поселяется в z номер q"
// "Подставим вместо x y z q знечение переменный"
const room = 716;
const type = 'VIP';

// const welcomeMsg =
//     'Гость ' +
//     firstName +
//     ' ' +
//     lastName +
//     ' поселяется в ' +
//     type +
//     ' номер ' +
//     room;
// Делать так не удобно
// console.log(welcomeMsg);

// Шаблонные строки

const quantity = 10;
const orderMsg = `вы заказываете ${quantity} холодильников`;
// console.log(`qwq qwq wqwq  qw qwqwqwq ${5 + 5}`);
// ставим косые кавычки и пишем произвольную строку но сюда можно подставлять динамически е значения через $
console.log(orderMsg);

const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
console.log(welcomeMsg);
