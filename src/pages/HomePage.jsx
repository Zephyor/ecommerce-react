import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div>
        <Link to="/signin">
          <button>SignIn</button>
        </Link>
        <Link to="/signup">
          <button>SignUp</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
