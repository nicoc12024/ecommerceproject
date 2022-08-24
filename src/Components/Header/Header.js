import "./Header.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const { getQuantity, cart } = useContext(CartContext);

  const quantity = getQuantity();

  // Toggle Menu
  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="name">
            <Link to="/">
              <h1>
                Electro Buy<span>.</span>
              </h1>
            </Link>
          </div>
          <nav className={`navBar ${menuActive && "active"} `}>
            <ul>
              <Link to="/" onClick={handleMenuActive}>
                Home
              </Link>
              <Link to="/category/smartphone" onClick={handleMenuActive}>
                Smartphone
              </Link>
              <Link to="/category/laptop" onClick={handleMenuActive}>
                Laptop
              </Link>
              <Link to="/category/tv" onClick={handleMenuActive}>
                Tv
              </Link>
            </ul>
          </nav>
          <div className="cartLogoMenu">
            {cart.length === 0 ? (
              <Link to="/cart">
                <div className="cart">
                  <i className="fa-solid fa-cart-shopping">
                    <p className="cart-quantity">0</p>
                  </i>
                  <p className="cartIconStatus">Cart is empty</p>
                </div>
              </Link>
            ) : (
              <Link to="/cart">
                <div className="cart">
                  <i className="fa-solid fa-cart-shopping">
                    <p className="cart-quantity">{quantity}</p>
                  </i>
                  <p className="cartIconStatus">Your Cart</p>
                </div>
              </Link>
            )}
            <div className="menuIcon" onClick={handleMenuActive}>
              <i className="fa-solid  fa-bars"></i>
              <p className="cartIconStatus">Menu</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
