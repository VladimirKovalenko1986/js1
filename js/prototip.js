// const objC = {
//     z: 5,
// };

// console.log(objC);

// console.log(objC.hasOwnProperty('z'));
// console.log(objC.hasOwnProperty('t'));

// const objB = Object.create(objC);
// objB.y = 2;

// console.log('ObjC:', objC);

// console.log('ObjB:', objB);

// console.log(objB.y);
// console.log(objB.z);

// const objA = Object.create(objB);
// objA.x = 1;

// console.log('ObjA:', objA);

// console.log(objA.z);

// objA.z = 1000;

// console.log('ObjA:', objA);

// console.log(objA.hasOwnProperty('y'));

// !=====================================================!

// * Prototype

// const Car = function ({ brand, model, price } = {}) {
// const { brand, model, price } = config;

//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// };

// Car.prototype.sayHi = function () {
//     console.log('Car.prototipe.sayHi => this', this);
//     console.log('Hello :)');
// };

// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// };

// console.log(Car.prototype);

// const myCar = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });
// console.log(myCar);

// myCar.sayHi();

// myCar.changePrice(10000);

// console.log(myCar);

// const myCar2 = new Car({
//     brand: 'BMW',
//     model: 'X6',
//     price: 50000,
// });
// console.log(myCar2);

// myCar2.sayHi();

// const myCar3 = new Car({
//     brand: 'Audi',
//     model: 'A6',
//     price: 65000,
// });
// console.log(myCar3);

// myCar3.sayHi();

// !=====================================================!

// * Prototype

// const User = function ({ email, password } = {}) {
//     this.email = email;
//     this.password = password;
// };

// User.prototype.changEmail = function (newMail) {
//     this.email = newMail;
// };

// const mango = new User({ email: 'mango@gmail.com', password: 1111111 });

// mango.changEmail('my-new-mail@gmail.com');

// console.log(mango);

// !=====================================================!

// * Инициализация кнопок

const CounterPlagin = function ({
    rootSelector,
    initialValue = 0,
    step = 1,
    onUpdate = () => null,
} = {}) {
    this._value = initialValue;
    this._step = step;

    this._refs = this._getRefs(rootSelector);

    this.onUpdate = onUpdate;

    this._bindEvents();

    this.updateValueUI();
};

CounterPlagin.prototype._getRefs = function (rootSelector) {
    const refs = {};
    refs.conteiner = document.querySelector(rootSelector);
    refs.incrementBtn = refs.conteiner.querySelector('[data-increment]');
    refs.decrementBtn = refs.conteiner.querySelector('[data-decrement]');
    refs.value = refs.conteiner.querySelector('[data-value]');

    return refs;
};

CounterPlagin.prototype._bindEvents = function () {
    this._refs.incrementBtn.addEventListener('click', () => {
        console.log(this);

        this.increment();
        this.updateValueUI();
    });

    this._refs.decrementBtn.addEventListener('click', () => {
        console.log(this);

        this.decrement();
        this.updateValueUI();
    });
};

CounterPlagin.prototype.updateValueUI = function () {
    this._refs.value.textContent = this._value;

    this.onUpdate();
};

CounterPlagin.prototype.increment = function () {
    this._value += this._step;
};

CounterPlagin.prototype.decrement = function () {
    this._value -= this._step;
};

const counter1 = new CounterPlagin({
    rootSelector: '#counter-1',
    step: 10,
    initialValue: 100,
});

console.log('🚀 ~ counter1', counter1);

const counter2 = new CounterPlagin({
    rootSelector: '#counter-2',
    step: 2,
    onUpdate: () => console.log('Это мой кастомный колбек для onUpdate'),
});

console.log('🚀 ~ counter2', counter2);
