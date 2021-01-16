import React, { useEffect, useState } from 'react';
import './App.css';

import { Category } from './components/Category';
import { FeatureMain } from './components/FeatureMain';
import { IMovieExtense } from './interfaces/movie';

import tmdbService, { categoryResponse } from './services/tmdbService';

function App() {
  const [ moveis, setMoveis ] = useState<categoryResponse[]>([]);
  const [ movieMain, setMovieMain ] = useState<IMovieExtense>()

  useEffect(() => {
    (async () => {
      const items = await tmdbService.getPageInfo();
      
      let randomId = items[1].items[Math.floor(Math.random() * items[1].items.length)].id
      
      let MainItem = await tmdbService.getMovieById(randomId);
      if(!MainItem){
        randomId = items[1].items[Math.floor(Math.random() * items[1].items.length)].id
        MainItem = await tmdbService.getMovieById(randomId);
      }

      setMovieMain(MainItem);
      setMoveis(items);
    })()
  }, [])

  return (
    <>
      <div className="movie-main">
        { movieMain && <FeatureMain movie={movieMain}  /> }
      </div>
      <div className="categories">  {/* precisa corrigir as paradas da KEY Na category */}
        { moveis && moveis.map((category, key) => <Category key={key+1} category={category} /> ) }
      </div>
    </>
  );
}

export default App;
