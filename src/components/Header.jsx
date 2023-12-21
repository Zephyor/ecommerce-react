import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useRef } from 'react';
import PS5 from '../images/ps5-playstation-5-logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Header = (props) => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const navbar = useRef(null);
  const { pathname } = useLocation();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Sign Out Error:', error.message);
      // Handle sign-out error
    }
  };

  return (
    <nav className='navigation' ref={navbar}>
      <div className='logo'>
        <Link to='/'>
          <img src={PS5} alt='Logo' />
        </Link>
      </div>
      <ul className='navigation-menu-main'>
        <li>
          <NavLink activeClassName='navigation-menu-active' to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='navigation-menu-active'
            to='/featured-products'
          >
            Featured
          </NavLink>
        </li>
      </ul>
      <ul className='navigation-menu'>
        <li className='navigation-menu-item'>
          <button className='button' onClick={props.toggleCart}>
            <LocalMallIcon />
          </button>
        </li>
        {user ? (
          <li className='navigation-menu-item'>
            <button className='button' onClick={handleSignOut}>
              <LogoutIcon />
            </button>
          </li>
        ) : (
          <li className='navigation-action'>
            {pathname !== '/signup' && (
              <Link className='button button-small' to='/signup'>
                Sign Up
              </Link>
            )}
            {pathname !== '/signin' && (
              <Link
                className='button button-small button-muted margin-left-s'
                to='/signin'
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
