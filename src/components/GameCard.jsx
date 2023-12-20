import { Link } from "react-router-dom";
import "../styles/components/gamecard.scss";

const GameCard = ({ game, clickable = true }) => {
  const { id, Name, Price, imageUrl } = game;

  return (
    <div className="game-card">
      {clickable ? (
        <Link to={`/product/${id}`}>
          <img className="game-image" src={imageUrl} alt={Name} />
          <div className="game-details">
            <h3 className="game-title">{Name}</h3>
            <p className="game-price">Price: {Price}€</p>
          </div>
        </Link>
      ) : (
        <>
          <img className="game-image" src={imageUrl} alt={Name} />
          <div className="game-details">
            <h3 className="game-title">{Name}</h3>
            <p className="game-price">Price: {Price}€</p>
          </div>
        </>
      )}
    </div>
  );
};

export default GameCard;
