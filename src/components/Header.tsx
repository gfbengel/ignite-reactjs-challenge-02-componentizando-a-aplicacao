interface HeaderProps {
  selectedGenre: {
    title: string;
  }
}

import '../styles/header.scss';
export function Header({ selectedGenre }: HeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}