"use strict";
class TV {
    constructor(b, s, r, c) {
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connections = c;
    }
    turnOn() {
        console.log(this.brand, this.size, this.resolution, this.connections);
    }
}
const myTv = new TV('Philips', 32, 'HD', ['Wi-fi', 'USB', 'Ethernet', 'HDMI']);
myTv.turnOn();
