import { useState } from "react";

const EditForm = ({
  onCancelClick,
  title,
  price,
  quantity,
  productId,
  onSubmit,
}) => {
  const [titleField, setTitleField] = useState(title);
  const [priceField, setPriceField] = useState(price);
  const [quantityField, setQuantityField] = useState(quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(
      {
        title: titleField,
        price: priceField,
        quantity: quantityField,
      },
      productId,
    );

    onCancelClick(e);
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={titleField}
            onChange={(e) => setTitleField(e.target.value)}
            aria-label="Product Name"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            step="0.01"
            id="product-price"
            value={priceField}
            onChange={(e) => setPriceField(e.target.value)}
            min="0"
            aria-label="Product Price"
            required
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
            required
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

export default EditForm;
