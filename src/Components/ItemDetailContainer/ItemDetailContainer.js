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
    return <h1 className="spinner">Loading product...</h1>;
  }

  return (
    <div>
      <ItemDetail {...parseData} />
    </div>
  );
}
export default ItemDetailContainer;
