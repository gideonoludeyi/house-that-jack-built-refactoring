const _ = require("lodash");

class Character {
  constructor(name, description, action) {
    this.name = name;
    this.description = description;
    this.action = action;
  }

  toString() {
    return `${this.name} ${this.description}`.trim();
  }
}

class House {
  /*private static*/ CHARACTERS = [
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
    this.characters = format(characters);
  }

  /*private*/ event(number) {
    const character = this.characters[number - 1];
    if (number == 0) return "the house that Jack built.";
    else
      return `${character} that ${character.action} ${this.event(number - 1)}`;
  }

  verse(number) {
    return `This is ${this.event(number)}`;
  }

  recite() {
    return _.range(0, this.characters.length + 1)
      .map((i) => this.verse(i))
      .join("\n");
  }
}

module.exports = House;
