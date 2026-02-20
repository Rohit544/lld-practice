class ParkingLot {
  //static variable to hold the single instance
  static #instance = null;

  constructor(name, address) {
    if (ParkingLot.#instance) {
      return ParkingLot.#instance;
    }

    this.name = name;
    this.address = address;
    this.levels = [];

    console.log("Initialization ${this.name} at ${this.address} ");
    ParkingLot.#instance = this;
    Object.freeze(this);
  }
  // Global access method
  static getInstance(
    name = "Central Parking",
    address = "Sector 5, Bangalore",
  ) {
    if (!ParkingLot.#instance) {
      ParkingLot.#instance = new ParkingLot(name, address);
    }
    return ParkingLot.#instance;
  }

  getDetails() {
    return {
      name: this.name,
      address: this.address,
      totalLevels: this.levels.length,
    };
  }

  // Add these methods inside the ParkingLot class

  addLevel(level) {
    this.levels.push(level);
    console.log(`✅ Level ${level.id} added to ${this.name}`);
  }

  parkVehicle(vehicle) {
    console.log(
      `🔍 Finding a spot for ${vehicle.type} (${vehicle.licensePlate})...`,
    );

    for (const level of this.levels) {
      const spot = level.findAvailableSpot(vehicle.type);
      if (spot) {
        spot.assignVehicle(vehicle);
        return { success: true, spotId: spot.id, levelId: level.id };
      }
    }

    return { success: false, message: "No available spots found!" };
  }
}
// We export the class, but we can also export a pre-initialized instance
export default ParkingLot;
