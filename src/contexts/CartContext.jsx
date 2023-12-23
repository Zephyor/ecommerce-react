import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart(currentCart => [...currentCart, game]);
  };

  const removeFromCart = (gameToRemove) => {
    setCart(currentCart => currentCart.filter(game => game.id !== gameToRemove.id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

