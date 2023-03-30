//fetching data
fetch("http://localhost:3000/films")
.then(res => res.json())
.then(films =>films.forEach(movie => renderMovies(movie)))

//rendering films
renderMovies = movie =>{
    const movieList = document.createElement("li")
    movieList.className = "list"
    
}