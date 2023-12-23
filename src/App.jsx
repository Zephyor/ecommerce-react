import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './/pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Header from './components/Header';
import FeaturedPage from './pages/FeaturedPage';
import ProductPage from './pages/ProductPage';
import ShoppingCart from './components/SideCart';
import { useState } from 'react';
import { CartProvider } from './contexts/CartContext';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <AuthProvider>
              <CartProvider>

      <Router>
        <Header toggleCart={toggleCart}/>
        {isCartOpen && (
          <ShoppingCart
            style={{
              transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)',
            }}
          />
        )}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/featured' element={<FeaturedPage />} />
          <Route path='/product/:productId' element={<ProductPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/signin' element={<SignInPage />} />
        </Routes>
      </Router>
      </CartProvider>

    </AuthProvider>
  );
};

export default App;
