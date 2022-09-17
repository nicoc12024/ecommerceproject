import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useAsync } from "../../hooks/useAsync";

function ItemDetailContainer() {
  const { productId } = useParams();

  const getProduct = () => getDoc(doc(db, "products", productId));

  const { data, isLoading } = useAsync(getProduct, [productId]);

  const parseData = data?.data();

  if (isLoading) {
    return (
      <div className="minWidth">
        <h1 className="spinner">Loading product...</h1>;
      </div>
    );
  }

  if (!parseData) {
    return (
      <div className="minWidth">
        <h1 className="spinner">Error.</h1>;
      </div>
    );
  }

  return (
    <div>
      <ItemDetail {...parseData} />
    </div>
  );
}
export default ItemDetailContainer;
