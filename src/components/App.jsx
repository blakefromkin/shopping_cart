import { useState, useEffect } from "react";
import * as itemsService from "../services/items";

import Header from "./Header";
import ProductList from "./ProductList";
import AddForm from "./AddForm";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await itemsService.getProducts();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const getCart = async () => {
      const cartData = await itemsService.getCart();
      setCartItems(cartData);
    };
    getCart();
  }, []);

  const handleAddProduct = async (newProduct) => {
    const addedProduct = await itemsService.addProduct(newProduct);
    setProducts((prev) => prev.concat(addedProduct));
  };

  const handleEditProduct = async (editedProduct, id) => {
    const data = await itemsService.editProduct(editedProduct, id);
    setProducts((prev) => {
      return prev.map((product) => {
        if (product._id === data._id) {
          return data;
        } else {
          return product;
        }
      });
    });
  };

  const handleDeleteProduct = async (productId) => {
    await itemsService.deleteProduct(productId);
    setProducts((prev) => {
      return prev.filter((product) => product._id !== productId);
    });
  };

  const handleAddToCart = async (productId) => {
    const itemData = await itemsService.addToCart(productId);

    setProducts((prev) => {
      return prev.map((product) => {
        if (product._id === productId) {
          return itemData.product;
        } else {
          return product;
        }
      });
    });

    setCartItems((prev) => {
      const idx = prev.findIndex((item) => item._id === itemData.item._id);
      if (idx >= 0) {
        return prev.map((item, index) => {
          if (index === idx) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return prev.concat(itemData.item);
      }
    });
  };

  const handleCheckout = async () => {
    await itemsService.clearCart();
    setCartItems([]);
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
