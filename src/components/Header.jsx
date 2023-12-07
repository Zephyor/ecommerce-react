import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useRef } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const navbar = useRef(null);
  const { pathname } = useLocation();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Sign Out Error:", error.message);
      // Handle sign-out error
    }
  };

  return (
    <nav className="navigation" ref={navbar}>
      <div className="logo">
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <ul className="navigation-menu-main">
        <li>
          <NavLink activeClassName="navigation-menu-active" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="navigation-menu-active" to="/shop">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="navigation-menu-active"
            to="/featured-products"
          >
            Featured
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="navigation-menu-active"
            to="/recommended-products"
          >
            Recommended
          </NavLink>
        </li>
      </ul>
      <ul className="navigation-menu">
        {user ? (
          <li className="navigation-menu-item">
            <button onClick={handleSignOut}>Logout</button>
          </li>
        ) : (
          <li className="navigation-action">
            {pathname !== "/signup" && (
              <Link className="button button-small" to="/signup">
                Sign Up
              </Link>
            )}
            {pathname !== "/signin" && (
              <Link
                className="button button-small button-muted margin-left-s"
                to="/signin"
              >
                Sign In
              </Link>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
