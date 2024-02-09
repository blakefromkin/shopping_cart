const ProductDetails = ({
  _id,
  title,
  price,
  quantity,
  onEditClick,
  onDelete,
  onAddToCart,
}) => {
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
    <div className="product-details">
      <h3>{title}</h3>
      <p className="price">{`$${price === Math.floor(price) ? `${price}.00` : price}`}</p>
      <p className="quantity">{quantity} left in stock</p>
      <div className="actions product-actions">
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="edit" onClick={onEditClick}>
          Edit
        </button>
      </div>
      <button className="delete-button" onClick={handleDeleteClick}>
        <span>X</span>
      </button>
    </div>
  );
};

export default ProductDetails;
