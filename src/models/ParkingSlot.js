// src/models/ParkingSlot.js
export class ParkingSlot {
  constructor(id, supportedType) {
    this.id = id;
    this.supportedType = supportedType; // 'CAR', 'MOTORBIKE', etc.
    this.isFree = true;
    this.vehicle = null;
  }

  assignVehicle(vehicle) {
    this.isFree = false;
    this.vehicle = vehicle;
  }

  removeVehicle() {
    this.isFree = true;
    this.vehicle = null;
  }
}
