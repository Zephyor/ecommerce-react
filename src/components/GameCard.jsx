const GameCard = ({ game }) => {
  const { Name, Price, imageUrl } = game;

  return (
    <div>
      <h3>{Name}</h3>
      <p>Price: {Price}€</p>
      <img src={imageUrl} alt={Name} style={{ maxWidth: "10%" }} />
    </div>
  );
};

export default GameCard;
