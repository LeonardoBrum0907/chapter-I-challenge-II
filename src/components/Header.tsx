import { GenreResponseProps } from "../App";

interface headerProps {
  selectedGenre: GenreResponseProps;
}

export function Header({selectedGenre}: headerProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  );
}