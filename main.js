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

// const supergirl = SuperHero()

const supergirl = Object.assign({
  name: "Supergirl",
  secretIdentity: "Kara Zor-El",
  breathe() {
    console.log("Breathing in space");
  },
  superman,
});

console.log(superman);
console.log(supergirl);

// Object Iteration and Transformation
const supers = [SuperHero("")];
