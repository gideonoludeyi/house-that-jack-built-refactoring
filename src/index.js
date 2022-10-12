const House = require("./house");
const { echoFormatter, randomFormatter } = require("./houseFormatter");

const echoHouse = new House(echoFormatter).recite();

const randomHouse = new House(randomFormatter).recite();

const randomEchoHouse = new House((characters) =>
  randomFormatter(echoFormatter(characters))
).recite();

const echoRandomHouse = new House((characters) =>
  echoFormatter(randomFormatter(characters))
).recite();

console.log("---------------- Echo House ----------------");
console.log(echoHouse);

console.log("\n\n");
console.log("--------------- Random House ---------------");
console.log(randomHouse);

console.log("\n\n");
console.log("------------- RandomEcho House -------------");
console.log(randomEchoHouse);

console.log("\n\n");
console.log("------------- EchoRandom House -------------");
console.log(echoRandomHouse);
