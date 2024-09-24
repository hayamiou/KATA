def filter_by_title(movies, searched_title)
  movies.select do |movie|
    movie[:title].downcase.include?(searched_title.downcase)
  end
end

# Films
movies = [
  { title: "The Godfather", year: 1972, actors: ["Marlon Brando", "Al Pacino"] },
  { title: "The Shawshank Redemption", year: 1994, actors: ["Tim Robbins", "Morgan Freeman"] },
  { title: "The Dark Knight", year: 2008, actors: ["Christian Bale", "Heath Ledger"] },
  { title: "Pulp Fiction", year: 1994, actors: ["John Travolta", "Samuel L. Jackson"] },
  { title: "Schindler's List", year: 1993, actors: ["Liam Neeson", "Ralph Fiennes"] },
  { title: "Eternal Sunshine of the Spotless Mind", year: 2004, actors: ["Jim Carrey", "Kate Winslet"] }
]

# Tableau des titres à rechercher
searched_titles = ["dark", "eternal", "fiction"]

# Test
searched_titles.each do |searched_title|
  filtered_movies = filter_by_title(movies, searched_title)

  filtered_movies.each do |movie|
    puts "Le film #{movie[:title]} contient le mot \"#{searched_title}\""
  end
end
