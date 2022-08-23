import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

function ItemDetailContainer() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);

    getDoc(doc(db, "products", productId))
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <h1 className="spinner">Loading products...</h1>;
  }

  return (
    <div className="item-detail-container">
      <ItemDetail {...product} />
    </div>
  );
}
export default ItemDetailContainer;
