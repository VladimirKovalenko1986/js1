// Напиши скрипт обработки покупки в агазине

// Баланс пользователя храниться в оперативной balance
// Сумма покупки храниться в переменно payment

// перед проверкой ввести сообщение:
// "Общая стоимость заказа (число) кредитов. Проверяем количество доступных средств на счету"

// Если сумма покупки не привышает баланс:
//  - Вычесть из баланса сумму покупки
//  - вычесть сообщение "На счету осталось (число) кредитов"

// Если сумма привышает баланс:
// - "Вывести сообщение "На счету недостаточно средств для проведение операции!"
// - В конце вывести сообщение "Операция завершена"

// 1 - Переменные
let balance = 10000;
const payment = 2000;

console.log(
    `Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету`,
);

if (balance >= payment) {
    console.log('ok');
    balance -= payment;

    console.log(`На счету осталось ${balance} кредитов`);
} else {
    console.log('На счету недостаточно средств для проведение операции!');
}

console.log('Операция завершена');
//  2 - Есле сумма <= баланс