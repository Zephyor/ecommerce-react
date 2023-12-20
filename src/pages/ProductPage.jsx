import { useParams } from "react-router-dom";
import GameCard from "../components/GameCard";
import { useEffect, useState } from "react";
import { fetchGameById } from "../firestore";
import "../styles/components/product_container.scss";
import "../styles/style.scss";
const ProductPage = () => {
  const { productId } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gameData = await fetchGameById(productId);
        setGame(gameData);
      } catch (error) {
        console.error("Error fetching game info:", error.message);
      }
    };

    fetchData();
  }, [productId]);

  const handleAddToCart = () => {
    // Implement the logic to add the current game to the cart
    console.log("Added to cart:", game);
  };

  return (
    <div className="product-container">
      {game && (
        <>
          <GameCard game={game} clickable={false} className="product-card" />
          <div className="product-details">
            <h2>{game.Name}</h2>
            <p>{game.Description}</p>
            <p>Price: {game.Price}€</p>
            <button className="button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
