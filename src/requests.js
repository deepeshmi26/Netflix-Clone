const API_KEY = "0c1c84f760e2986619a9e156719ab68b";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomaceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDcumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
