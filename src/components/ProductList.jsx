import { useState } from "react";
import EditForm from "./EditForm";

const ProductList = ({ products, onEdit, onDelete, onAddToCart }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((prod) => (
          <Product
            key={prod._id}
            {...prod}
            onEdit={onEdit}
            onDelete={onDelete}
            onAddToCart={onAddToCart}
          />
        ))}
      </ul>
    </div>
  );
};

const Product = ({
  _id,
  title,
  price,
  quantity,
  onEdit,
  onDelete,
  onAddToCart,
}) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditClick = (e) => {
    e.preventDefault();
    setShowEditForm(true);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setShowEditForm(false);
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    onDelete(_id);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (Number(quantity) === 0) {
      window.alert("Item is out of stock.");
    } else {
      onAddToCart(_id);
    }
  };

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{`$${price === Math.floor(price) ? `${price}.00` : price}`}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="edit" onClick={handleEditClick}>
            Edit
          </button>
        </div>
        <button className="delete-button" onClick={handleDeleteClick}>
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
          productId={_id}
          onSubmit={onEdit}
        />
      )}
    </li>
  );
};

export default ProductList;
