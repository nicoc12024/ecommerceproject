import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../App";

function Item({ product }) {
  const valor = useContext(CartContext);

  return (
    <div className="card">
      <img src={product.image} alt="bed" />
      <div className="info">
        {product.discount && <p className="discount">{product.discount}</p>}
        <p className="brand">
          {product.brand} <br />
        </p>
        <p className="bold model">
          {product.model} <br />
        </p>
        <div className="prices">
          <p className="red">
            {product.price} <br />
          </p>
          <p className="priceBefore">
            {product.priceBefore} <br />
          </p>
        </div>
        <div className="action-button">
          <Link to={`/detail/${product.id}`} className="see-details">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Item;
