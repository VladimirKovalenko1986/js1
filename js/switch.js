// Напиши скрипт выюора стоимотсти отеля по кол-вц звезд
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
// Если впеременной start что-то кроме чисел 1-5, выведи строки
// Токого кол-вы звезд нет

// const stars = 1;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (price === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Токого кол-ва звезд нет');
// }

// console.log(price);

// применяем метод Switch

// const stars = 1;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         // console.log('sfffdfd');
//         // Для того чтобы выводить сообщение
//         break;

//     case 2:
//         price = 30;
//         break;

//     case 3:
//         price = 50;
//         break;

//     case 4:
//         price = 70;
//         break;

//     case 5:
//         price = 120;
//         break;

//     default:
//         price = 'Такого кол-ва звезд нет';
// }

// console.log(price);

// Если одинаковые значение
// Для отеля 1,2 - 20$, 3,4 - 30$, 5 - 120$

// const stars = 4;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;
// } else if (price === 5) {
//     price = 50;
// } else {
//     console.log('Токого кол-ва звезд нет');
// }

// console.log(price);

// Svitch

// const stars = 1;
// let price;

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         // console.log('star 2');
//         // Для того чтобы выводить сообщение

//         break;

//     case 3:
//     case 4:
//         price = 30;
//         break;

//     case 5:
//         price = 50;
//         break;

//     default:
//         price = 'Такого кол-ва звезд нет';
// }

// console.log(price);

//Напиши скрипт выбора опции доставки товара
//Опции храняться в переменной option: 1 - самовыввоз, 2 - курьер, 3 - почта

// В переменную message записать сообщение в зависимости от опции
//  - Вы сможите забрать товар завтра с 12:00 в нашем офисе
//  - Курьер доставит заказа заварт ас 9:00 до 18:00
//  - Посылка будет отправлена сегодня
//  - Вам перезвонит менеджер

// 1 - сделать переменную
const option = 2;
let message;
// 2 - сдеоать switch 1,2,3
// 3 - в каждом кейсе записать в message строку
switch (option) {
    case 1:
        message = ' Вы сможите забрать товар завтра с 12:00 в нашем офисе';
        break;

    case 2:
        message = 'Курьер доставит заказ завара ас 9:00 до 18:00';
        break;

    case 3:
        message = 'Посылка будет отправлена сегодня';
        break;

    default:
        message = 'Вам перезвонит менеджер';
}
// 4 - сделать loge message

console.log(message);
