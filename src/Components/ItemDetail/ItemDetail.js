import "./ItemDetail.css";
import Counter from "../Counter/Counter";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";

function ItemDetail({ id, model, image, description, price, category, stock }) {
  const [quantityToAdd, setQuantityToAdd] = useState(0);

  const { addItem, getProductQuantity } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityToAdd(quantity);
    const productToAdd = {
      id,
      model,
      price,
      quantity,
    };

    addItem(productToAdd);
  };

  const productQuantity = getProductQuantity(id);

  return (
    <div className="card-item-detail">
      <h2 className="brand">{model}</h2>
      <div className="img-and-description-box">
        <img src={image} alt={category} />
        <p>{description}</p>
      </div>
      <div className="price">
        <button>Price {price}</button>
      </div>
      {quantityToAdd === 0 ? (
        <Counter stock={stock} onAdd={handleOnAdd} initial={productQuantity} />
      ) : (
        <Link to="/cart">Finalizar Compra</Link>
      )}
    </div>
  );
}
export default ItemDetail;
