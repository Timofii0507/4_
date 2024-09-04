const robot = {
    name: "",
    type: "mech",
    hp: 30000,
    isKnoktedOut: true ? "живий" : "не дуже живий",
    setName(newName) {
      this.name = newName;
    },
    logStatus() {
      console.log(
        `${this.name} ${this.type} ${this.isKnoktedOut}, його здоров'я ${this.hp}`
      );
    },
    healthRobot(health) {
      this.hp -= health;
      if (this.hp <= 0) {
        this.isKnoktedOut = false ? "живий" : "не дуже живий";
        this.hp = 0;
      }
    },
    healthPlusRobot(health) {
      this.hp += health;
      if (this.hp > 0) {
        this.isKnoktedOut = true ? "живий" : "не дуже живий";
      }
    },
  };
  
  robot.setName("Optimus");
  robot.logStatus();
  robot.healthRobot(6000);
  robot.healthRobot(6000);
  robot.healthRobot(6000);
  robot.healthRobot(6000);
  robot.healthRobot(6000);
  robot.healthRobot(6000);
  robot.healthPlusRobot(20000);
  robot.healthPlusRobot(20000);
  robot.healthPlusRobot(20000);
  robot.logStatus();
  
  const bb8 = {
    name: "BB-8",
    type: "spherical droid",
    hp: 12000,
    isKnoktedOut: true ? "живий" : "не дуже живий",
  };
  
  robot.healthRobot.call(bb8, 4000);
  robot.logStatus.call(bb8);
  
  //////////
  
  const users = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 20 },
    { name: "Eve", age: 32 },
  ];
  
  const greetings = users.map(({ name }) => {
    return `Привіт, я ${name}!`;
  });
  
  console.log(greetings);
  
  const goodbye = function () {
    return `До побачення, ${this.name}`;
  };
  
  users.forEach((user) => {
    console.log(goodbye.call(user));
  });
  