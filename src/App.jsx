import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SharedLayout from "./pages/Root/SharedLayout";
import Home from "./pages/Home/Home";
import FavoriteProducts from "./pages/FavoriteProducts/FavoriteProducts";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Basket from "./pages/Basket/Basket";
import ErrorPage from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/favorites", element: <FavoriteProducts /> },
      { path: "/basket", element: <Basket /> },
      { path: "/products/:productId", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  console.log("App rendered...");
  return <RouterProvider router={router} />;
}

export default App;
