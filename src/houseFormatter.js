const _ = require("lodash");

function echoFormatter(characters = []) {
  return characters.flatMap((character) => [character, character]); // duplicates each character arc in the story
}

function randomFormatter(characters = []) {
  return _.shuffle(characters);
}

function echoRandomFormatter(characters = []) {
  return echoFormatter(randomFormatter(characters));
}

function randomEchoFormatter(characters = []) {
  return randomFormatter(echoFormatter(characters));
}

module.exports = {
  echoFormatter,
  randomFormatter,
  echoRandomFormatter,
  randomEchoFormatter,
};
