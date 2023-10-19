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
        console.log(response);
        const movies = response.results;
        console.log(movies);
        const moviename = document.createElement("div");
        const overview = document.createElement("div");
        const rating = document.createElement("div");
        moviename.textContent = movies[0].original_title;
        overview.textContent = movies[0].overview;
        rating.textContent = movies[0].vote_average;
        const movieInfo = document.getElementById("movieInfo");
        movieInfo.appendChild(moviename);
        movieInfo.appendChild(overview);
        movieInfo.appendChild(rating);
    })
    // .then((response) => console.log(response))
    .catch((err) => console.error(err));

// async function movie(){
//     const movieResult = options.results;
//     console.log(movies);
// }
