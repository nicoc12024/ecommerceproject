import { useState, useEffect } from "react";
import { getProductById } from "../../asyncProducts";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState();

  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId)
      .then((product) => setProduct(product))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="item-detail-container">
      <ItemDetail {...product} />
    </div>
  );
}
export default ItemDetailContainer;
