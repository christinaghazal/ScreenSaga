import RouterProvider from "./routers/RouterProvider";
import MoviesProvider from "./context/MoviesProvider";

function App() {
  return (
    <MoviesProvider>
      <RouterProvider />
    </MoviesProvider>
  );
}

export default App;
