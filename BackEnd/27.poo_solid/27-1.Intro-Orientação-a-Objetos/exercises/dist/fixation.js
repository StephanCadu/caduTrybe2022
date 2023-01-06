"use strict";
class TV {
    constructor(b, s, r, c) {
        this._connectedTo = '';
        this._brand = b;
        this._size = s;
        this._resolution = r;
        this._connections = c;
    }
    turnOn() {
        console.log(this._brand, this._size, this._resolution, this._connections);
    }
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(value) {
        if (this._connections.includes(value)) {
            this._connectedTo = value;
        }
        else {
            console.log('connection unavailable');
        }
    }
}
const myTv = new TV('Philips', 32, 'HD', ['Wi-fi', 'USB', 'Ethernet', 'HDMI']);
myTv.turnOn();
myTv.connectedTo = 'HDMI';
console.log(myTv.connectedTo);
// principais modificadores de visibilidade de classes:
// - public (default)
// - private
// - protected
// - readonly
// para ler valores utilizamos os getters e para alterá-los utilizamos os setters
// é comum usar underline antes do nome de um atributo privado
// sintaxe de encapsulamento
class Person {
    constructor(n, h, w, a) {
        this.name = n;
        this._weight = w;
        this._age = a;
        this.height = h;
    }
    // não funciona
    getWeight() {
        return this._weight;
    }
    // funciona por ser um método get
    get age() {
        return this._age;
    }
    // funciona por ser um método set
    set age(value) {
        if (value >= 0 && value <= 200) {
            this._age = value;
        }
    }
    birthday() {
        this._age += 1;
    }
}
