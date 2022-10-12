const House = require("./house");
const { echoFormatter, randomFormatter } = require("./houseFormatter");

describe("House", () => {
  it("should recite a verse", () => {
    const expected =
      "This is the maiden all forlorn that milked the cow with the crumpled horn that tossed the dog that worried the cat that killed the rat that ate the malt that lay in the house that Jack built.";
    expect(new House().verse(6)).toBe(expected);
  });

  it("should recite the song", () => {
    const expected =
      "This is the house that Jack built.\n" +
      "This is the malt that lay in the house that Jack built.\n" +
      "This is the rat that ate the malt that lay in the house that Jack built.\n" +
      "This is the cat that killed the rat that ate the malt that lay in the house that Jack built.\n" +
      "This is the dog that worried the cat that killed the rat that ate the malt that lay in the house that Jack built.\n" +
      "This is the cow with the crumpled horn that tossed the dog that worried the cat that killed the rat that ate the malt that lay in the house that Jack built.\n" +
      "This is the maiden all forlorn that milked the cow with the crumpled horn that tossed the dog that worried the cat that killed the rat that ate the malt that lay in the house that Jack built.\n" +
      "This is the man all tattered and torn that kissed the maiden all forlorn that milked the cow with the crumpled horn that tossed the dog that worried the cat that killed the rat that ate the malt that lay in the house that Jack built.\n" +
      "This is the judge all shaven and shorn that married the man all tattered and torn that kissed the maiden all forlorn that milked the cow with the crumpled horn that tossed the dog that worried the cat that killed the rat that ate the malt that lay in the house that Jack built.\n" +
      "This is the rooster that crowed in the morn that woke the judge all shaven and shorn that married the man all tattered and torn that kissed the maiden all forlorn that milked the cow with the crumpled horn that tossed the dog that worried the cat that killed the rat that ate the malt that lay in the house that Jack built.\n" +
      "This is the farmer sowing his corn that kept the rooster that crowed in the morn that woke the judge all shaven and shorn that married the man all tattered and torn that kissed the maiden all forlorn that milked the cow with the crumpled horn that tossed the dog that worried the cat that killed the rat that ate the malt that lay in the house that Jack built.\n" +
      "This is the horse and the hound and the horn that belonged to the farmer sowing his corn that kept the rooster that crowed in the morn that woke the judge all shaven and shorn that married the man all tattered and torn that kissed the maiden all forlorn that milked the cow with the crumpled horn that tossed the dog that worried the cat that killed the rat that ate the malt that lay in the house that Jack built.";
    expect(new House().recite()).toBe(expected);
  });
});

describe("HouseFormatter", () => {
  const formatter = (characters = []) =>
    characters.flatMap((character) => [character, character]);

  it("should recite a verse twice", () => {
    const expected =
      "This is the maiden all forlorn that milked the maiden all forlorn that milked the cow with the crumpled horn that tossed the cow with the crumpled horn that tossed the dog that worried the dog that worried the cat that killed the cat that killed the rat that ate the rat that ate the malt that lay in the malt that lay in the house that Jack built.";
    expect(new House(formatter).verse(12)).toBe(expected);
  });
});

describe("EchoHouse", () => {
  it("should recite a verse twice", () => {
    const expected =
      "This is the maiden all forlorn that milked the maiden all forlorn that milked the cow with the crumpled horn that tossed the cow with the crumpled horn that tossed the dog that worried the dog that worried the cat that killed the cat that killed the rat that ate the rat that ate the malt that lay in the malt that lay in the house that Jack built.";
    expect(new House(echoFormatter).verse(12)).toBe(expected);
  });
});

/** result is non-deterministic */
describe.skip("RandomHouse", () => {
  const testFormatter = (characters) => characters;

  it("should recite the song with characters in random order", () => {
    const expected = undefined;
    expect(new House(testFormatter).recite()).toBe(expected);
  });
});
