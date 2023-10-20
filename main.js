const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTMzMDJiMTJmZmJkMjMyNzI2M2Y3NzgwN2NkYWU3NiIsInN1YiI6IjY1MmYyOTc5MGNiMzM1MTZmZDRiNzM5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.shEys2KpaKJhQyQVxL97hmAmRPZ101n0SmCtfdFL9dE",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {
    // console.log(response);

    movies = response.results;
    // console.log(movies);
    drawMovieCard(movies);

    let cards = document.getElementsByClassName("movie");
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", click);
    }
  })
  .catch((err) => console.error(err));

let movies;
let searchInput;
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
        searchInput = document.querySelector("#search-input");
        console.log(searchInput);
        findMovie(movies, searchInput.value);
    });


function click(e) {
  window.alert("id: " + this.id);
}

const drawMovieCard = (collectedMovies) => {
  document.querySelector(".movie").remove();
  collectedMovies.forEach((movie) => {
    let template = `<div class="movie" id="${movie.id}">
                      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="" />
                      <h2 class="movieName">${movie.title}</h2>
                      <p class="overview">${movie.overview}</p>
                      <p class="movieRate">Rating: ${movie.vote_average}</p>                      
                    </div>`;

    document
      .querySelector("#card-wrap")
      .insertAdjacentHTML("beforeend", template);
  });
};

// 영화 객체, 검색참 인풋 / 출력값 받아서 다시 그리기
const findMovie = (object, keyword) => {
  let searchResult = [];

  for (let x = 0; x < object.length; x++) {
    if (object[x].title.includes(keyword)) {
      searchResult.push(object[x]);
    }
  }
  drawMovieCard(searchResult);
};
