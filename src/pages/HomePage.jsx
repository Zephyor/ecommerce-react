import { useAuth } from "../contexts/AuthContext";
import GameComponent from "../components/Game";
import Banner from "../components/Banner";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div style={{ margin: "5rem" }}>
      {user ? <h1>Welcome {user.email}</h1> : <h1>Welcome!</h1>}
      <Banner />
      <GameComponent />
    </div>
  );
};

export default HomePage;
