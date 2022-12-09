// Из функции можем вернуть другую функцию

// const fnA = function (parameter) {
//     const innerVariable = 'Значение внтреней переменной функции fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('Это вызов innerFunction');
//     };

//     return innerFunction;
// };

// const fnB = fnA(444);
// fnB();
// console.log(fnB);

// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'суп');
// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'кофе');

// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`);
//     };

//     return makeDish;
// };

// const mango = makeSheff('Mango');

// mango('котлеты');
// mango('пирожок');

// const poly = makeSheff('Poly');

// poly('суп');
// poly('омлет');

// Округлятор

const floatingPoint = 3.4567;
// Округляем дол целого

// const someIn = Math.round(floatingPoint);
// console.log(someIn);
// Округляем до 2-х символов после запятой

// const withDecimals = Number(floatingPoint.toFixed(2));
// console.log(withDecimals);

// Пишем функцию котрая делает окургление

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.1656, 2));

// Немного оптимизируем

// const rounder = function (places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.2121));
// console.log(rounder3(3.12121));

// Пример с заплатой

// const salaryMaagerFacktory = function (employeeName, baseSalary = 0) {
//     let salary = baseSalary;

//     return {
//         reise(amount) {
//             salary += amount;
//         },

//         lower(amount) {
//             salary -= amount;
//         },
//         current(amount) {
//             return `Текущая заплата ${employeeName} - ${salary}`;
//         },
//     };
// };

// const salaryManager = salaryMaagerFacktory('Mango', 5000);

// console.log(salaryManager.current());
