import MoviesGridContainer from "./MoviesGridContainer/MoviesGridContainer";
import MovieListItem from "./MovieListItem";
import Pagination from "components/Pagination";

const MovieList = ({ theme, movies, baseUrl }) => (
  <>
    <MoviesGridContainer>
      {movies.results.map((movie, index) => (
        <MovieListItem
          theme={theme}
          key={movie.id}
          movie={movie}
          fetchpriority={index === 0 ? "high" : "low"}
          baseUrl={baseUrl}
        />
      ))}
    </MoviesGridContainer>
    <Pagination page={movies.page} totalPages={movies.total_pages} />
  </>
);

export default MovieList;
