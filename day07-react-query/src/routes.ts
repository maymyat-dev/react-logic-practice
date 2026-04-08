import { createBrowserRouter } from "react-router";
import ProductList from "./components/ProductList";
import ProductLayout from "./pages/ProductLayout";
import ProductDetails from "./components/ProductDetails";

const router = createBrowserRouter([
  {
    path: "products",
    Component: ProductLayout,
    children: [
      { index: true, Component: ProductList },
      { path: ":id", Component: ProductDetails },
    ],
  },
]);

export default router;