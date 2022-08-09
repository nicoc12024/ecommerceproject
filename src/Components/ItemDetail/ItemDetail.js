import "./ItemDetail.css";
import Counter from "../Counter/Counter";
import { useState } from "react";
import { Link } from "react-router-dom";

function ItemDetail({ model, image, description, price, category, stock }) {
  const [quantity, setQuantity] = useState(0);
  console.log(quantity);

  const handleOnAdd = (quantity) => {
    console.log("agregue al carrito");
    console.log(quantity);
    setQuantity(quantity);
  };

  return (
    <div className="card-item-detail container">
      <h2 className="brand">{model}</h2>
      <div className="img-description">
        <img src={image} alt={category} />
        <p className="description">{description}</p>
      </div>
      <div className="price">
        <button>Price {price}</button>
      </div>
      {quantity === 0 ? (
        <Counter stock={stock} onAdd={handleOnAdd} />
      ) : (
        <Link to="/cart">Finalizar Compra</Link>
      )}
    </div>
  );
}
export default ItemDetail;
