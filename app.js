// ======== SAMPLE TRAILERS ======== //
// Add your movie title as key and the YouTube video ID as value
const sampleTrailers = {
    "Inception": "YoHD9XEInc0",
    "Avatar": "5PSNL1qE6VY",
    "Interstellar": "zSWdZVtXT7E",
    "The Dark Knight": "EXeTwQWrcwY",
    "Avengers Endgame": "TcMBFSGVi1c",
    "Spider-Man No Way Home": "JfVOs4VSpmA",
    "Black Panther": "xjDjIWPwcPU",
    "Joker": "zAGVQLHvwOY",
    "Frozen": "TbQm5doF_Uc",
    "John Wick": "2AUmvWm5ZDQ",
    "Dune": "n9xhJrPXop4",
    "The Matrix": "vKQi3bBA1y8",
    "Prison Break": "AL9zLctDJaU"
};

// ======== SAMPLE MOVIES ======== //
// Add new movies by copying the structure below:
// {
//   title: "Movie Name",
//   poster: "Link to poster image"
// }
// Then add a corresponding entry in sampleTrailers with its YouTube trailer ID
const movies = [
    { title: "Inception", poster: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_SY679_.jpg" },
    { title: "Avatar", poster: "https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_SY679_.jpg" },
    { title: "Interstellar", poster: "https://m.media-amazon.com/images/I/71yAz1P+s5L._AC_SY679_.jpg" },
    { title: "The Dark Knight", poster: "https://m.media-amazon.com/images/I/51k0qa6qHPL._AC_SY679_.jpg" },
    { title: "Avengers Endgame", poster: "https://m.media-amazon.com/images/I/81ai6zx6eXL._AC_SY679_.jpg" },
    { title: "Spider-Man No Way Home", poster: "https://m.media-amazon.com/images/I/71qY+eBLqhL._AC_SY679_.jpg" },
    { title: "Black Panther", poster: "https://m.media-amazon.com/images/I/81b3l-4F6NL._AC_SY679_.jpg" },
    { title: "Joker", poster: "https://m.media-amazon.com/images/I/81C9e7Ck+wL._AC_SY679_.jpg" },
    { title: "Frozen", poster: "https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SY679_.jpg" },
    { title: "John Wick", poster: "https://m.media-amazon.com/images/I/51xG3cb0oCL._AC_SY679_.jpg" },
    { title: "Dune", poster: "https://m.media-amazon.com/images/I/81gI+1ahEvL._AC_SY679_.jpg" },
    { title: "The Matrix", poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg" },
    {title: "Prison Break", poster: "prisonbreak.jpg"},
    {tittle: "Death Force", poster: "dead.jpg"},
];

// ======== DISPLAY MOVIES ======== //
function displayMovies(movieArray = movies) {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = ""; // Clear previous

    movieArray.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="movie-title">${movie.title}</div>
        `;

        card.onclick = () => showTrailer(movie.title);

        movieList.appendChild(card);
    });
}

// Initial display
displayMovies();

// ======== SEARCH FUNCTION ======== //
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        displayMovies(); // show all if search is empty
        return;
    }

    const filtered = movies.filter(movie => movie.title.toLowerCase().includes(query));
    if (filtered.length > 0) {
        displayMovies(filtered);
    } else {
        alert("No movies found for: " + query);
    }
});

// ======== TRAILER MODAL ======== //
function showTrailer(movieTitle) {
    const videoId = sampleTrailers[movieTitle];
    if (!videoId) {
        alert("Trailer not available for this movie.");
        return;
    }

    const modal = document.getElementById("trailerModal");
    const iframe = document.getElementById("trailerFrame");

    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    modal.style.display = "block";
}

function closeTrailer() {
    const modal = document.getElementById("trailerModal");
    const iframe = document.getElementById("trailerFrame");

    iframe.src = ""; // Stop video
    modal.style.display = "none";
}
