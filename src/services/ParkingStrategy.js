export class ParkingStrategy {
  findSpot(leves, vehicalType) {
    throw new Error("Strategy.findSpot() must be implemented.");
  }
}

//concrete the Strategy: A nearst to Enterance
export class NearstSpotStrategy extends ParkingStrategy {
  findSpot(leves, vehicalType) {
    for (const level of levels) {
      const spot = level.findAvailableSpot("vehicalType");
      if (spot) return spot;
    }
    return null;
  }
}
