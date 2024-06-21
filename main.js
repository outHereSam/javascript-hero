// Hero Object
// Superhero creator function
const SuperHero = (name, secretIdentity, powers, weakness, heroType) => {
  return {
    name,
    secretIdentity,
    powers,
    weakness,
    heroType,
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
  "Lack of superhuman abilities",
  "Hero"
);

const superman = SuperHero(
  "Superman",
  "Clark Kent",
  ["Flight", "Super Speed", "Super Strength", "Heat Vision", "Ice Breath"],
  "Kryptonite",
  "Hero"
);

// const supergirl = SuperHero()

const supergirl = Object.assign({}, superman, {
  name: "Supergirl",
  secretIdentity: "Kara Zor-El",
  breathe() {
    console.log("Breathing in space");
  },
});

console.log(superman);
console.log(supergirl);

// Create new supervillains
const zod = Object.assign({}, superman, {
  name: "General Zod",
  secretIdentity: "Zod",
  heroType: "Villain",
});

console.log(zod);

// Object Iteration and Transformation
const supers = [SuperHero("")];
