import React, { useEffect, useState } from 'react';
import './App.css';
import { Category } from './components/Category';
import Landing from './pages/landing';

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
    <div>
      {moveis.map(category => <Category movie={category} /> )}
    </div>
  );
}

export default App;
