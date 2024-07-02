/* Dada una lista de canciones, clasifícalas en un objeto donde las claves
sean los géneros y los valores sean arrays de canciones de ese género.
Utiliza bucles para estructurar este objeto e imprime el resultado por 
consola. */

const tracks = [
  { title: "Enter Sandman", genre: "Metal" },
  { title: "Back in Black", genre: "Rock" },
  { title: "Bohemian Rhapsody", genre: "Rock" },
  { title: "Blinding Lights", genre: "Pop" },
  { title: "Old Town Road", genre: "Country" },
  { title: "Smells Like Teen Spirit", genre: "Grunge" },
  { title: "Bad Guy", genre: "Pop" },
  { title: "Thunderstruck", genre: "Rock" },
  { title: "Hotel California", genre: "Rock" },
  { title: "Stairway to Heaven", genre: "Rock" },
];

const filteredTracks = {};

for (const track of tracks) {
  // si el género de la track no se encuentra en la lista filtrada, úsalo para crear un nuevo array.
  if (!filteredTracks[track.genre]) {
    filteredTracks[track.genre] = [];
  }
  // Añade el título del track a la lista filtrada
  filteredTracks[track.genre].push(track.title);
}

console.log(filteredTracks);
