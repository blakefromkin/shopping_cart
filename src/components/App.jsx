import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Header";
import ProductList from "./ProductList";
import AddForm from "./AddForm";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCart = async () => {
      try {
        const { data } = await axios.get("/api/cart");
        setCartItems(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getCart();
  }, []);

  const handleAddProduct = async (newProduct) => {
    try {
      const { data } = await axios.post("/api/products", newProduct);
      setProducts((prev) => prev.concat(data));
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleEditProduct = async (editedProduct, id) => {
    try {
      const { data } = await axios.put(`/api/products/${id}`, editedProduct);
      setProducts((prev) => {
        return prev.map((product) => {
          if (product._id === data._id) {
            return data;
          } else {
            return product;
          }
        });
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`api/products/${productId}`);
      setProducts((prev) => {
        return prev.filter((product) => product._id !== productId);
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      const { data } = await axios.post(`api/add-to-cart`, {
        productId,
      });

      setProducts((prev) => {
        return prev.map((product) => {
          if (product._id === productId) {
            return data.product;
          } else {
            return product;
          }
        });
      });

      setCartItems((prev) => {
        const idx = prev.findIndex((item) => item._id === data.item._id);
        if (idx >= 0) {
          return prev.map((item, index) => {
            if (index === idx) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          });
        } else {
          return prev.concat(data.item);
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleCheckout = async () => {
    try {
      await axios.post("/api/checkout");
      setCartItems([]);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div id="app">
      <Header cartItems={cartItems} onCheckout={handleCheckout} />
      <main>
        <ProductList
          products={products}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
          onAddToCart={handleAddToCart}
        />
        <AddForm onSubmit={handleAddProduct} />
      </main>
    </div>
  );
};

export default App;
