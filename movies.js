function filterByTitle(movies, searchedTitle) {
  return movies.filter(movie =>
      movie.title.toLowerCase().includes(searchedTitle.toLowerCase())
  );
}

// Films
const movies = [
  { title: "The Godfather", year: 1972, actors: ["Marlon Brando", "Al Pacino"] },
  { title: "The Shawshank Redemption", year: 1994, actors: ["Tim Robbins", "Morgan Freeman"] },
  { title: "The Dark Knight", year: 2008, actors: ["Christian Bale", "Heath Ledger"] },
  { title: "Pulp Fiction", year: 1994, actors: ["John Travolta", "Samuel L. Jackson"] },
  { title: "Schindler's List", year: 1993, actors: ["Liam Neeson", "Ralph Fiennes"] },
  { title: "Eternal Sunshine of the Spotless Mind", year: 2004, actors: ["Jim Carrey", "Kate Winslet"] }
];

// Titres à rechercher
const searchedTitles = ["dark", "eternal", "fiction"];

// Test 
searchedTitles.forEach(searchedTitle => {
  const filteredMovies = filterByTitle(movies, searchedTitle);

  filteredMovies.forEach(movie => {
      console.log(`Le film ${movie.title} contient le mot "${searchedTitle}"`);
  });
});
