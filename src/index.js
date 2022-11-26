const Character = require("./character");
const { echoFormatter, randomFormatter } = require("./songFormatter");
const Song = require("./countdownSong");

const CHARACTERS = [
  { name: "the house", description: "", action: "Jack built" },
  { name: "the malt", description: "", action: "lay in" },
  { name: "the rat", description: "", action: "ate" },
  { name: "the cat", description: "", action: "killed" },
  { name: "the dog", description: "", action: "worried" },
  {
    name: "the cow",
    description: "with the crumpled horn",
    action: "tossed",
  },
  { name: "the maiden", description: "all forlorn", action: "milked" },
  {
    name: "the man",
    description: "all tattered and torn",
    action: "kissed",
  },
  {
    name: "the judge",
    description: "all shaven and shorn",
    action: "married",
  },
  {
    name: "the rooster",
    description: "that crowed in the morn",
    action: "woke",
  },
  { name: "the farmer", description: "sowing his corn", action: "kept" },
  {
    name: "the horse and the hound and the horn",
    description: "",
    action: "belonged to",
  },
].map(
  ({ name, description, action }) => new Character(name, description, action)
);

const echoHouse = new Song(CHARACTERS, echoFormatter).recite();

const randomHouse = new Song(CHARACTERS, randomFormatter).recite();

const randomEchoHouse = new Song(CHARACTERS, (characters) =>
  randomFormatter(echoFormatter(characters))
).recite();

const echoRandomHouse = new Song(CHARACTERS, (characters) =>
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
