import { useEffect, useState } from "react";

export const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    /**
     * Calling async functions inside a Effect hook
     */
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=9a78c95&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();

        if (!data.Search) throw new Error("No movies found!");

        setMovies(data.Search);

        return () => {
          controller.abort();
        };
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      setIsLoading(false);
      return;
    }

    //handleCloseMovie();
    fetchMovies();
    /**
     * Dependency Array -> []
     *
     * By default, effects run after every render
     *
     * the "[]" when empty means that the effect will
     * only be execuited at the component first mount
     *
     * Effect dependencies are state variables ("movies" for example),
     * each time one of the dependencies changes, the effect will be executed again
     *
     * Every state variable and prop used inside the effect Must
     * be included in the dependecy array
     */
  }, [query]);

  return { movies, isLoading, error };
};
