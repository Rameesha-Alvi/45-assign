//============================================= PROJECT 45 ================================================================

//____________________________________ CARs _________________________________________________________________________

//Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, 
//such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function store_car_info(manufacturer: string, model: string, ...carInfo: string[]): object {
    let car: any = {
      manufacturer: manufacturer,
      model: model
    };
  
    for (let i = 0; i < carInfo.length; i += 2) {
      let key = carInfo[i];
      let value = carInfo[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  let carInfo = store_car_info("Toyota", "Corolla", "color", "blue", "year", "2022", "mileage", "5000");
  console.log(carInfo);
  