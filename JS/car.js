const car = {
    model: "Ford Mustang",
    year: 2022,
    speed: 150,
    accelerate(increase) {
      this.speed += increase;
      console.log(`${this.model} повільніше ${this.speed} км/ч`);
    },
    brake(decrease) {
      this.speed -= decrease;
      if (this.speed < 0) this.speed = 0;
      console.log(`${this.model} швидше ${this.speed} км/ч`);
    },
  };
  
  const cars = [
    {
      model: "Tesla Model S",
      year: 2023,
      speed: 250,
      accelerate(increase) {
        this.speed += increase;
        console.log(`${this.model} повільніше ${this.speed} км/ч`);
      },
      brake(decrease) {
        this.speed -= decrease;
        if (this.speed < 0) this.speed = 0;
        console.log(`${this.model} швидше ${this.speed} км/ч`);
      },
    },
    {
      model: "Porsche 911",
      year: 2021,
      speed: 210,
      accelerate(increase) {
        this.speed += increase;
        console.log(`${this.model} повільніше ${this.speed} км/ч`);
      },
      brake(decrease) {
        this.speed -= decrease;
        if (this.speed < 0) this.speed = 0;
        console.log(`${this.model} швидше ${this.speed} км/ч`);
      },
    },
    {
      model: "McLaren P1 GTR",
      year: 2019,
      speed: 190,
      accelerate(increase) {
        this.speed += increase;
        console.log(`${this.model} повільніше ${this.speed} км/ч`);
      },
      brake(decrease) {
        this.speed -= decrease;
        if (this.speed < 0) this.speed = 0;
        console.log(`${this.model} швидше ${this.speed} км/ч`);
      },
    },
  ];
  
  cars.forEach((car) => {
    const accelerate = car.accelerate.bind(car, 10);
    accelerate();
  });
  
  cars.forEach((car) => {
    car.accelerate.call(car, 10);
    car.brake.call(car, 5);
  });
  
  cars.forEach((car) => {
    car.accelerate.apply(car, [20]);
    car.brake.apply(car, [10]);
  });
  
  const newCars = cars.filter((car) => car.year > 2015);
  
  console.log("Машини новіші за 2015:", newCars);
  