const Character = require("./character");
const CountdownSong = require("./countdownSong");

describe("Song", () => {
  const characters = [
    new Character("the bicycle", "", "slipped"),
    new Character("the car", "with the loud sound", "overtook"),
  ];

  const defaultFormatter = (characters) => characters;

  it("should recite a verse", () => {
    const expected = "This is the bicycle that slipped.";
    expect(new CountdownSong(characters, defaultFormatter).verse(0)).toBe(
      expected
    );
  });

  it("should recite the song", () => {
    const expected =
      "This is the bicycle that slipped.\n" +
      "This is the car with the loud sound that overtook the bicycle that slipped.";
    expect(new CountdownSong(characters, defaultFormatter).recite()).toBe(
      expected
    );
  });

  it("should recite the formatted song", () => {
    const reverseFormatter = (characters) => characters.concat().reverse();

    const expected =
      "This is the car with the loud sound that overtook.\n" +
      "This is the bicycle that slipped the car with the loud sound that overtook.";

    expect(new CountdownSong(characters, reverseFormatter).recite()).toBe(
      expected
    );
  });
});
