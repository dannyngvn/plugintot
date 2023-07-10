import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Shop from './pages/Shop/Shop';
import Checkout from './pages/Checkout/Checkout';
import Admin from './pages/Admin/Admin';
import Header from './component/Header/Header';

function App() {
  const [productList, setProductList] = useState([]);
  const AddProductToProductList = product => {
    setProductList([...productList, product]);
  };
  const [bannerUrl, setBannerUrl] = useState();
  const addUrlToBannerUrl = url => {
    setBannerUrl({ ...bannerUrl, url });
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="admin"
          element={
            <Admin
              addUrlToBannerUrl={addUrlToBannerUrl}
              AddProductToProductList={AddProductToProductList}
            />
          }
        />
        <Route path="/" element={<Home bannerUrl={bannerUrl} />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="check-out" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
