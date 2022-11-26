const _ = require("lodash");

/**
 *
 * @param {import('./character')[]} characters
 * @returns {import('./character')[]}
 */
function echoFormatter(characters = []) {
  return characters.flatMap((character) => [character, character]);
}

/**
 *
 * @param {import('./character')[]} characters
 * @returns {import('./character')[]}
 */
function randomFormatter(characters = []) {
  return _.shuffle(characters);
}

module.exports = {
  echoFormatter,
  randomFormatter,
};
