import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore";
import NewsLetter from "./NewsLetter/NewsLetter";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts(categoryId)
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <h1 className="spinner">Loading products...</h1>;
  }

  return (
    <>
      <div className="itemListContainer">
        <ItemList products={products} />
      </div>
      <NewsLetter />
    </>
  );
}
export default ItemListContainer;
