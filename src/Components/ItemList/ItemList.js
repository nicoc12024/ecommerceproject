import Item from "./Item/Item";

function ItemList({ products }) {
  return (
    <div className="top-grid-products-container">
      {products.map((item) => (
        <Item key={item.id} product={item} />
      ))}
    </div>
  );
}
export default ItemList;
