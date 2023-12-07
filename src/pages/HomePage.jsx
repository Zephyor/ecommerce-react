import { useAuth } from "../contexts/AuthContext";
import GameComponent from "../components/Game";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div style={{ margin: "5rem" }}>
      {user ? <h1>Welcome {user.email}</h1> : <h1>Welcome!</h1>}
      <GameComponent />
    </div>
  );
};

export default HomePage;
