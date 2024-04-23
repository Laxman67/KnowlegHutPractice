{
  {
    class Transportaion {
      constructor() {
        (this.typeName = ""), (this.wheels = 0), (this.maxSpeed = 0);
      }
    }
    class Car extends Transportaion {
      constructor() {
        super();
        this.fuel = "";
      }
    }

    let newCar = new Car();

    newCar.typeName = "Car";
    newCar.wheels = 4;
    newCar.maxSpeed = 220;
    newCar.fuel = "Petrol";
    console.log(newCar);
  }
}
`»
 { typeName: 'Car', wheels: 4, maxSpeed: 220, fuel: 'Petrol' }
 «`;
