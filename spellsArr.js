module.exports = [
  {
    name: "Acid Splash",
    level: 0,
    description:
      "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a dexterity saving throw or take 1d6 acid damage. This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",

    range: "60 feet",
    school: "Conjuration",
    materials: null,
    components: ["V", "S"],
    castingTime: "1 action",
    duration: "Instantaneous",
  },
  {
    name: "Magic Missile",
    level: 1,
    description:
      "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.",
    
    range: "120 feet",
    school: "Evocation",
    materials: null,
    components: ["V", "S"],
    castingTime: "1 action",
    duration: "Instantaneous",
  },
  {
    name: "Scorching Ray",
    level: 2,
    description: 
      "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.",
    range: "150 feet",
    school: "Evocation",
    materials: "A tiny ball of bat guano and sulfur.",
    components: ["V", "S", "M"],
    castingTime: "1 action",
    duration: "Instantaneous",
  },
];