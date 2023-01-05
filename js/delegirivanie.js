// !+++++++++++++++++++++!======================!
// * Добавлем одно событие на несколько кнопок

// const conteiner = document.querySelector('.js-conteiner');

// conteiner.addEventListener('click', onClick);

// function onClick(event) {
// Пишем условие которое убирает клип по не кнопке
// if (event.target.nodeName !== 'BUTTON') {
//     return;
// }
// console.log(event.target.nodeName);
//     console.log('🚀 ~ onClick ~ event', event.target.textContent);
// }

// Код добавления кнопки

// const addBtn = document.querySelector('.js-add-btn');
// Ставим значение с которой нужно добавлять в данному случае 6
// let labelCounter = 6;

// addBtn.addEventListener('click', onAddBtnClick);

// function onAddBtnClick() {
//     const btn = document.createElement('button');
//     btn.textContent = `Кнопка ${labelCounter}`;
//     btn.type = 'button';

//     conteiner.appendChild(btn);
//     labelCounter += 1;
// }

// !+++++++++++++++++++++!======================!

// const tagsConteiner = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsConteiner.addEventListener('click', onTagsConteinerClick);

// function onTagsConteinerClick(event) {
//     if (event.target.nodeName !== 'BUTTON') {
//         return;
//     }
// console.log(event.target);

// Добавлем константу которая ищет активный класс
// const currentActiveBtn = document.querySelector('.tags__btn--active');
// console.log(
//     '🚀 ~ onTagsConteinerClick ~ currentActiveBtn',
//     currentActiveBtn,
// );

// Добавлем условия если уже такой класс есть мы удаляем его
// if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
// }

// Замена if новая фукция
// currentActiveBtn?.classList.remove('tags__btn--active');

// Добавляем активный класс
// const nextActiveBtn = event.target;
// nextActiveBtn.classList.add('tags__btn--active');

// окнсолим значение кнопок
// selectedTag = nextActiveBtn.dataset.value;
// console.log(selectedTag);

// }

//* Делаем чтобы тегов кнопок можно было выбрать сколько угодно

// const tagsConteiner = document.querySelector('.js-tags');

// const selectedTags = [];

// Сделаем через наборы
// const selectedTag = new Set();

// Дубляжи не пропускает
// selectedTag.add(5);
// selectedTag.add(5);
// selectedTag.add(5);

// tagsConteiner.addEventListener('click', onTagsConteinerClick);

// function onTagsConteinerClick(event) {
//     const btn = event.target;

// Значение кнопри которое при отжатии будет удалено
// const tag = btn.dataset.value;

// if (event.target.nodeName !== 'BUTTON') {
//     return;
// }

// console.log(event.target);

// Проверяем есть ли класс
// const isActive = btn.classList.contains('tags__btn--active');
// console.log(isActive);

// if (isActive) {
//     selectedTag.delete(tag);
// } else {
// Добавялем выбраные элементы в сеты они не удаляются те которые не активны но не
// дублируються
//     selectedTag.add(tag);
// }

// Если есть класс он его снимет если нет добавит
// btn.classList.toggle('tags__btn--active');
// console.log('🚀 ~ onTagsConteinerClick ~ selectedTag', selectedTag);
// Пушим для массива
// selectedTags.push(event.target.dataset.value);
// console.log('🚀 ~ onTagsConteinerClick ~ selectedTags', selectedTags);
// }

// !+++++++++++++++++++++!======================!

// * Колорпікєр - ПАЛІТРА

const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#e91e63', rgb: '233,30,99' },
    { hex: '#9c27b0', rgb: '156,39,176' },
    { hex: '#673ab7', rgb: '103,58,183' },
    { hex: '#3f51b5', rgb: '63,81,181' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#00bcd4', rgb: '0,188,212' },
    { hex: '#009688', rgb: '0,150,136' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3d', rgb: '255,235,59' },
    { hex: '#ff9800', rgb: '255,152,0' },
    { hex: '#795548', rgb: '121,85,72' },
    { hex: '#607d8b', rgb: '96,125,139' },
    { hex: '#610d87', rgb: '96,125,142' },
];

// Нужно динамически создать карточку

// console.log(createColorCardsMarkup(colors));

const paletteConteiner = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarkup(colors);

paletteConteiner.insertAdjacentHTML('beforeend', cardsMarkup);

// вешаем на div слушателя событий при клике на div где цвет

paletteConteiner.addEventListener('click', onPaletterConteinerClick);

function createColorCardsMarkup(colors) {
    // colors в функции и colors массив это две разные переменные

    return colors
        .map(({ hex, rgb }) => {
            return `

    <div class="color-card">
        <div
            class="color-swatch"
            data-hex="${hex}"
            data-rgb="${rgb}"
            style="background-color: ${hex}">
        </div>

        <div class="color-meta">
            <p>HEX: ${hex}</p>
            <p>RGB: ${rgb}</p>
        </div>
    </div>
            
            `;
        })
        .join('');
}

function onPaletterConteinerClick(event) {
    // Записыввем условия если нет определенного класса то мы выходим из функции если есть выводим
    const isColorSwatchEl = event.target.classList.contains('color-swatch');

    if (!isColorSwatchEl) {
        return;
    }

    // Делаем только один
    // const currentActiveCard = document.querySelector('.color-card.is-active');

    // if (currentActiveCard) {
    //     currentActiveCard.classList.remove('is-active');
    // }

    // Ставим вызов функции которую вынесли
    removeActiveCardClass();

    // Добавляем на элемент класс
    const swatchEl = event.target;

    // Применяем к предку верхнему родителю у которого есть класс который мы указали
    const parentColorCard = swatchEl.closest('.color-card');

    // parentColorCard.classList.add('is-active');

    // Вызиваем функцию которую вынесли
    addActiveCardClass(parentColorCard);

    // Получаем хекс карточки
    console.log(swatchEl.dataset.hex);

    // Записываем на body значения хекса и меняем при нажатии заливку body
    // document.body.style.backgroundColor = swatchEl.dataset.hex;

    // Записываем функцию которую вынесли
    setBodyBgColor(swatchEl.dataset.hex);
}

// * Разносим по отдельным функциям так как функция очень грамосткая

function setBodyBgColor(color) {
    document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
    const currentActiveCard = document.querySelector('.color-card.is-active');

    if (currentActiveCard) {
        currentActiveCard.classList.remove('is-active');
    }
}

function addActiveCardClass(card) {
    card.classList.add('is-active');
}
