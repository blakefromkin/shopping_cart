const Header = ({ cartItems }) => {
  return (
    <>
      <header>
        <h1>The Shop!</h1>
        <div className="cart">
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <CartItemsTable cartItems={cartItems} />
          )}
          <p>
            Total: $
            {cartItems.reduce(
              (accum, item) => (accum += item.quantity * item.price),
              0,
            )}
          </p>
          <button className="checkout">Checkout</button>
        </div>
      </header>
    </>
  );
};

const CartItemsTable = ({ cartItems }) => {
  return (
    <table className="cart-items">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Header;
