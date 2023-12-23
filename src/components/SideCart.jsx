import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';
import '../styles/style.scss';
import CheckoutButton from './CheckoutButton';

const ShoppingCart = (props) => {
  const { cart } = useContext(CartContext);

  // Calcul du total en s'assurant que Price est un nombre
  const totalPrice = cart.reduce((total, game) => {
    const gamePrice = Number(game.Price); // Convertit Price en nombre si ce n'est pas déjà le cas
    return total + gamePrice;
  }, 0);

  return (
    <div className='cart-sidebar'>
      <div className='cart-header'>
        <button className='button' onClick={props.toggleCart}>
          Close
        </button>
      </div>
      <div className='cart-content'>
        <h2>Your Cart</h2>
        {cart.length > 0 ? (
          cart.map((game) => <CartItem key={game.id} game={game} />)
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className='cart-total'>
        <p>Total: {totalPrice.toFixed(2)}€</p> {/* Affichage du total */}
      </div>
      <CheckoutButton />
    </div>
  );
};

export default ShoppingCart;
