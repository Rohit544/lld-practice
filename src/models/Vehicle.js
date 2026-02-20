// src/models/Vehicle.js

export class Vehicle {
  constructor(licensePlate, type) {
    if (this.constructor === Vehicle) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.licensePlate = licensePlate;
    this.type = type; // e.g., 'CAR', 'TRUCK', 'MOTORBIKE'
  }
}

export class Car extends Vehicle {
  constructor(licensePlate) {
    super(licensePlate, "CAR");
  }
}

export class Motorbike extends Vehicle {
  constructor(licensePlate) {
    super(licensePlate, "MOTORBIKE");
  }
}
