// Hero Object
// Superhero creator function
const SuperHero = (name, secretIdentity, powers, weakness) => {
  return {
    name,
    secretIdentity,
    powers,
    weakness,
    usePower(powerName) {
      console.log(`${this.name} is using his ${powerName}`);
    },
    revealIdentity() {
      console.log(`${this.name} is ${this.secretIdentity}`);
    },
  };
};

// Creating a new superhero with the superHeroMaker function
const batsy = SuperHero(
  "Batman",
  "Bruce Wayne",
  [
    "Superhuman Intelligence",
    "Master Martial Artist",
    "Enhanced Strength",
    "Ehanced Reflexes",
    "Master of Disguise",
  ],
  "Lack of superhuman abilities"
);

const superman = SuperHero(
  "Superman",
  "Clark Kent",
  ["Flight", "Super Speed", "Super Strength", "Heat Vision", "Ice Breath"],
  "Kryptonite"
);

const supergirl = Object.assign(
  {
    breathe() {
      console.log("Breathing in space");
    },
  },
  SuperHero
);

supergirl.breathe();
