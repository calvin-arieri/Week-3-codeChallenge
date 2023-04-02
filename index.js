//fetching data
fetch("http://localhost:3000/films")
.then(res => res.json())
.then(films =>films.forEach(movie => renderMovies(movie)))

//rendering films
renderMovies = movie =>{
    const movieList = document.createElement("ul")
    movieList.className = "list"
    movieList.innerHTML = `
    <li> <img src=${movie.poster}>
    <p>
    title: ${movie.title} <br>
    run time: ${movie.runtime} <br>
    capacity:${movie.capacity}<br>
    showtime:${movie.showtime} <br>
    sold tickets: ${movie.tickets_sold} <br>
    description:${movie.description} <br>
    `
    
    document.getElementById("listMovies").appendChild(movieList)
}
 
