// !===============================!===========================!
// * Импорт файлов

import transaction from './transaction.js';

// import products from './products.js';

// const btnAdd = document.querySelector('button[data-add]');
// const btnReset = document.querySelector('button[data-reset]');
// const velueInputs = document.querySelector('input[data-value]');
// const outputEl = document.querySelector('.js-output span');

// let total = 0;

// btnAdd.textContent = 'qwqwqqwqw';
// Можем поменять название кнопки

// console.log(btnAdd.textContent);
// Подключаем доступ к элементу в данном примере это кнопка

// btnAdd.addEventListener('click', function () {
//Пишем код который будет вызываться при клике
//     console.log('click hehehehehe');

//     const value = Number(velueInputs.value);

//     console.log(value);

//     total += value;
//     outputEl.textContent = total;

//     console.log('total: ', total);

//     velueInputs.value = '';
// После нажатия очищаем строку инпут
// });
// Передаем событие клик - это то что мы делаем а второе это функция

// btnReset.addEventListener('click', function () {
//     total = 0;
//     outputEl.textContent = total;
// });

// !===============================!===========================!

// * Выбираем элементы

// Один элемент
// Если нечего ненашло возващает null

// const navEl = document.querySelector('ul');
// console.log('🚀 ~ navEl', navEl);

// const navItemEl = document.querySelector('.site-nav__item');
// console.log('🚀 ~ navItemEl', navItemEl);

// Все элементы
// Если нечего не нашло возвращает пустой массив

// const navLinksEl = document.querySelectorAll('.site-nav__link');
// console.log('🚀 ~ navLinksEl', navLinksEl);

// Делаем поиск относительно элемента
// Обязательно нужная const одиночного поиска

// const navLinksEl1 = navEl.querySelectorAll('.site-nav__link');
// console.log('🚀 ~ navLinksEl1', navLinksEl1);

// Код работает после того как нажали на кнопку

// const magicBtn = document.querySelector('.js-magic-btn');

// magicBtn.addEventListener('click', () => {
//     const navEl = document.querySelector('ul');
//     console.log('🚀 ~ navEl', navEl);

//     const navLinksEl = document.querySelectorAll('.site-nav__link');
//     console.log('🚀 ~ navLinksEl', navLinksEl);
// });

// !===============================!===========================!

//* Получаем доступ до элеиментов

// Делаем ссылку на картинку
// const imageEl = document.querySelector('.hero__image');
// console.log('🚀 ~ imageEl', imageEl);
// console.log(imageEl.src);

// Меняем картинку через js
// imageEl.src =
// 'https://cdn.pixabay.com/photo/2021/01/03/13/57/gingerbread-5884607_960_720.jpg';

// Делаем при клике на кнопку

// const magicBtn = document.querySelector('.js-magic-btn');

// magicBtn.addEventListener('click', () => {
//     const imageEl = document.querySelector('.hero__image');
//     console.log('🚀 ~ imageEl', imageEl);
//     console.log(imageEl.src);

//     imageEl.src =
//         'https://cdn.pixabay.com/photo/2021/01/03/13/57/gingerbread-5884607_960_720.jpg';

//     imageEl.alt = 'Это новая картинка';
// });

// Изменяем title
// const heroTitle = document.querySelector('.hero__title');
// console.log('🚀 ~ heroTitle', heroTitle);

// console.log(heroTitle.textContent);

// heroTitle.textContent = 'Я сладкий пирожочек!!!!';

// !===============================!===========================!

//* Методы

// console.log(imageEl.getAttribute('src'));
// console.log(imageEl.src);

// Удаляем атрибут
// imageEl.removeAttribute('src');

// Посмотреть есть ли этот атрибут
// console.log(imageEl.hasAttribute('src')); //вернет булевое значение

// !===============================!===========================!

// * Дата атрибут

// const actions = document.querySelectorAll('.js-actions button');
// console.log('🚀 ~ actions', actions[0].dataset.action);

// const magicBtn = document.querySelector('.js-magic-btn');

// magicBtn.addEventListener('click', () => {
//     const inputEl = document.querySelector('.js-input');
//     console.log('🚀 ~ magicBtn.addEventListener ~ inputEl', inputEl.value);
//     inputEl.value = 'rrrrr4444';
// });

// !===============================!===========================!

// * Работа с классами

// const magicBtn = document.querySelector('.js-magic-btn');

// magicBtn.addEventListener('click', () => {
//     const navEl = document.querySelector('.site-nav');
//     console.log('🚀 ~ navEl', navEl.classList);

// Добавляем класс через запятую можно добавить еще один
// navEl.classList.add('super-cool', 'qwqwq');

// Удаляем класс
// navEl.classList.remove('site-nav');

// Замена старого класса на новый
// navEl.classList.replace('super-cool', 'vava-cool');

// Проверяем есть ли этот класс возвращает буль
//     console.log(navEl.classList.contains('vava-cool'));
// });

// Получаем доступ до нашего элемента списка нав
// const navEl = document.querySelector('.site-nav');
// console.log('🚀 ~ navEl', navEl.classList);

// Добавлчем еще один класс
// navEl.classList.add('super-cool');

// делаем переключение по кнопке

// magicBtn.addEventListener('click', () => {
//     const navEl = document.querySelector('.site-nav');

// Если его нет он его добавит если он есть его удалит
//     navEl.classList.toggle('qwqwqwqw');
// });

// Находим элемент по ссылке
// const currentPageUrl = '/about';

// const linkEl = document.querySelector(
//     `.site-nav__link[href="${currentPageUrl}"]`,
// );
// console.log('🚀 ~ linkEl', linkEl);

// Присваиваем класс
// linkEl.classList.add('site-nav__link--current');

// !===============================!===========================!

// * Навигация по DOM

// const navEl = document.querySelector('.site-nav');
// console.log('🚀 ~ navEl', navEl);

// Получить ссылку на первый элемент

// const firstNavItem = navEl.querySelector('.site-nav__item');
// const firstNavItem = navEl.firstElementChild;
// console.log('🚀 ~ firstNavItem', firstNavItem);

// Получаем свойство всех детей элемента
// console.log(navEl.children);

// Получаем последний элемент
// console.log(navEl.lastElementChild);

// !===============================!===========================!

// * Создаем новое

// Создадим заголовок его не видно он только в памяти

// const titleEl = document.createElement('h1');
// titleEl.classList.add('page-title');
// titleEl.innerText = 'Это заголовок страницы!!!';
// console.log('🚀 ~ titleEl', titleEl);

// Быстрый доступ к разделам документа
// console.log(document.body);

// Просойденяем созданый элемнет к body
// Присойдиненный созданый элемент станет в конец скрипта
// document.body.appendChild(titleEl);

// const imageEl = document.createElement('img');
// imageEl.src =
//     'https://img1.akspic.ru/previews/7/8/8/9/6/169887/169887-gorod-zdanie-purpur-tsvetnoy-liniya_gorizonta-500x.jpg';
// imageEl.alt = 'Картинка для бога!!!!';
// imageEl.width = 540;
// Проверяем есть ли такая функция
// console.log(imageEl.width);

// console.log('🚀 ~ imageEl', imageEl);

// Добавляем элемент созданый
// document.body.appendChild(imageEl);

// const navItemEl = document.createElement('li');
// navItemEl.classList.add('.site-nav__item');
// console.log('🚀 ~ navItemEl', navItemEl);

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('.site-nav__lin');
// navLinkEl.textContent = 'Личный кабинет';
// navLinkEl.href = '/profile';
// console.log('🚀 ~ navLinkEl', navLinkEl);

// вкладываем а в Li
// navItemEl.appendChild(navLinkEl);
// console.log('🚀 ~ navItemEl', navItemEl);

// const navEl = document.querySelector('.site-nav');

// Ставим в конец элемнетов
// navEl.appendChild(navItemEl);

// Ставим первым
// navEl.insertBefore(navItemEl, navEl.firstElementChild);

// Ставим перед последним
// navEl.insertBefore(navItemEl, navEl.lastElementChild);

// тсавим та где хотим
// navEl.insertBefore(navItemEl, navEl.children[1]);
// navEl.insertBefore(navItemEl, navEl.children[1]);

// Добавляем элементы во внутрь нашей разметки div
// const heroEl = document.querySelector('.hero');

// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);

// heroEl.append(titleEl, imageEl);
// heroEl.prepend(titleEl, imageEl);

// !===============================!===========================!

// * Создание колекции элементов

// const colorPickerOption = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'grey', color: '#607D88' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
// ];

// const option = colorPickerOption[2];

// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;

// console.log('🚀 ~ buttonEl', buttonEl);

// Создаем массив кнопок

// const colorPickerOptionEl = document.querySelector('.js-color-picker');

// * Старый вариант
// const elements = [];

// for (let i = 0; i < colorPickerOption.length; i += 1) {
//     const option = colorPickerOption[i];

//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     elements.push(buttonEl);
// }

// * Действующий вариант

// const elements = colorPickerOption.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
// });

// console.log(elements);
// colorPickerOptionEl.append(...elements);

// * Пишем функцию

// const makeColorPickerOption = options => {
//     return options.map(option => {
//         const buttonEl = document.createElement('button');
//         buttonEl.type = 'button';
//         buttonEl.classList.add('color-picker__option');
//         buttonEl.textContent = option.label;
//         buttonEl.style.backgroundColor = option.color;

//         return buttonEl;
//     });
// };

// const elements = makeColorPickerOption(colorPickerOption);
// colorPickerOptionEl.append(...elements);

// * Создаем катрочку продукта

// const product = {
//     name: 'Сервоприводы',
//     description:
//         'Loreem xdfdf dfdfdf sdsfsfds dfdf dfdfdfd fscxs.c,mlk  sfddol lksadklnasflksadfdas sds',
//     price: 2000,
//     available: true,
//     onSale: true,
// };
// нужно сделать вот такие элементы

// {
// <article class="product">
//     <h2 class="product__name">Название</h2>
//     <p class="product__descr">Описание</p>
//     <p class="product__price">Цена: 11111 кредитов</p>
// </article>
// }

//* Создаем

// const prodectEl = document.createElement('article');
// prodectEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.textContent = product.name;
// nameEl.classList.add('product__name');
// console.log('🚀 ~ nameEl', nameEl);

// const descreEl = document.createElement('p');
// descreEl.textContent = product.description;
// descreEl.classList.add('product__descr');
// console.log('🚀 ~ descreEl', descreEl);

// const priceEl = document.createElement('p');
// priceEl.textContent = `Цена: ${product.price} кредитов`;
// priceEl.classList.add('product__price');
// console.log('🚀 ~ priceEl', priceEl);

// prodectEl.append(nameEl, descreEl, priceEl);
// console.log('🚀 ~ prodectEl', prodectEl);

// console.log('🚀 ~ products', products);

// * Делаем функцию которая будет возвращать один элемент целиком

// const makeProductCard = ({ name, description, price }) => {
//     const productEl = document.createElement('article');
//     productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.textContent = name;
// nameEl.classList.add('product__name');
// console.log('🚀 ~ nameEl', nameEl);

// const descreEl = document.createElement('p');
// descreEl.textContent = description;
// descreEl.classList.add('product__descr');
// console.log('🚀 ~ descreEl', descreEl);

// const priceEl = document.createElement('p');
// priceEl.textContent = `Цена: ${price} кредитов`;
// priceEl.classList.add('product__price');
// console.log('🚀 ~ priceEl', priceEl);

//     productEl.append(nameEl, descreEl, priceEl);

//     return productEl;
// };

// console.log(makeProductCard(products[1]));

// * Делаем много карточек
// const productContainerEl = document.querySelector('.js-product');
// const elements = products.map(makeProductCard);
// console.log('🚀 ~ elements', elements);
// productContainerEl.append(...elements);

// !===============================!===========================!

// * Делаем разметку более проще по парсел строк

// const titleEl = document.querySelector('.title');
// возвращает весь текст без взложености
// console.log(titleEl.textContent);
// возвращает текс с вложенастями
// console.log(titleEl.innerHTML);

// titleEl.innerHTML = '<a href="">Это ссылка</a>';

// Очещаем значение элемента
// titleEl.innerHTML = '';

// * Добавляем элемент

// Добавляем перед началом
// titleEl.insertAdjacentHTML('beforeBegin', '<a href="">Это ссылка</a>');

// Добавит после тега
// titleEl.insertAdjacentHTML('afterend', '<a href="">Это ссылка</a>');

// Добавляет перед элементом внутри
// titleEl.insertAdjacentHTML('afterbegin', '<a href="">Это ссылка</a>');

// Добавляет после элемента внутри
// titleEl.insertAdjacentHTML('beforeend', '<a href="">Это ссылка</a>');

// *

const makeTransactionTableRowMarka = ({
    id,
    amount,
    date,
    businnes,
    type,
    name,
    account,
}) => {
    // console.log(transaction);
    return `
    <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${businnes}</td>
    <td>${type}</td>
    <td>${name}</td>
    <td>${account}</td>
    </tr>
    `;
};

// console.log('🚀 ~ transaction', transaction);

console.log(makeTransactionTableRowMarka(transaction[2]));
const tableEl = document.querySelector('.js-transaction-table');

const makeTransactionTableRows = transaction
    .map(makeTransactionTableRowMarka)
    .join('');

tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);

console.log(makeTransactionTableRows);
