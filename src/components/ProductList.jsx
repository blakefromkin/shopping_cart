import { useState } from "react";

const ProductList = ({ products }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((prod) => (
          <Product key={prod._id} {...prod} />
        ))}
      </ul>
    </div>
  );
};

const Product = ({ title, price, quantity }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleCancelClick = () => {
    setShowEditForm(false);
  };

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{`$${price === Math.floor(price) ? `${price}.00` : price}`}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit" onClick={handleEditClick}>
            Edit
          </button>
        </div>
        <button className="delete-button">
          <span>X</span>
        </button>
      </div>
      {showEditForm && (
        <EditForm
          setShowEditForm={setShowEditForm}
          onCancelClick={handleCancelClick}
          title={title}
          price={price}
          quantity={quantity}
        />
      )}
    </li>
  );
};

const EditForm = ({ onCancelClick, title, price, quantity }) => {
  const [titleField, setTitleField] = useState(title);
  const [priceField, setPriceField] = useState(price);
  const [quantityField, setQuantityField] = useState(quantity);

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={titleField}
            onChange={(e) => setTitleField(e.target.value)}
            aria-label="Product Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={priceField}
            onChange={(e) => setPriceField(e.target.value)}
            min="0"
            aria-label="Product Price"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={quantityField}
            onChange={(e) => setQuantityField(e.target.value)}
            min="0"
            aria-label="Product Quantity"
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={onCancelClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductList;
