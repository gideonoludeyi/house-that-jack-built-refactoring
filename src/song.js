const _ = require("lodash");

class Song {
  constructor(characters, formatter) {
    this.characters = formatter(characters);
  }

  /*private*/ event(number) {
    const character = this.characters[number];
    if (number == 0) return `${character} that ${character.action}.`;
    else
      return `${character} that ${character.action} ${this.event(number - 1)}`;
  }

  verse(number) {
    return `This is ${this.event(number)}`;
  }

  recite() {
    return _.range(0, this.characters.length)
      .map((i) => this.verse(i))
      .join("\n");
  }
}

module.exports = Song;
