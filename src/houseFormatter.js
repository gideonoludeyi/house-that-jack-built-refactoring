const _ = require("lodash");

function echoFormatter(characters = []) {
  return characters.flatMap((character) => [character, character]);
}

function randomFormatter(characters = []) {
  return _.shuffle(characters);
}

module.exports = {
  echoFormatter,
  randomFormatter,
};
