// !=====================================================================!

// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', targetButtonClickHandler);

// * Как правильно называть функции, paterns

// 1 Variant
// function handleTargetButtonClick() {
//     console.log('Клик');
// }

// 2 Variant
// function targetButtonClickHandler() {
//     console.log('Клик');
// }

// 3 Variant
// function onTargetButtonClick() {
//     console.log('Клик');
// }

// При клике на одну добавляем другую, тоесть вешаем другого слушателя

// addListenerBtn.addEventListener('click', event => {
//     console.log('🚀 ~ event', event);

//     console.log('Вешаю слушателя на целевую кнопку');

//     targetBtn.addEventListener('click', onTargetBtnClick);
// });

// Снимаем слушателя

// removeListenerBtn.addEventListener('click', event => {
//     console.log('🚀 ~ event', event);
//     console.log('Снимаю слушателя событий с целевой кнопке');

//     targetBtn.removeEventListener('click', onTargetBtnClick);
// });

// function onTargetBtnClick(event) {
//     console.log('🚀 ~ onTargetBtnClick ~ event', event);
//     console.log('Клик по целевой кнопке');
// }

// * События event:

// const form = document.querySelector('.js-register-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
// Отменяем перезагрузку страницы при отправки формы
// event.preventDefault();

// const formElements = event.currentTarget.elements;

// console.dir(formElements);

// const mail = formElements.email.value;
// const password = formElements.password.value;
// const subscription = formElements.subscription.value;

// Отправляем данные
// const formData = {
//     mail,
//     password,
//     subscription,
// };

// console.log(formData);

// * фукция FormData

//     const formData = new FormData(event.currentTarget);

//     formData.forEach((value, name) => {
//         console.log('🚀 ~ formData.forEach ~ value', value);
//         console.log('🚀 ~ formData.forEach ~ name', name);
//     });
// }

// * Патерн обьект ссылок

// const input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const license = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

// Делаем обьект констант
// const refs = {
//     input: document.querySelector('.js-input'),
//     nameLabel: document.querySelector('.js-button > span'),
//     licenseCheckbox: document.querySelector('.js-license'),
//     btn: document.querySelector('.js-button'),
// };

// События фокус и блюр

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);

// refs.input.addEventListener('change', onInputChange);

// refs.input.addEventListener('input', onInputChange);

// refs.input.addEventListener('input', onInputChange);

// refs.licenseCheckbox.addEventListener('change', onLicenseChange);

// function onInputFocus() {
//     console.log('Инпут получил фокус - событие focus');
// }

// function onInputBlur() {
//     console.log('Инпут потерял фокус - событие blur');
// }

// делаем чтобы в кнопке вносилось автоматом то что набираем в input

// function onInputChange(event) {
// console.log(event.currentTarget.value);
// refs.nameLabel.textContent = event.currentTarget.value;
// }

// делаем кнопку активной при нажатии чекбокс

// function onLicenseChange(event) {
//     console.log(event.currentTarget.checked);

//     refs.btn.disabled = !event.currentTarget.checked;
// }

// !=====================================================================!

// * События клавиатуры

// const refs = {
//     output: document.querySelector('.js-output'),
//     clearBtn: document.querySelector('.js-clear'),
// };

// window.addEventListener('keypress', onKeypress);
// refs.clearBtn.addEventListener('click', onClearOutput);

// function onKeypress(event) {
// console.log('🚀 ~ onKeypress ~ event', event);

// Ставим чтобы при нажати на клавиатуру отображалась нажатая клавиша
// Реагирует на все кнопки при команде keydown
//При вводе команды keypress служебные кнопки не отображаються
// console.log('event key:', event.key);

// console.log('event key:', event.key);
// console.log('event.code:', event.code);

// Если мы хотим напечатать чтонибудь
//     refs.output.textContent += event.key;
// }

// Вводим функцию кнопки для очистки экрана
// function onClearOutput() {
//     refs.output.textContent = '';
// }

// !=====================================================================!

// * События Мышки

// Добавленеи hover наведении указателя мышки
// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', onMouseEnter);
// boxRef.addEventListener('mouseleave', onMouseLeave);

// есть еще два метода которые работают по другому

// boxRef.addEventListener('mouseover', onMouseEnter);
// boxRef.addEventListener('mouseout', onMouseLeave);

// Болтливое событике которое часто срабатывает на каждое движение мышки

// boxRef.addEventListener('mousemove', onMouseMove);

// function onMouseEnter(event) {
//     const box = event.currentTarget;
//     box.classList.add('box--active');
// }

// function onMouseLeave(event) {
//     const box = event.currentTarget;
//     box.classList.remove('box--active');
// }

// function onMouseMove(event) {
//     console.log(event);
// }

// !=====================================================================!

// * Modal window

const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
};

// Делаем открытие и закрытие по кнопке

refs.openModalBtn.addEventListener('click', onOpenModal);

function onOpenModal() {
    // Когда открыли модалку вешаем слушателя событий
    window.addEventListener('keydown', onEscKeyDown);

    document.body.classList.add('show-modal');
}

// Делаем кнопку закрытие окна

refs.closeModalBtn.addEventListener('click', closeModal);

function closeModal() {
    // При закрытие модалки снимаем слушателя событий
    window.removeEventListener('keydown', onEscKeyDown);

    document.body.classList.remove('show-modal');
}

// Делаем чтобы при клацанье на серое закрывалась модалка

refs.backdrop.addEventListener('click', onBackdropClick);

function onBackdropClick(event) {
    // console.log('Клик по backdrop');

    // console.log(event.currentTarget);
    // console.log(event.target);

    // Сравниваем элементы и пр их равности закрываем окно
    if (event.currentTarget === event.target) {
        // console.log('Кликнули именноь в backdrop');
        closeModal();
    }
}

// Закрытие модалку по esc

function onEscKeyDown(event) {
    console.log('🚀 ~ onEscKeyPress ~ event', event.code);

    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;

    if (isEscKey) {
        closeModal();
    }
}
