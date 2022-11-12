// Цыкл For

// for (инициализация; условие; пост - выражение) {
// тело цикла
// }

// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }
// console.log('dsds');

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// Плохой способ

// напиши скрипт который подсчитывает общую сумму зарплат рботников
// кол-во работников храниться в переменной employees
// зарплата каждого работника это случайное число от 500 до 5000
// записать сумму в пепеменную totalSalary и вывести в консоль

//1 -сделать переменные
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;
// 2 - переюрать работников в цикле

// for (let i = 1; i <= employees; i += 1) {
// 3 - сгенерить случайную з/п
// const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
// );
// console.log(`ЗП работника номер ${i} - ${salary}`);
// 4 - прибавить к тоталу
// totalSalary += salary;
// }

// 5 -лог
// console.log('totalSalary: ', totalSalary);

// Напиши скрипт который подсчитывает сумму всех четырех чисел
// коротые входят в диапазон чисел в переменных от min до max
// Например, если min = 0 и max = 5, то диапазон 0-5 и в нем два четных числа
//  их сумма 6

// 1 - Добавить переменные
// const min = 6;
// const max = 13;
// let total = 0;

// 2-фор от мин до макс  с шагом в 1
// for (let i = min; i <= max; i += 1) {
//     console.log(i);
// 3 - поверяем остаток от деления

// 1 variant

// if (i % 2 !== 0) {
//     console.log('Не четное: ', i);
// continue; //- для продолжения
// }

// 2 variant

// if (i % 2 === 0) {
//     console.log('четное: ', i);
// 4 - Суммировать числа
// total += i;

//     console.log('четное: ', i);
//     total += i;
// }
// }
// 5- Лог
// console.log('total: ', total);
