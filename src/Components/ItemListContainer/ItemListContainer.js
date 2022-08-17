import "./ItemListContainer.css";
import { useState, useEffect } from "react";
// import { getProducts, getProductsByCategory } from "../../asyncProducts";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  // Llama a la api y me trae todos productos o me los trae filtrado por categoría
  useEffect(() => {
    setLoading(true);

    const collectionRef = !categoryId
      ? collection(db, "products")
      : query(collection(db, "products"), where("category", "==", categoryId));

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    // const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    // asyncFunction(categoryId)
    //   .then((products) => {
    //     setProducts(products);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }, [categoryId]);

  if (loading) {
    return <h1>Cargando productos...</h1>;
  }

  return (
    <div className="item-list-container">
      <ItemList products={products} />
    </div>
  );
}
export default ItemListContainer;
