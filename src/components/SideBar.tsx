import { Button } from '../components/Button';

interface GenreResponseType {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


interface SidebarProps {
  genres: GenreResponseType[];
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
}
export function SideBar({ genres, handleClickButton, selectedGenreId }: SidebarProps) {
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