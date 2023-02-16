"use strict";
class Student {
    constructor(_name = '', _registry = '', _tests = [], _projects = []) {
        this._name = _name;
        this._registry = _registry;
        this._tests = _tests;
        this._projects = _projects;
    }
    // 2 
    sumGrades() {
        return [...this._tests, ...this._projects].reduce((acc, { grade }) => acc + grade, 0);
    }
    avarageGrades() {
        const grades = [...this._tests, ...this._projects];
        return this.sumGrades() / grades.length;
    }
}
// 3
class Client {
    constructor(_name) {
        this._name = _name;
    }
    get name() { return this._name; }
}
class Item {
    constructor(_name, _price) {
        this._name = _name;
        this._price = _price;
    }
    get name() { return this._name; }
    get price() { return this._price; }
}
class Order {
    constructor(_client, _items, _payment, _discount) {
        this._client = _client;
        this._items = _items;
        this._payment = _payment;
        this._discount = _discount;
    }
    get items() { return this._items; }
    get discount() { return this._discount; }
    // 4
    getTotal() {
        return this.items.reduce((acc, { price }) => acc + price, 0);
    }
    getTotalWithDiscount() {
        const total = this.getTotal();
        const discountValue = this.discount !== undefined ? total * this.discount : 0;
        return total - discountValue;
    }
}
// 5
const months = ['January', 'Fevruary', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December'];
class Data {
    constructor(d, m, y) {
        this._day = 1;
        this._month = 1;
        this._year = 1900;
        if (d > 0 && d < 32 && m > 0 && m < 13 && y > 1899 && y < 2024) {
            this._day = d;
            this._month = m;
            this._year = y;
        }
    }
    get day() { return this._day; }
    get month() { return this._month; }
    get year() { return this._year; }
    // 6
    getMonthName() { return months[this.month - 1]; }
    isLeapYear() { return this.year % 4 === 0 && this.year % 100 !== 0; }
    compare({ day, month, year }) {
        if (day === this.day && month === this.month && year === this.year)
            return 0;
        const higherYear = this.year > year;
        const higherMonth = this.month > month;
        const higherDay = this.day > day;
        if (higherYear
            || (year === this.year && higherMonth)
            || (year === this.year && month === this.month && higherDay)) {
            return 1;
        }
        return -1;
    }
    getDate() {
        return ``;
    }
    format(form) {
        const is4A = form.includes('aaaa');
        const day = this.day.toString().length === 1 ? `0${this.day}` : this.day.toString();
        const month = this.month.toString().length === 1 ? `0${this.month}` : this.month.toString();
        const stringYear = this.year.toString();
        const year = is4A ? stringYear : `${stringYear[stringYear.length - 1]}${stringYear[stringYear.length - 2]}`;
        const isM = form.includes('M');
        if (isM && is4A) {
            return form.replace('aaaa', year).replace('M', this.getMonthName()).replace('dd', day);
        }
        if (isM) {
            return form.replace('aa', year).replace('M', this.getMonthName()).replace('dd', day);
        }
        return form.replace('aaaa', year).replace('mm', month).replace('dd', day);
    }
}
const newData = new Data(60, 60, 5000);
console.log('1: ', newData.format('dd/mm/aaaa'));
console.log('2: ', newData.format('aaaa-mm-dd'));
console.log('3: ', newData.format('dd de M de aa'));
console.log('4: ', newData.format('dd, M de aaaa'));
