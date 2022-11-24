const Character = require("./character");
const Song = require("./song");

class House {
  /*private static*/ CHARACTERS = [
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

  constructor(
    format = (characters) => characters,
    characters = this.CHARACTERS
  ) {
    this.song = new Song(characters, format);
  }

  /*private*/ event(number) {
    return this.song.event(number);
  }

  verse(number) {
    return this.song.verse(number);
  }

  recite() {
    return this.song.recite();
  }
}

module.exports = House;
