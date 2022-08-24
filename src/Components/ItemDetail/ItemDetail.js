import "./ItemDetail.css";
import Counter from "../Counter/Counter";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import NotificationContext from "../../Notification/Notification";

function ItemDetail({ id, model, image, description, price, category, stock }) {
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const { addItem, getProductQuantity } = useContext(CartContext);
  const { setNotification } = useContext(NotificationContext);

  const handleOnAdd = (quantity) => {
    setQuantityToAdd(quantity);
    const productToAdd = {
      id,
      model,
      price,
      quantity,
      image,
    };

    addItem(productToAdd);
    setNotification("success", `Added ${quantity} ${model}`);
  };

  const productQuantity = getProductQuantity(id);

  return (
    <div className="cardItemDetail">
      <h2 className="brand">{model}</h2>
      <div className="imgAndDescriptionBox">
        <img src={image} alt={category} />
        <p>{description}</p>
      </div>
      <div className="price">
        <button>Price: ${price}</button>
      </div>
      {quantityToAdd === 0 ? (
        <Counter stock={stock} onAdd={handleOnAdd} initial={productQuantity} />
      ) : (
        <div className="itemDetailCheckout">
          <Link to="/cart">End buying</Link>
          <Link to="/">Continue shopping</Link>
        </div>
      )}
    </div>
  );
}
export default ItemDetail;
