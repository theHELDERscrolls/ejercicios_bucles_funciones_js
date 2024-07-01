/* Agrupa las películas de Star Wars por década de
lanzamiento en un objeto donde las claves son las
décadas y los valores son arrays de películas.
Utiliza bucles para lograrlo e imprime el objeto
final por consola. */

const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

let starWars1970 = [];
let starWars1980 = [];
let starWars1990 = [];
let starWars2000 = [];
let starWars2010 = [];

for (const starWarsMovie of starWarsMovies) {
  if (starWarsMovie.releaseYear < 1980) {
    starWars1970.push(starWarsMovie.title);
  } else if (
    starWarsMovie.releaseYear >= 1980 &&
    starWarsMovie.releaseYear < 1990
  ) {
    starWars1980.push(starWarsMovie.title);
  } else if (
    starWarsMovie.releaseYear >= 1990 &&
    starWarsMovie.releaseYear < 2000
  ) {
    starWars1990.push(starWarsMovie.title);
  } else if (
    starWarsMovie.releaseYear >= 2000 &&
    starWarsMovie.releaseYear < 2010
  ) {
    starWars2000.push(starWarsMovie.title);
  } else if (starWarsMovie.releaseYear >= 2010) {
    starWars2010.push(starWarsMovie.title);
  }
}

console.log("Películas de Star Wars de los '70: " + starWars1970);
console.log("Películas de Star Wars de los '80: " + starWars1980);
console.log("Películas de Star Wars de los '90: " + starWars1990);
console.log("Películas de Star Wars de los 2000: " + starWars2000);
console.log("Películas de Star Wars de los 2010: " + starWars2010);
