import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import HomePage from ".//pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Header from "./components/Header";
import ShopPage from "./pages/ShopPage";
import RecommendedPage from "./pages/RecommendedPage";
import FeaturedPage from "./pages/FeaturedPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/recommended" element={<RecommendedPage />} />
          <Route path="/featured" element={<FeaturedPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
