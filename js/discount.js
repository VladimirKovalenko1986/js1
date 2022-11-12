// напиши скрипт подсчет суммы покупки со скидкой в зависимости
// от потраченой суммы за все время (партнерская программа)

// - Общая сумма потраченого хранения в переменно totalSpent
// -Сумма текущего платежа храниться в переменной payment
// - Скидка храниться в переменной discount

// Если потрачено от (100 до 1000) - бронзовый партнер скидка 2%
// Если потрачено от (1000 до 5000) - серебряный партнер, скидка 5%
// Если потрачено более (5000) - золотой партнер, скидка 10%
// Если потрачено менее (100) - не партнер скидка 0%

// Результат вывести сообщение
// 'Оформляем заказ на сумму (сумма) со скидко (скидка)%'

let totalSpend = 2000;
let payment = 500;
let discount = 0;

if (totalSpend < 100) {
    console.log('не партнер скидка 0%');
} else if (totalSpend >= 100 && totalSpend < 1000) {
    console.log('Бронзовый партнер скидка 2%');
    discount = 0.02;
} else if (totalSpend >= 1000 && totalSpend < 5000) {
    console.log('серебряный партнер, скидка 5%');
    discount = 0.05;
} else {
    console.log('золотой партнер, скидка 10%');
    discount = 0.1;
}
payment -= payment * discount;
// payment = payment - payment * discount;
console.log(
    `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,
);

totalSpend += payment;
console.log(`Общая сумма потраченого в магазине: ${totalSpend}`);