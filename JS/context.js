function hello() {
    console.log("Hello", this);
  }
  
  const user_info = {
    name: "Alex",
    age: 25,
    showName() {
      console.log(this.name);
    },
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    showInfo(job, phone) {
      console.group(`${this.name} info:`);
      console.log(`My name is ${this.name}, I'm ${this.age}`);
      console.log(`Job is ${job}`);
      console.log(`Phone is ${phone}`);
      console.groupEnd();
    },
  };
  
  const user_marta = {
    name: "Sofia",
    age: "30",
  };
  
  user_info.showInfo.bind(user_marta)("Microsoft", "1234567890");
  user_info.showInfo.call(user_marta, "Amazon", "0987654321");
  user_info.showInfo.apply(user_marta, ["Tesla", "1122334455"]);
  