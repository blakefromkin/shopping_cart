import { useState } from "react";

const AddForm = ({ onSubmit }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [fields, setFields] = useState({ title: "", price: "", quantity: "" });

  const handleCancelClick = () => {
    setIsVisible(false);
  };

  return (
    <div className={`add-form ${isVisible ? "visible" : ""}`}>
      <p>
        <button
          className="add-product-button"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          Add A Product
        </button>
      </p>
      <h3>Add Product</h3>
      <form onSubmit={() => onSubmit(fields)}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            onChange={(e) =>
              setFields((prev) => {
                return { ...prev, title: e.target.value };
              })
            }
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            onChange={(e) =>
              setFields((prev) => {
                return { ...prev, price: e.target.value };
              })
            }
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            onChange={(e) =>
              setFields((prev) => {
                return { ...prev, quantity: e.target.value };
              })
            }
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
