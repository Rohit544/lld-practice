// src/models/ParkingLevel.js
export class ParkingLevel {
  constructor(id, numSlots) {
    this.id = id;
    this.slots = []; // Array of ParkingSlot objects
    // We'll initialize slots here in the next step
  }

  findAvailableSpot(vehicleType) {
    return this.slots.find(
      (slot) => slot.isFree && slot.supportedType === vehicleType,
    );
  }
}
