export interface IVehicle {
  drive(): void
}

export interface IFlyingVehicle extends IVehicle {
  fly(): void
}