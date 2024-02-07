import Header from "./components/Header";
import ProductList from "./components/ProductList";
import AddForm from "./components/AddForm";

import productData from "./mockData/data";

import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <div id="app">
      <Header cartItems={cartItems} />
      <main>
        <ProductList products={products} />
        <AddForm />
      </main>
    </div>
  );
};

export default App;
