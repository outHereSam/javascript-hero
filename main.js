// Hero Object
const superHero = {
  name: "Batman",
  secretIdentity: "Bruce Wayne",
  powers: [
    "Superhuman Intelligence",
    "Master Martial Artist",
    "Enhanced Strength",
    "Ehanced Reflexes",
    "Master of Disguise",
  ],
  weakness: "Lack of superhuman abilities",
  usePower(powerName) {
    console.log(`${this.name} is using his ${powerName}`);
  },
  revealIdentity() {
    console.log(`${this.name} is ${this.secretIdentity}`);
  },
};

superHero.usePower("freeze");
superHero.revealIdentity();
