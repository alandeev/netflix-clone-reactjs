import React, { useEffect, useState } from 'react';
import './App.css';
import { Category } from './components/Category';
import { FeatureMain } from './components/FeatureMain';
import { IMovie } from './interfaces/movie';

import tmdbService, { categoryResponse } from './services/tmdbService';

function App() {
  const [ moveis, setMoveis ] = useState<categoryResponse[]>([]);
  const [ movieMain, setMovieMain ] = useState<IMovie>()

  useEffect(() => {
    (async () => {
      const items = await tmdbService.getPageInfo();
      const randomId = items[0].items[Math.floor(Math.random() * items[0].items.length)].id
      
      const MainItem = await tmdbService.getMovieById(randomId);

      setMovieMain(MainItem);
      setMoveis(items);
    })()
  }, [])

  return (
    <>
      { movieMain && <FeatureMain movie={movieMain}  /> }
      <div className="app">  {/* precisa corrigir as paradas da KEY Na category */}
        { moveis.map((category, key) => <Category key={key+1} category={category} /> ) }
      </div>
    </>
  );
}

export default App;
