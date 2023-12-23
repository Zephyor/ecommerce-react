import  { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ game }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-item">
      <h3>{game.Name}</h3>
      <p>Price: {game.Price}€</p>
      <button className='button button-small button-muted margin-left-s' onClick={() => removeFromCart(game)}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;
