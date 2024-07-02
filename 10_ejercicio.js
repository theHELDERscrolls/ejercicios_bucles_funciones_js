/* Desarrolla una función que reciba un país por parámetro y devuelva su capital.
Utiliza un objeto para almacenar los países y sus capitales.
La función debe manejar casos en los que el país no esté en la lista, devolviendo
un mensaje adecuado. */

const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
  // Buscamos el parámetro country dentro de nuestro objeto
  if (capitals[country]) {
    // Si existe, devuelve su valor (esto es, su capital)
    return `The capital of ${country} is ${capitals[country]}.`;
  } else {
    // Si no existe, indícalo.
    return `We don't have information about the capital of ${country}.`;
  }
}

console.log(getCapital("Sweden"));
