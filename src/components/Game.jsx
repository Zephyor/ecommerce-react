import { useEffect, useState } from "react";
import { fetchGameData } from "../firestore";
import GameCard from "./GameCard";

const GameComponent = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gamesData = await fetchGameData();
        setGames(gamesData);
      } catch (error) {
        console.error("Error fetching games:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameComponent;
