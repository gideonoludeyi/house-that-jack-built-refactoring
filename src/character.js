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

module.exports = Character;
