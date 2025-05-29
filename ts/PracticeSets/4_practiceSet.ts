/*
💥 Define a union type for a vehicle that can either be a car or bike with different properties.
Write a function to log details based on the vehcile type.
*/

type CarData = {
  type: "car";
  make: string;
  model: string;
  year: number;
};

type BikeData = {
  type: "bike";
  brand: string;
  cc: number;
};

// 💥 Creating union type
type VehicleData = CarData | BikeData;

function getVehicleDetails(vehicle: VehicleData): void {
  if (vehicle.type === "car") {
    console.log(
      `Car: ${vehicle.make}, Model: ${vehicle.model}, Year: ${vehicle.year}`
    );
  } else if (vehicle.type === "bike") {
    console.log(`Bike: ${vehicle.brand}, CC: ${vehicle.cc}`);
  }
}

let myCarDetails: VehicleData = {
  type: "car",
  make: "BMW",
  model: "2024",
  year: 2025,
};

let myBikeDetails: VehicleData = {
  type: "bike",
  brand: "Ducati",
  cc: 1000,
};

getVehicleDetails(myCarDetails); // Car: BMW, Model: 2024, Year: 2025
