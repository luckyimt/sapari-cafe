import Hero from './components/Hero';
import Header from './components/Header';
import Basket from './components/Basket';
import Form from './components/Form';
import Order from './components/Order'
import data from './json/data';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';






function App() {
  const { categories } = data;
  const [cartItems, setCartItems] = useState([]);




  const onAdd = (category) => {
    const exist = cartItems.find((x) => x.id === category.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === category.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...category, qty: 1 }]);
    }
  };



  const onRemove = (category) => {
    const exist = cartItems.find((x) => x.id === category.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== category.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id ===category.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };



  return (
    <>
      <Header countCartItems={cartItems.length} />
      <Routes>
        <Route path="/" element={<Hero categories={categories} onAdd={onAdd} />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/cart" element={<Basket cartItems={ cartItems } onAdd={onAdd} onRemove={onRemove}/>} />
        <Route path="/order" element={<Order cartItems = { cartItems } />} />
        <Route path="/contact" element={<Form />} />
        {/* <Route path="/footer" element={<Footer />} /> */}
      </Routes>
      </>
  );
}



export default App;
