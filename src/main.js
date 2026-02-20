import express from "express";
import ParkingLot from "./models/ParkingLot.js";

const app = express();

app.get("/init", (req, res) => {
  // Even if we try to create two, they will be the same object!
  const lot1 = ParkingLot.getInstance("Ghibli Towers Parking", "Tokyo");
  const lot2 = ParkingLot.getInstance("Something Else", "Bangalore");

  res.json({
    message: "Singleton Check",
    areIdentical: lot1 === lot2, // This will be TRUE
    details: lot1.getDetails(),
  });
});

app.listen(3000, "0.0.0.0", () => console.log("LLD Lab Live!"));
