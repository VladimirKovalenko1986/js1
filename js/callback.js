// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);

//     // Вызов
//     callback(100);
// };

// const fnB = function (number) {
//     console.log('Это лог при вызове fnB', number);
// };

// fnA('asasas', fnB);

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// };

// const add = function (x, y) {
//     return x + y;
// };

// const sub = function (x, y) {
//     return x - y;
// };

// doMath(2, 3, add);
// doMath(10, 8, sub);

// Литерал функции

// doMath(2, 3, function (x, y) {
//     return x + y;
// });
// doMath(10, 8, function (x, y) {
//     return x - y;
// });

// Литерал функции в стрелочной форме

// doMath(2, 3, (x, y) => x + y);
// doMath(10, 8, (x, y) => x - y);

// const filter = function (arrey, test) {
//     const filteredArrey = [];

//     for (const el of arrey) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArrey.push(el);
//         }
//     }

//     return filteredArrey;
// };

// const callback1 = function (value) {
//     return value >= 3;
// };

// const callback2 = function (value) {
//     return value <= 4;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 7, 8, 9, 10], callback2);
// console.log(r2);
