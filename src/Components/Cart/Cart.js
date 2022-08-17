import "./Cart.css";
import CartContext from "../../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, clearCart, removeItem } = useContext(CartContext);

  return (
    <div className="cart-page">
      {cart.length === 0 ? (
        <>
          <h2>The cart is empty</h2>
          <Link to="/">
            <h4>Return to Home Page</h4>
          </Link>
        </>
      ) : (
        <>
          {cart.map((prod) => (
            <div className="single-product" key={prod.id}>
              <div>
                <img src={prod.image} alt="" />
              </div>
              <div>Model: {prod.model}</div>
              <div>Quantity: {prod.quantity}</div>
              <div>Price: ${prod.price}</div>
              <div>Subtotal: ${prod.price * prod.quantity}</div>
              <div>
                <button onClick={() => removeItem(prod.id)}>Remove</button>
              </div>
            </div>
          ))}
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
export default Cart;