import React, { useEffect, useState } from 'react';
import { useParams, Link, Route, useRouteMatch } from 'react-router-dom';
import { getMovieDetails } from '../API/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { path, url } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(response => setMovie(response.data));
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <Link to={`${url}/cast`}>Cast</Link>
      <Link to={`${url}/reviews`}>Reviews</Link>

      <Route path={`${path}/cast`} component={Cast} />
      <Route path={`${path}/reviews`} component={Reviews} />
    </div>
  );
};

export default MovieDetails;