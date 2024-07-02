/* Desarrolla una función que busque en un array de objetos representando
mutantes si existiese alguno con un poder específico y retorne un mensaje
indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder. */

const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(mutants, power) {
  const foundMutants = mutants.filter((mutant) => mutant.power === power);
  for (const foundMutant of foundMutants) {
    if (foundMutant.power === power) {
      return `The mutant ${foundMutant.name} has the ${foundMutant.power} power`;
    } else {
      return `There isn't any mutant with ${power} power`;
    }
  }
}

findMutantByPower(mutants, "super speed");
console.log(findMutantByPower(mutants, "super speed"));
