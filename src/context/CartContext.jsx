import { useMemo, useState, createContext } from "react";

export const CartContext = createContext(undefined);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], total: 0 });

  const addToCart = (product) => {
    let _cart = { ...cart };
    let existing = _cart.items.find(
      (x) => x.product.id === product.id
    );
    if (existing) {
      existing.quantity += 1;
      existing.totalPrice =
        existing.product.price * existing.quantity;
    } else {
      _cart.items.push({
        product,
        quantity: 1,
        totalPrice: product.price,
      });
    }
    _cart.total = _cart.items
      .map((x) => x.totalPrice)
      .reduce((x, y) => x + y);
    setCart(_cart);
  };

  const context = useMemo(() => ({ cart, addToCart }), [cart]);

  return (
    <CartContext.Provider value={context}>
      {children}
    </CartContext.Provider>
  );
};
