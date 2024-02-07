import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import AddForm from "./components/AddForm";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("/api/products");
        console.log(data);
        setProducts(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getData();
  }, []);

  const handleAddProduct = async (newProduct) => {
    try {
      const { data } = await axios.post("/api/products", newProduct);
      setProducts((prev) => prev.concat(data));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div id="app">
      <Header cartItems={cartItems} />
      <main>
        <ProductList products={products} />
        <AddForm onSubmit={handleAddProduct} />
      </main>
    </div>
  );
};

export default App;
