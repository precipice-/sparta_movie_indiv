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
        movies = response.results;
        drawMovieCard(movies);
    })
    .catch((err) => console.error(err));

let movies;
let searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
    console.log(searchInput.value);
    findMovie(movies, searchInput.value);
});

function onClickMovieCard(id) {
    window.alert(`id: ${id}`);
}

const cardWrapDiv = document.getElementById("card-wrap");
const drawMovieCard = (collectedMovies) => {
    let childrenLength = cardWrapDiv.children.length;
    for (let i = 0; i < childrenLength; i++) {
        cardWrapDiv.children[0].remove();
    }
    collectedMovies.forEach((movie) => {
        let div = document.createElement('div');
        div.classList.add('movie');

        let img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        let h2 = document.createElement('h2');
        h2.classList.add('movieName');
        h2.appendChild((() => {
            return document.createTextNode(movie.title);
        })());

        let p1 = document.createElement('p');
        p1.classList.add('overview');
        p1.appendChild((() => {
            return document.createTextNode(movie.overview);
        })());

        let p2 = document.createElement('p');
        p2.classList.add('movieRate');
        p2.appendChild((() => {
            return document.createTextNode(`Rating: ${movie.vote_average}`);
        })());

        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p1);
        div.appendChild(p2);

        div.addEventListener('click', () => {
            onClickMovieCard(movie.id);
        })

        cardWrapDiv.appendChild(div);

        /*let template = `<div class="movie" id="${movie.id}">
                      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="" />
                      <h2 class="movieName">${movie.title}</h2>
                      <p class="overview">${movie.overview}</p>
                      <p class="movieRate">Rating: ${movie.vote_average}</p>                      
                    </div>`;

        cardWrapDiv.insertAdjacentHTML("beforeend", template);*/
    });

    /*let cards = document.getElementsByClassName("movie");
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", onClickMovieCard);
    }*/
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
