//fetching data
const url = "http://localhost:3000/films"
fetch(url)
.then(res => res.json())
.then(films =>films.forEach(movie => renderMovies(movie)))




//rendering films
renderMovies = movie =>{
    const movieDetail = document.createElement("p")
    movieDetail.className = "list"
    movieDetail.innerHTML = `
    <p>
    <img src=${movie.poster}>
    <strong> Title:</strong> ${movie.title} <br>
    <strong>Run time:</strong>  ${movie.runtime} <br>
    <strong>Capacity:</strong> ${movie.capacity}<br>
    <strong>Showtime:</strong> ${movie.showtime} <br>
    <strong>Sold tickets: </strong><span> ${movie.tickets_sold} </span><br>
    <strong>Description:</strong> ${movie.description} <br>
    <button id="buy">Buy ticket</button>
    </p>
    `
    //creating reduce ticket
    movieDetail.querySelector("#buy").addEventListener('click',()=>{
        movie.tickets_sold -- ;
        const leftTickets = movie.tickets_sold

        if

    })
   
    document.getElementById("listMovies").appendChild(movieDetail)

    const movieList = document.createElement("li")   
    movieList.innerHTML=`
    ${movie.title}
    `

    document.getElementById("films").appendChild(movieList)

}


