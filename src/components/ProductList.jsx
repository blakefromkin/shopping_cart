import EditableProduct from "./EditableProduct";

const ProductList = ({ products, onEdit, onDelete, onAddToCart }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((prod) => (
          <EditableProduct
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

export default ProductList;
