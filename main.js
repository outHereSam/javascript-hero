// Hero Object
// Objective 1: Object Creation Basics
const superhero = {
  name: "Spider-Man",
  secretIdentity: "Peter Parker",
  powers: [
    "Enhanced Strength",
    "Ability to cling to any surface",
    "Spidey Sense",
  ],
  weakness: "Ethyl Chloride",
  revealIdentity() {
    console.log(`${this.name}'s secret identity is ${this.secretIdentity}`);
  },
};

// Objective 2: Superhero creator function
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

// Objective 4: Prototypal Inheritance
const supergirl = Object.assign({}, superman, {
  name: "Supergirl",
  secretIdentity: "Kara Zor-El",
  breathe() {
    console.log("Breathing in space");
  },
});

// console.log(superman);
// console.log(supergirl);
// supergirl.breathe();

// Create new supervillains
const zod = Object.assign({}, superman, {
  name: "General Zod",
  secretIdentity: "Zod",
  heroType: "Villain",
});

// console.log(zod);

// Objective 5: Object Iteration and Transformation
const supers = [batsy, superman, supergirl, zod];
const superHeroes = supers.filter((hero) => hero.heroType === "Hero");
const villains = supers.filter((hero) => hero.heroType === "Villain");

console.log(superHeroes);
console.log(villains);

// Reveal supers identities
supers.forEach((hero) => {
  hero.revealIdentity();
});
