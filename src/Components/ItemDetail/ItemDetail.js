import "./ItemDetail.css";

function ItemDetail({ model, image, description, price, category }) {
  return (
    <div className="card-item-detail container">
      <h2 className="brand">{model}</h2>
      <div className="img-description">
        <img src={image} alt={category} />
        <p className="description">{description}</p>
      </div>
      <div className="price">
        <button>{price}</button>
      </div>
    </div>
  );
}
export default ItemDetail;
