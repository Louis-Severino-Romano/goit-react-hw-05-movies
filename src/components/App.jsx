import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './pages/SharedLayout';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./pages/Cast'));
const Reviews = lazy(() => import('./pages/Reviews'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route exact path="/" component={Home} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId" component={MovieDetails} />
          <Route path="/movies" component={Movies} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
