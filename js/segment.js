// Скриппт который проверяет вхождение чисел отрезков x1 и x2

const x1 = 10;
const x2 = 30;

const number = 50;
// проверяем входит ли numder до x1
console.log(`число ${number} попадает в отрезок до ${x1}? `, number < x1);
// проверяем входит ли numder после x2
console.log(`число ${number} попадает в отрезок после ${x2}? `, number > x2);
// входит число от x1 до x2
const res = number > x1 && number < x2;
console.log(`число ${number} попадает в отрезок от ${x1} до ${x2}? `, res);
// до x1 и после x2
const res2 = number < x1 || number > x2;
console.log(
    `число ${number} попадает в отрезок до ${x1} или после ${x2}? `,
    res2,
);
