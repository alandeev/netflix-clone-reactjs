import React, { useEffect, useState } from 'react';
import './App.css';
import { Category } from './components/Category';
import { FeatureMain } from './components/FeatureMain';

import tmdbService, { categoryResponse } from './services/tmdbService';

function App() {
  const [ moveis, setMoveis ] = useState<categoryResponse[]>([]);
  
  useEffect(() => {
    (async () => {
      const items = await tmdbService.getPageInfo();
      setMoveis(items);
    })()
  }, [])

  return (
    <div className="app">
      <FeatureMain />
      {moveis.map((category, key) => <Category key={key} category={category} /> )}
    </div>
  );
}

export default App;
