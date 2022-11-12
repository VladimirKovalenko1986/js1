const btnAdd = document.querySelector('button[data-add]');
const btnReset = document.querySelector('button[data-reset]');
const velueInputs = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span');

let total = 0;

// btnAdd.textContent = 'qwqwqqwqw';
// Можем поменять название кнопки

// console.log(btnAdd.textContent);
// Подключаем доступ к элементу в данном примере это кнопка

btnAdd.addEventListener('click', function () {
    //Пишем код который будет вызываться при клике
    console.log('click hehehehehe');

    const value = Number(velueInputs.value);

    console.log(value);

    total += value;
    outputEl.textContent = total;

    console.log('total: ', total);

    velueInputs.value = '';
    // После нажатия очищаем строку инпут
});
// Передаем событие клик - это то что мы делаем а второе это функция

btnReset.addEventListener('click', function () {
    total = 0;
    outputEl.textContent = total;
});
