//fetching data
fetch("http://localhost:3000/films")
.then(res => res.json())
.then(films =>films.forEach(movie => renderMovies(movie)))

//rendering films
renderMovies = movie =>{
    const movieList = document.createElement("ul")
    movieList.className = "list"
    movieList.innerHTML = `<li id="available" onclick="renderMore()">${movie.title}</li>`
    
    document.getElementById("listMovies").appendChild(movieList)
}
 
function renderMore(){
  console.log()

}