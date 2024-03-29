import "./ItemDetail.css";
import Counter from "../Counter/Counter";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CartContext from "../../context/CartContext";
import NotificationContext from "../../Notification/Notification";

function ItemDetail({ model, image, description, price, category, stock }) {
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const { addItem, getProductQuantity } = useContext(CartContext);
  const { setNotification } = useContext(NotificationContext);
  const { productId } = useParams();

  const id = productId;

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
      <h2 className="cardItemDetail__brand">{model}</h2>
      <div className="cardItemDetail__imgAndDescriptionBox">
        <img src={image} alt={category} />
        <p>{description}</p>
      </div>
      <div className="cardItemDetail__price">
        <button>Price: ${price}</button>
      </div>
      {quantityToAdd === 0 ? (
        <Counter stock={stock} onAdd={handleOnAdd} initial={productQuantity} />
      ) : (
        <div className="cardItemDetail__itemDetailCheckout">
          <Link to="/cart">End buying</Link>
          <Link to="/">Continue shopping</Link>
        </div>
      )}
    </div>
  );
}
export default ItemDetail;
