import React from "react";
import "./App.css";
import requests from "./requests";
import Banner from "./Banner";
import Row from "./Row";
import Nav from "./Nav";
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Treding Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomaceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDcumentaryMovies} />
    </div>
  );
}

// 0c1c84f760e2986619a9e156719ab68b
// https://netflix-clone-9ffd3-default-rtdb.firebaseio.com/
export default App;
