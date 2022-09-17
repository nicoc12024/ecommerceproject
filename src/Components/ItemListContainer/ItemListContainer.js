import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore";
import NewsLetter from "./NewsLetter/NewsLetter";
import { useAsync } from "../../hooks/useAsync";

function ItemListContainer() {
  const { categoryId } = useParams();

  const getProductsFromFirestore = () => getProducts(categoryId);

  const { data, isLoading } = useAsync(getProductsFromFirestore, [categoryId]);

  if (isLoading) {
    return (
      <div className="minWidth">
        <h1 className="spinner">Loading products...</h1>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="minWidth">
        <h1 className="spinner">There are 0 products on stock at the moment.</h1>
      </div>
    );
  }

  return (
    <>
      <div className="itemListContainer">
        <ItemList products={data} />
      </div>
      <NewsLetter />
    </>
  );
}
export default ItemListContainer;
