import axios from "axios";

const baseURL = "/api";

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/products`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const getCart = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/cart`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const addProduct = async (newProduct) => {
  try {
    const { data } = await axios.post(`${baseURL}/products`, newProduct);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const editProduct = async (editedProduct, id) => {
  try {
    const { data } = await axios.put(
      `${baseURL}/products/${id}`,
      editedProduct,
    );
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteProduct = async (productId) => {
  try {
    await axios.delete(`${baseURL}/products/${productId}`);
  } catch (err) {
    console.log(err.message);
  }
};

export const addToCart = async (productId) => {
  try {
    const { data } = await axios.post(`${baseURL}/add-to-cart`, {
      productId,
    });
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const clearCart = async () => {
  try {
    await axios.post(`${baseURL}/checkout`);
  } catch (err) {
    console.log(err.message);
  }
};
