import React, { useEffect, useState } from 'react';


import { api } from './services/api';

import './styles/global.scss';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);




  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);



  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        setSelectedGenre={setSelectedGenre}
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
      />

      <Content selectedGenreId={selectedGenreId} selectedGenre={selectedGenre} />
    </div>
  )
}