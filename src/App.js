import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [dummyMovies, setDummyMovies]=useState([]);

  async function fetchFilm(){
     const res=  await fetch("https://swapi.dev/api/films")
     const data=await res.json();
     let updateMovies=data.results.map((res)=>{
      return {id:res.episode_id,
              title:res.title,
              releaseDate:res.release_date,
              openingText:res.opening_crawl
            };}
          )
          setDummyMovies(updateMovies)
    

  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchFilm}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
    </React.Fragment>
  );
}

export default App;
