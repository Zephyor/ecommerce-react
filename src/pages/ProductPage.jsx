import { useParams } from 'react-router-dom';
import GameCard from '../components/GameCard';
import { useContext, useEffect, useState } from 'react';
import { fetchGameById } from '../firestore';
import '../styles/components/product_container.scss';
import '../styles/style.scss';
import { CartContext } from '../contexts/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = () => {
  const { productId } = useParams();
  const [game, setGame] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gameData = await fetchGameById(productId);
        setGame(gameData);
      } catch (error) {
        console.error('Error fetching game info:', error.message);
      }
    };

    fetchData();
  }, [productId]);

  const handleAddToCart = () => {
    addToCart(game);
  };

  const handleClick = () => {
    toast.success(`${game.Name} successfully added to cart`); // Assuming you have a clearCart function in your CartContext
  };

  return (
    <div className='product-container'>
      {game && (
        <>
          <GameCard game={game} clickable={false} className='product-card' />
          <div className='product-details'>
            <h2>{game.Name}</h2>
            <p>{game.Description}</p>
            <p>Price: {game.Price}€</p>
            <button
              className='button'
              onClick={() => {
                handleAddToCart();
                handleClick();
              }}
            >
              Add to Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
