class TV {
  brand: string
  size: number
  resolution: string
  connections: string[]
  connectedTo?: string

  constructor(b: string, s: number, r: string, c: string[]) {
    this.brand = b
    this.size = s
    this.resolution = r
    this.connections = c
  }

  turnOn() {
    console.log(this.brand, this.size, this.resolution, this.connections);
  }
}

const myTv = new TV('Philips', 32, 'HD', ['Wi-fi', 'USB', 'Ethernet', 'HDMI']);

myTv.turnOn();