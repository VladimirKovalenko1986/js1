// !------------------!===================!+++++++++++++++++++++++
// * Болтливые события

// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCbInvocationCounter = 0;

// window.addEventListener('mousemove', onMouseMove);

// function onMouseMove(event) {
//     mouseMoveCbInvocationCounter += 1;

//     coordsOutputRef.textContent = `Кол-во вызовов onMoseMove: ${mouseMoveCbInvocationCounter},
//     x: ${event.clientX},
//     y:${event.clientY}
//     `;
// }

// Фунекция вызывает отчень много раз тому мы применяем метод:

// * Throttle

// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCbInvocationCounter = 0;

// Вызываем нашу функцию раз в 500ms
// const throttledOnMouseMove = _.throttle(onMouseMove, 500);

// window.addEventListener('mousemove', throttledOnMouseMove);

// function onMouseMove(event) {
//     mouseMoveCbInvocationCounter += 1;

//     coordsOutputRef.textContent = `Кол-во вызовов onMoseMove: ${mouseMoveCbInvocationCounter},
//     x: ${event.clientX},
//     y: ${event.clientY}
//     `;
// }

// * Debounce

// const inputRef = document.querySelector('.js-input');
// const outputRef = document.querySelector('.js-output');
// let inputCbInvocationCounter = 0;

// inputRef.addEventListener('input', onInputChange);

// Делаем через Debounce - вводим не чего не происходит только перестали вводить 2 сек
// функция выполнилась
// inputRef.addEventListener('input', _.debounce(onInputChange, 2000));

// function onInputChange(event) {
//     inputCbInvocationCounter += 1;

//     outputRef.textContent = `
//     Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
//     Значение: ${event.target.value}
//     `;
// }

// !------------------!===================!+++++++++++++++++++++++
// * Фильтр с поиском

// const tech = [
//     { label: 'HTML' },
//     { label: 'CSS' },
//     { label: 'JavaScript' },
//     { label: 'Noda.js' },
//     { label: 'React' },
//     { label: 'Vue' },
//     { label: 'Next.js' },
//     { label: 'Mobx' },
//     { label: 'Redux' },
//     { label: 'React Router' },
//     { label: 'GraphQl' },
//     { label: 'PostgreSQL' },
//     { label: 'MongoDB' },
// ];

// const refs = {
//     list: document.querySelector('.js-list'),
//     input: document.getElementById('filter'),
// };

// План
// 1. Рендорим разметку элементов списка
// 2. Слушаем изменения фильтра
// 3. Фильтруем данные и рендерим элементы

// const listItemsMarkup = createListItemsMarkup(tech);

// Добавляем список Li в браузер
// populateList(listItemsMarkup);

// function createListItemsMarkup(items) {
//     return items.map(item => `<li>${item.label}</li>`).join('');
// }

// Делаем фильтр в input
// refs.input.addEventListener('input', onFilterChange);

// делаем через throttle
// refs.input.addEventListener('input', _.throttle(onFilterChange, 300));

// делаем через debounce
// refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

// function onFilterChange(e) {
//     const filter = e.target.value.toLowerCase();

// Делаем чтобы оставались те которые мы ввели в инпут
// const filteredItems = tech.filter(t =>
//     t.label.toLowerCase().includes(filter),
// );

//Передаем массив отфильтрованых
// const listItemsMarkup = createListItemsMarkup(filteredItems);

// Добавляем список Li в браузер
//     populateList(listItemsMarkup);
// }

// Aункция добавляем список Li в браузер
// function populateList(markup) {
//     refs.list.innerHTML = markup;
// }

// !------------------!===================!+++++++++++++++++++++++
// * Ленивая загрузка изображения

// ????? Пользуемся без библиотеки

// const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// lazyImages.forEach(image => {
//     image.addEventListener('load', onImageLoaded, { once: true });
// });

// function onImageLoaded(e) {
//     console.log('Картинка загрузилась');
//     e.target.classList.add('apper');
// }

// ????? Делаем для библиотеки

// const lazyImages = document.querySelectorAll('img[data-src]');

// lazyImages.forEach(image => {
//     image.addEventListener('load', onImageLoaded, { once: true });
// });

// function onImageLoaded(e) {
//     console.log('Картинка загрузилась');
//     e.target.classList.add('apper');
// }

// ???? Делаем для определенного случая если не поддерживает браузер

if ('loading' in HTMLImageElement.prototype) {
    console.log('Браузер поддерживает ленивки');
    addSrcAttrTolazyImages();
} else {
    console.log('Браузер не поддерживает ленивки');
    addLazySizesScript();
}

// Добавляем анимации

const lazyImages = document.querySelectorAll('img[data-src]');

lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(e) {
    console.log('Картинка загрузилась');
    e.target.classList.add('apper');
}

// Добавляем две функции и немного разгружаем код

function addLazySizesScript() {
    // Добавляем библиотеку (добавляем скрипт)
    const script = document.createElement('script');
    script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    script.integrity =
        'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
    script.crossorigin = 'anonymous';
    script.referrerpolicy = 'no-referrer';

    document.body.appendChild(script);
}

function addSrcAttrTolazyImages() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    // Делаем динамический src
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
}
