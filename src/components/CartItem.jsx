import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ game }) => {
  const { removeFromCart } = useContext(CartContext);
  console.log(game);
  return (
    <div className='cart-item'>
      <h3>{game.Name}</h3>
      <p>Price: {game.Price}€</p>
      <button
        className='button-muted'
        onClick={() => removeFromCart(game.docId)}
      >
        Remove from Cart
      </button>
    </div>
  );
};

export default CartItem;
