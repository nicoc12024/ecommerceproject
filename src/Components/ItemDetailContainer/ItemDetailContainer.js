import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useAsync } from "../../hooks/useAsync";

function ItemDetailContainer() {
  const { productId } = useParams();

  const getProduct = () => getDoc(doc(db, "products", productId));

  const { data, error, isLoading } = useAsync(getProduct, [productId]);

  if (isLoading) {
    return <h1>Cargando productos...</h1>;
  }

  return (
    <div>
      <ItemDetail {...data} />
    </div>
  );
}
export default ItemDetailContainer;
