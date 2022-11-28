import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ProductList,
  ProductDetails,
  MyCart,
} from "./components/products";
import { CartContextProvider } from "./context";

export const Router = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} exact />
          <Route
            path="/products/:productId"
            element={<ProductDetails />}
            exact
          />
          <Route path="/cart" element={<MyCart />} exact />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};
