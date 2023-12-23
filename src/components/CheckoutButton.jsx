import { useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../contexts/CartContext';

const CheckoutButton = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleClick = () => {
    if (cart.length === 0) {
      // Display a warning toast if the cart is empty
      toast.warning('Your cart is empty. Add items before checkout!');
    } else {
      // Display a success toast and clear the cart
      toast.success(
        'Congratulations! Your order has been placed. Thank you for shopping!'
      );
      removeFromCart(); // Assuming you have a clearCart function in your CartContext
    }
  };

  return (
    <button
      className='button'
      onClick={handleClick}
      disabled={cart.length === 0}
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
