import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncProducts";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <>
      <ItemList products={products} />
    </>
  );
}
export default ItemListContainer;
