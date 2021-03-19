import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";

interface SideBarProps {
  selectedGenreId: number
  setSelectedGenreId: Dispatch<SetStateAction<number>>
  setSelectedGenre: Dispatch<SetStateAction<GenreResponseProps>>

}


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


import '../styles/sidebar.scss';

export function SideBar({ selectedGenreId, setSelectedGenreId, setSelectedGenre }: SideBarProps) {


  const [genres, setGenres] = useState<GenreResponseProps[]>([]);




  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);


  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);


  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )

}