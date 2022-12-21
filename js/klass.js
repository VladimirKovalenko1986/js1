// !======================================!
// * Классы

// class Car {
//     static description = 'Класс описываемый автомобиль';
//     static logInfo(carObj) {
// console.log(carObj);
// }

// mySuperPublicFiled = 555;

// #test = 'test';

// constructor({ brand, model, price } = {}) {
// console.log('Выполняется автоматически', constructor);
// console.log(this);

//     this.brand = brand;
//     this._model = model;
//     this.price = price;
// }

// changePrice(newPrice) {
//     this.price = newPrice;
// }

// set model(newModel) {
//     this._model = newModel;
// }

// setModel(newModel) {
//     this.model = newModel;
// }

// get model() {
//     return this._model;
// }

// getModel() {
//     return this.model;
// }
// }

// console.dir(Car);

// console.log(Car.description);

// const carInstance = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// Car.logInfo(carInstance);

// console.log(Object.getPrototypeOf(carInstance) === Car.prototype);
// console.log('🚀 ~ carInstance', carInstance);

// console.log(carInstance.getModel());
// carInstance.setModel('Q4');
// console.log(carInstance.getModel());

// console.log(carInstance.model);
// carInstance.model = 'Q4';
// console.log(carInstance.model);

// !======================================!

// * Наследование

// class Hero {
//     constructor({ name = 'hero', xp = 0 } = {}) {
//         this.name = name;
//         this.xp = xp;
//     }

//     gainXp(amount) {
//         console.log(`${this.name} получает ${amount} опыта`);
//         this.xp += amount;
//     }
// }

// class Warrior extends Hero {
//     constructor({ weapon, ...restProps }) {
//         super(restProps);

//         this.weapon = weapon;
//     }

//     attack() {
//         console.log(`${this.name} атакует используюя ${this.weapon}`);
//     }
// }

// class Berserk extends Warrior {
//     constructor({ warcry, ...restProps } = {}) {
//         super(restProps);

//         this.warcry = warcry;
//     }

//     babyRage() {
//         console.log(this.warcry);
//     }
// }

// class Mage extends Hero {
//     constructor({ spells, ...restProps } = {}) {
//         super(restProps);

//         this.spells = spells;
//     }

//     cast() {
//         console.log(`${this.name} что-то там кастует`);
//     }
// }

// const mango = new Hero({ name: 'mango', xp: 1000 });

// console.log('🚀 ~ mango', mango);

// mango.gainXp(1000);

// console.log(mango);

// const poly = new Warrior({ name: 'poly', xp: 1500, weapon: 'алебарда' });

// console.log('🚀 ~ poly', poly);

// poly.gainXp(1000);

// console.log('🚀 ~ poly', poly);

// poly.attack();
// poly.gainXp(1000);

// const siri = new Mage({ name: 'siri', xp: 2000, spells: ['фаербол'] });

// console.log('🚀 ~ siri', siri);

// siri.cast();
// siri.gainXp(500);

// console.log('🚀 ~ siri', siri);

// const ajax = new Berserk({
//     name: 'ajax',
//     xp: 1200,
//     weapon: 'axe',
//     warcry: 'waaaaaah',
// });

// console.log('🚀 ~ ajax', ajax);

// ajax.babyRage();
// ajax.attack();
// ajax.gainXp(500);

// console.log('🚀 ~ ajax', ajax);
