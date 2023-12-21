import '../styles/style.scss';

const ShoppingCart = () => {
  return (
    <div className='cart-sidebar'>
      <h3>Your Shopping Cart</h3>
      {/* Add your cart items and their details here */}
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        {/* Add more items as needed */}
      </ul>
      <p>Total: 79.99€</p>
      <button className='button'>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
