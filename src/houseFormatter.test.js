const Character = require("./character");
const { echoFormatter, randomFormatter } = require("./houseFormatter");

describe("echo formatter", () => {
  it("should duplicate each character in the story", () => {
    const john = new Character("John", "strong and tall", "won");
    const characters = [john];
    const expected = [john, john];
    expect(echoFormatter(characters)).toStrictEqual(expected);
  });
});

/* non-deterministic result */
describe.skip("random formatter", () => {
  it("should randomize the position of characters in the story", () => {
    const john = new Character("John", "strong and tall", "won");
    const james = new Character("James", "calm and wise", "called");
    const characters = [john, james];
    const expected = [james, john];
    expect(randomFormatter(characters)).toStrictEqual(expected);
  });
});
