import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider, //alias name to just export.. to avoid the complexes because of the file name
} from "react-router-dom";

//=======================================

import RootLayout from "../global/RootLayout";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import MovieDetails from "../pages/MovieDetails";
import SearchPage from "../pages/Search";
import WatchedPage from "../pages/Watched";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/favorites", element: <Favorites /> },
      { path: "/movies/:id", element: <MovieDetails /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/watched", element: <WatchedPage /> },
    ],
  },
]);

const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};

export default RouterProvider;
