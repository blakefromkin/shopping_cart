import { useState } from "react";

import ProductDetails from "./ProductDetails";
import EditForm from "./EditForm";

const EditableProduct = ({
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

  return (
    <li className="product">
      <ProductDetails
        _id={_id}
        title={title}
        price={price}
        quantity={quantity}
        onDelete={onDelete}
        onAddToCart={onAddToCart}
        onEditClick={handleEditClick}
      />
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

export default EditableProduct;
