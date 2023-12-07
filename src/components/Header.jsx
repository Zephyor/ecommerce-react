import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Adjust the import path

const Header = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth(); // Assuming you have a signOut method in your AuthContext

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/"); // Redirect to the home page after sign out
    } catch (error) {
      console.error("Sign Out Error:", error.message);
      // Handle sign-out error (e.g., display an error message)
    }
  };

  return (
    <div>
      {user ? (
        <>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
