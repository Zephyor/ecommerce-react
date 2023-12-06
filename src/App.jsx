import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeaturedPage from './pages/FeaturedPage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import RecommandedPage from './pages/RecommandedPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Fragment>
      <HomePage />
    </Fragment>
  );
};

export default App;
