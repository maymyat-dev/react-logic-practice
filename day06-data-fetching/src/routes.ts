import { createBrowserRouter } from "react-router";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ProductLayout from "./components/ProductLayout";

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
