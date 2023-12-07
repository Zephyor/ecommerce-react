import { useAuth } from "../contexts/AuthContext";

const HomePage = () => {
  const { user } = useAuth();

  return <div>{user ? <h1>Welcome {user.email}</h1> : <h1>Welcome!</h1>}</div>;
};

export default HomePage;
